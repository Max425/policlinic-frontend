/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';


@Injectable({ providedIn: 'root' })
export class AccountApiService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `tokenPost()` */
  static readonly TokenPostPath = '/token';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tokenPost()` instead.
   *
   * This method doesn't expect any request body.
   */
  tokenPost$Response(
    params?: {
      username?: string;
      password?: string;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, AccountApiService.TokenPostPath, 'post');
    if (params) {
      rb.query('username', params.username, {});
      rb.query('password', params.password, {});
    }

    return this.http.request(
      rb.build({ responseType: 'text', accept: '*/*', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tokenPost$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  tokenPost(
    params?: {
      username?: string;
      password?: string;
    },
    context?: HttpContext
  ): Observable<void> {
    return this.tokenPost$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
