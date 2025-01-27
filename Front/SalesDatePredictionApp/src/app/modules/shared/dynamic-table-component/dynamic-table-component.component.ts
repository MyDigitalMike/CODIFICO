import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-dynamic-table-component',
  standalone: false,

  templateUrl: './dynamic-table-component.component.html',
  styleUrl: './dynamic-table-component.component.css'
})
export class DynamicTableComponentComponent implements OnInit {
  @Input() columns: { field: string, header: string }[] = [];
  @Input() data: any[] = [];
  @Input() searchEnabled: boolean = false;
  @Output() search: EventEmitter<string> = new EventEmitter<string>();
  @Output() pageChange: EventEmitter<number> = new EventEmitter<number>();

  searchTerm: string = '';
  filteredData: any[] = [];
  currentPage: number = 1;
  itemsPerPage: number = 10;
  totalPages: number = 0;
  constructor() {}
  ngOnInit(): void {
    this.filteredData = [...this.data];
    this.updatePagination();
  }
  ngOnChanges(): void {
    this.filteredData = [...this.data];
    this.updatePagination();
  }
  onSearch(): void {
    this.search.emit(this.searchTerm);
  }
  sortData(column: string): void {
    this.filteredData.sort((a, b) =>
      a[column] > b[column] ? 1 : a[column] < b[column] ? -1 : 0
    );
    this.updatePagination();
  }
  changePage(page: number): void {
    if (page > 0 && page <= this.totalPages) {
      this.currentPage = page;
      this.updatePagination();
      this.pageChange.emit(this.currentPage);
    }
  }
  private updatePagination(): void {
    this.totalPages = Math.ceil(this.filteredData.length / this.itemsPerPage);
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.filteredData = [...this.data].slice(startIndex, endIndex);
  }
}
