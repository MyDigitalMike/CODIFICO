/* tslint:disable */
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */

import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ShipperDto } from '../../models/shipper-dto';

export interface ApiShipperGet$Plain$Params {
}

export function apiShipperGet$Plain(http: HttpClient, rootUrl: string, params?: ApiShipperGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<ShipperDto>>> {
  const rb = new RequestBuilder(rootUrl, apiShipperGet$Plain.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<ShipperDto>>;
    })
  );
}

apiShipperGet$Plain.PATH = '/api/Shipper';
