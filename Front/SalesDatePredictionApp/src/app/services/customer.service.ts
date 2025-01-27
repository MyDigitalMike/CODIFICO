import { Injectable } from '@angular/core';
import { CustomerPredictionService } from './api/services';
import { CustomerPredictionDto } from './api/models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private custumerPredictionApi: CustomerPredictionService) { }
  /**
  * Método para buscar clientes por nombre
  * @param customerName Nombre del cliente (puede ser vacío o null para obtener todos)
  * @returns Observable<CustomerPredictionDto[]>
  */
  searchCustomers(customerName: string): Observable<CustomerPredictionDto[]> {
    return this.custumerPredictionApi.apiCustomerPredictionGet$Json({
      customerName,
    });
  }
}
