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
export class InteractionsWithDbApiService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `interactionsWithDbGetVisitorsGet()` */
  static readonly InteractionsWithDbGetVisitorsGetPath = '/InteractionsWithDB/GetVisitors';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `interactionsWithDbGetVisitorsGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  interactionsWithDbGetVisitorsGet$Response(
    params?: {
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, InteractionsWithDbApiService.InteractionsWithDbGetVisitorsGetPath, 'get');
    if (params) {
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
   * To access the full response (for headers, for example), `interactionsWithDbGetVisitorsGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  interactionsWithDbGetVisitorsGet(
    params?: {
    },
    context?: HttpContext
  ): Observable<void> {
    return this.interactionsWithDbGetVisitorsGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `interactionsWithDbGetRecordGet()` */
  static readonly InteractionsWithDbGetRecordGetPath = '/InteractionsWithDB/GetRecord';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `interactionsWithDbGetRecordGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  interactionsWithDbGetRecordGet$Response(
    params?: {
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, InteractionsWithDbApiService.InteractionsWithDbGetRecordGetPath, 'get');
    if (params) {
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
   * To access the full response (for headers, for example), `interactionsWithDbGetRecordGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  interactionsWithDbGetRecordGet(
    params?: {
    },
    context?: HttpContext
  ): Observable<void> {
    return this.interactionsWithDbGetRecordGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `interactionsWithDbGetSurveyGet()` */
  static readonly InteractionsWithDbGetSurveyGetPath = '/InteractionsWithDB/GetSurvey';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `interactionsWithDbGetSurveyGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  interactionsWithDbGetSurveyGet$Response(
    params?: {
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, InteractionsWithDbApiService.InteractionsWithDbGetSurveyGetPath, 'get');
    if (params) {
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
   * To access the full response (for headers, for example), `interactionsWithDbGetSurveyGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  interactionsWithDbGetSurveyGet(
    params?: {
    },
    context?: HttpContext
  ): Observable<void> {
    return this.interactionsWithDbGetSurveyGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `interactionsWithDbGetDoctorGet()` */
  static readonly InteractionsWithDbGetDoctorGetPath = '/InteractionsWithDB/GetDoctor';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `interactionsWithDbGetDoctorGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  interactionsWithDbGetDoctorGet$Response(
    params?: {
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, InteractionsWithDbApiService.InteractionsWithDbGetDoctorGetPath, 'get');
    if (params) {
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
   * To access the full response (for headers, for example), `interactionsWithDbGetDoctorGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  interactionsWithDbGetDoctorGet(
    params?: {
    },
    context?: HttpContext
  ): Observable<void> {
    return this.interactionsWithDbGetDoctorGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `interactionsWithDbGetCredentialsGet()` */
  static readonly InteractionsWithDbGetCredentialsGetPath = '/InteractionsWithDB/GetCredentials';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `interactionsWithDbGetCredentialsGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  interactionsWithDbGetCredentialsGet$Response(
    params?: {
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, InteractionsWithDbApiService.InteractionsWithDbGetCredentialsGetPath, 'get');
    if (params) {
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
   * To access the full response (for headers, for example), `interactionsWithDbGetCredentialsGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  interactionsWithDbGetCredentialsGet(
    params?: {
    },
    context?: HttpContext
  ): Observable<void> {
    return this.interactionsWithDbGetCredentialsGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `interactionsWithDbGetOperatorGet()` */
  static readonly InteractionsWithDbGetOperatorGetPath = '/InteractionsWithDB/GetOperator';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `interactionsWithDbGetOperatorGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  interactionsWithDbGetOperatorGet$Response(
    params?: {
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, InteractionsWithDbApiService.InteractionsWithDbGetOperatorGetPath, 'get');
    if (params) {
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
   * To access the full response (for headers, for example), `interactionsWithDbGetOperatorGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  interactionsWithDbGetOperatorGet(
    params?: {
    },
    context?: HttpContext
  ): Observable<void> {
    return this.interactionsWithDbGetOperatorGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `interactionsWithDbCreateVisitorPost()` */
  static readonly InteractionsWithDbCreateVisitorPostPath = '/InteractionsWithDB/CreateVisitor';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `interactionsWithDbCreateVisitorPost()` instead.
   *
   * This method doesn't expect any request body.
   */
  interactionsWithDbCreateVisitorPost$Response(
    params?: {
      firstName?: string;
      lastName?: string;
      fatherName?: string;
      city?: string;
      gender?: string;
      birthDate?: string;
      nationality?: string;
      passportSeries?: number;
      photoBase64?: string;
      passportNumber?: number;
      dateIssue?: string;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, InteractionsWithDbApiService.InteractionsWithDbCreateVisitorPostPath, 'post');
    if (params) {
      rb.query('firstName', params.firstName, {});
      rb.query('lastName', params.lastName, {});
      rb.query('fatherName', params.fatherName, {});
      rb.query('city', params.city, {});
      rb.query('gender', params.gender, {});
      rb.query('birthDate', params.birthDate, {});
      rb.query('nationality', params.nationality, {});
      rb.query('passportSeries', params.passportSeries, {});
      rb.query('photoBase64', params.photoBase64, {});
      rb.query('passportNumber', params.passportNumber, {});
      rb.query('dateIssue', params.dateIssue, {});
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
   * To access the full response (for headers, for example), `interactionsWithDbCreateVisitorPost$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  interactionsWithDbCreateVisitorPost(
    params?: {
      firstName?: string;
      lastName?: string;
      fatherName?: string;
      city?: string;
      gender?: string;
      birthDate?: string;
      nationality?: string;
      passportSeries?: number;
      photoBase64?: string;
      passportNumber?: number;
      dateIssue?: string;
    },
    context?: HttpContext
  ): Observable<void> {
    return this.interactionsWithDbCreateVisitorPost$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `interactionsWithDbCreateRecordPost()` */
  static readonly InteractionsWithDbCreateRecordPostPath = '/InteractionsWithDB/CreateRecord';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `interactionsWithDbCreateRecordPost()` instead.
   *
   * This method doesn't expect any request body.
   */
  interactionsWithDbCreateRecordPost$Response(
    params?: {
      date?: string;
      visId?: number;
      surveyId?: number;
      operatorId?: number;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, InteractionsWithDbApiService.InteractionsWithDbCreateRecordPostPath, 'post');
    if (params) {
      rb.query('date', params.date, {});
      rb.query('visId', params.visId, {});
      rb.query('surveyId', params.surveyId, {});
      rb.query('operatorId', params.operatorId, {});
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
   * To access the full response (for headers, for example), `interactionsWithDbCreateRecordPost$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  interactionsWithDbCreateRecordPost(
    params?: {
      date?: string;
      visId?: number;
      surveyId?: number;
      operatorId?: number;
    },
    context?: HttpContext
  ): Observable<void> {
    return this.interactionsWithDbCreateRecordPost$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `interactionsWithDbCreateSurveyPost()` */
  static readonly InteractionsWithDbCreateSurveyPostPath = '/InteractionsWithDB/CreateSurvey';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `interactionsWithDbCreateSurveyPost()` instead.
   *
   * This method doesn't expect any request body.
   */
  interactionsWithDbCreateSurveyPost$Response(
    params?: {
      title?: string;
      price?: number;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, InteractionsWithDbApiService.InteractionsWithDbCreateSurveyPostPath, 'post');
    if (params) {
      rb.query('title', params.title, {});
      rb.query('price', params.price, {});
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
   * To access the full response (for headers, for example), `interactionsWithDbCreateSurveyPost$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  interactionsWithDbCreateSurveyPost(
    params?: {
      title?: string;
      price?: number;
    },
    context?: HttpContext
  ): Observable<void> {
    return this.interactionsWithDbCreateSurveyPost$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `interactionsWithDbCreateDoctorPost()` */
  static readonly InteractionsWithDbCreateDoctorPostPath = '/InteractionsWithDB/CreateDoctor';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `interactionsWithDbCreateDoctorPost()` instead.
   *
   * This method doesn't expect any request body.
   */
  interactionsWithDbCreateDoctorPost$Response(
    params?: {
      fullName?: string;
      cabinetNumber?: number;
      surveyId?: number;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, InteractionsWithDbApiService.InteractionsWithDbCreateDoctorPostPath, 'post');
    if (params) {
      rb.query('fullName', params.fullName, {});
      rb.query('cabinetNumber', params.cabinetNumber, {});
      rb.query('surveyId', params.surveyId, {});
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
   * To access the full response (for headers, for example), `interactionsWithDbCreateDoctorPost$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  interactionsWithDbCreateDoctorPost(
    params?: {
      fullName?: string;
      cabinetNumber?: number;
      surveyId?: number;
    },
    context?: HttpContext
  ): Observable<void> {
    return this.interactionsWithDbCreateDoctorPost$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `interactionsWithDbCreateCredentialPost()` */
  static readonly InteractionsWithDbCreateCredentialPostPath = '/InteractionsWithDB/CreateCredential';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `interactionsWithDbCreateCredentialPost()` instead.
   *
   * This method doesn't expect any request body.
   */
  interactionsWithDbCreateCredentialPost$Response(
    params?: {
      login?: string;
      password?: string;
      operatorId?: number;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, InteractionsWithDbApiService.InteractionsWithDbCreateCredentialPostPath, 'post');
    if (params) {
      rb.query('login', params.login, {});
      rb.query('password', params.password, {});
      rb.query('operatorId', params.operatorId, {});
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
   * To access the full response (for headers, for example), `interactionsWithDbCreateCredentialPost$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  interactionsWithDbCreateCredentialPost(
    params?: {
      login?: string;
      password?: string;
      operatorId?: number;
    },
    context?: HttpContext
  ): Observable<void> {
    return this.interactionsWithDbCreateCredentialPost$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `interactionsWithDbCreateOperatorPost()` */
  static readonly InteractionsWithDbCreateOperatorPostPath = '/InteractionsWithDB/CreateOperator';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `interactionsWithDbCreateOperatorPost()` instead.
   *
   * This method doesn't expect any request body.
   */
  interactionsWithDbCreateOperatorPost$Response(
    params?: {
      firstName?: string;
      lastName?: string;
      fatherName?: string;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, InteractionsWithDbApiService.InteractionsWithDbCreateOperatorPostPath, 'post');
    if (params) {
      rb.query('firstName', params.firstName, {});
      rb.query('lastName', params.lastName, {});
      rb.query('fatherName', params.fatherName, {});
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
   * To access the full response (for headers, for example), `interactionsWithDbCreateOperatorPost$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  interactionsWithDbCreateOperatorPost(
    params?: {
      firstName?: string;
      lastName?: string;
      fatherName?: string;
    },
    context?: HttpContext
  ): Observable<void> {
    return this.interactionsWithDbCreateOperatorPost$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `interactionsWithDbEditVisitorPut()` */
  static readonly InteractionsWithDbEditVisitorPutPath = '/InteractionsWithDB/EditVisitor';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `interactionsWithDbEditVisitorPut()` instead.
   *
   * This method doesn't expect any request body.
   */
  interactionsWithDbEditVisitorPut$Response(
    params?: {
      firstName?: string;
      lastName?: string;
      fatherName?: string;
      city?: string;
      gender?: string;
      birthDate?: string;
      nationality?: string;
      passportSeries?: number;
      photoBase64?: string;
      passportNumber?: number;
      dateIssue?: string;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, InteractionsWithDbApiService.InteractionsWithDbEditVisitorPutPath, 'put');
    if (params) {
      rb.query('firstName', params.firstName, {});
      rb.query('lastName', params.lastName, {});
      rb.query('fatherName', params.fatherName, {});
      rb.query('city', params.city, {});
      rb.query('gender', params.gender, {});
      rb.query('birthDate', params.birthDate, {});
      rb.query('nationality', params.nationality, {});
      rb.query('passportSeries', params.passportSeries, {});
      rb.query('photoBase64', params.photoBase64, {});
      rb.query('passportNumber', params.passportNumber, {});
      rb.query('dateIssue', params.dateIssue, {});
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
   * To access the full response (for headers, for example), `interactionsWithDbEditVisitorPut$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  interactionsWithDbEditVisitorPut(
    params?: {
      firstName?: string;
      lastName?: string;
      fatherName?: string;
      city?: string;
      gender?: string;
      birthDate?: string;
      nationality?: string;
      passportSeries?: number;
      photoBase64?: string;
      passportNumber?: number;
      dateIssue?: string;
    },
    context?: HttpContext
  ): Observable<void> {
    return this.interactionsWithDbEditVisitorPut$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `interactionsWithDbEditRecordPut()` */
  static readonly InteractionsWithDbEditRecordPutPath = '/InteractionsWithDB/EditRecord';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `interactionsWithDbEditRecordPut()` instead.
   *
   * This method doesn't expect any request body.
   */
  interactionsWithDbEditRecordPut$Response(
    params?: {
      date?: string;
      visId?: number;
      surveyId?: number;
      operatorId?: number;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, InteractionsWithDbApiService.InteractionsWithDbEditRecordPutPath, 'put');
    if (params) {
      rb.query('date', params.date, {});
      rb.query('visId', params.visId, {});
      rb.query('surveyId', params.surveyId, {});
      rb.query('operatorId', params.operatorId, {});
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
   * To access the full response (for headers, for example), `interactionsWithDbEditRecordPut$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  interactionsWithDbEditRecordPut(
    params?: {
      date?: string;
      visId?: number;
      surveyId?: number;
      operatorId?: number;
    },
    context?: HttpContext
  ): Observable<void> {
    return this.interactionsWithDbEditRecordPut$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `interactionsWithDbEditSurveyPut()` */
  static readonly InteractionsWithDbEditSurveyPutPath = '/InteractionsWithDB/EditSurvey';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `interactionsWithDbEditSurveyPut()` instead.
   *
   * This method doesn't expect any request body.
   */
  interactionsWithDbEditSurveyPut$Response(
    params?: {
      title?: string;
      price?: number;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, InteractionsWithDbApiService.InteractionsWithDbEditSurveyPutPath, 'put');
    if (params) {
      rb.query('title', params.title, {});
      rb.query('price', params.price, {});
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
   * To access the full response (for headers, for example), `interactionsWithDbEditSurveyPut$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  interactionsWithDbEditSurveyPut(
    params?: {
      title?: string;
      price?: number;
    },
    context?: HttpContext
  ): Observable<void> {
    return this.interactionsWithDbEditSurveyPut$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `interactionsWithDbEditDoctorPut()` */
  static readonly InteractionsWithDbEditDoctorPutPath = '/InteractionsWithDB/EditDoctor';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `interactionsWithDbEditDoctorPut()` instead.
   *
   * This method doesn't expect any request body.
   */
  interactionsWithDbEditDoctorPut$Response(
    params?: {
      fullName?: string;
      cabinetNumber?: number;
      surveyId?: number;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, InteractionsWithDbApiService.InteractionsWithDbEditDoctorPutPath, 'put');
    if (params) {
      rb.query('fullName', params.fullName, {});
      rb.query('cabinetNumber', params.cabinetNumber, {});
      rb.query('surveyId', params.surveyId, {});
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
   * To access the full response (for headers, for example), `interactionsWithDbEditDoctorPut$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  interactionsWithDbEditDoctorPut(
    params?: {
      fullName?: string;
      cabinetNumber?: number;
      surveyId?: number;
    },
    context?: HttpContext
  ): Observable<void> {
    return this.interactionsWithDbEditDoctorPut$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `interactionsWithDbEditCredentialPut()` */
  static readonly InteractionsWithDbEditCredentialPutPath = '/InteractionsWithDB/EditCredential';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `interactionsWithDbEditCredentialPut()` instead.
   *
   * This method doesn't expect any request body.
   */
  interactionsWithDbEditCredentialPut$Response(
    params?: {
      login?: string;
      password?: string;
      operatorId?: number;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, InteractionsWithDbApiService.InteractionsWithDbEditCredentialPutPath, 'put');
    if (params) {
      rb.query('login', params.login, {});
      rb.query('password', params.password, {});
      rb.query('operatorId', params.operatorId, {});
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
   * To access the full response (for headers, for example), `interactionsWithDbEditCredentialPut$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  interactionsWithDbEditCredentialPut(
    params?: {
      login?: string;
      password?: string;
      operatorId?: number;
    },
    context?: HttpContext
  ): Observable<void> {
    return this.interactionsWithDbEditCredentialPut$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `interactionsWithDbEditOperatorPut()` */
  static readonly InteractionsWithDbEditOperatorPutPath = '/InteractionsWithDB/EditOperator';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `interactionsWithDbEditOperatorPut()` instead.
   *
   * This method doesn't expect any request body.
   */
  interactionsWithDbEditOperatorPut$Response(
    params?: {
      firstName?: string;
      lastName?: string;
      fatherName?: string;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, InteractionsWithDbApiService.InteractionsWithDbEditOperatorPutPath, 'put');
    if (params) {
      rb.query('firstName', params.firstName, {});
      rb.query('lastName', params.lastName, {});
      rb.query('fatherName', params.fatherName, {});
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
   * To access the full response (for headers, for example), `interactionsWithDbEditOperatorPut$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  interactionsWithDbEditOperatorPut(
    params?: {
      firstName?: string;
      lastName?: string;
      fatherName?: string;
    },
    context?: HttpContext
  ): Observable<void> {
    return this.interactionsWithDbEditOperatorPut$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `interactionsWithDbRemoveVisitorDelete()` */
  static readonly InteractionsWithDbRemoveVisitorDeletePath = '/InteractionsWithDB/RemoveVisitor';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `interactionsWithDbRemoveVisitorDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  interactionsWithDbRemoveVisitorDelete$Response(
    params?: {
      passportSeries?: number;
      passportNumber?: number;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, InteractionsWithDbApiService.InteractionsWithDbRemoveVisitorDeletePath, 'delete');
    if (params) {
      rb.query('passportSeries', params.passportSeries, {});
      rb.query('passportNumber', params.passportNumber, {});
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
   * To access the full response (for headers, for example), `interactionsWithDbRemoveVisitorDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  interactionsWithDbRemoveVisitorDelete(
    params?: {
      passportSeries?: number;
      passportNumber?: number;
    },
    context?: HttpContext
  ): Observable<void> {
    return this.interactionsWithDbRemoveVisitorDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `interactionsWithDbRemoveRecordDelete()` */
  static readonly InteractionsWithDbRemoveRecordDeletePath = '/InteractionsWithDB/RemoveRecord';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `interactionsWithDbRemoveRecordDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  interactionsWithDbRemoveRecordDelete$Response(
    params?: {
      dateTime?: string;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, InteractionsWithDbApiService.InteractionsWithDbRemoveRecordDeletePath, 'delete');
    if (params) {
      rb.query('dateTime', params.dateTime, {});
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
   * To access the full response (for headers, for example), `interactionsWithDbRemoveRecordDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  interactionsWithDbRemoveRecordDelete(
    params?: {
      dateTime?: string;
    },
    context?: HttpContext
  ): Observable<void> {
    return this.interactionsWithDbRemoveRecordDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `interactionsWithDbRemoveSurveyDelete()` */
  static readonly InteractionsWithDbRemoveSurveyDeletePath = '/InteractionsWithDB/RemoveSurvey';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `interactionsWithDbRemoveSurveyDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  interactionsWithDbRemoveSurveyDelete$Response(
    params?: {
      title?: string;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, InteractionsWithDbApiService.InteractionsWithDbRemoveSurveyDeletePath, 'delete');
    if (params) {
      rb.query('title', params.title, {});
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
   * To access the full response (for headers, for example), `interactionsWithDbRemoveSurveyDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  interactionsWithDbRemoveSurveyDelete(
    params?: {
      title?: string;
    },
    context?: HttpContext
  ): Observable<void> {
    return this.interactionsWithDbRemoveSurveyDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `interactionsWithDbRemoveDoctorDelete()` */
  static readonly InteractionsWithDbRemoveDoctorDeletePath = '/InteractionsWithDB/RemoveDoctor';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `interactionsWithDbRemoveDoctorDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  interactionsWithDbRemoveDoctorDelete$Response(
    params?: {
      fullName?: string;
      cabinetNumber?: number;
      surveyId?: number;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, InteractionsWithDbApiService.InteractionsWithDbRemoveDoctorDeletePath, 'delete');
    if (params) {
      rb.query('fullName', params.fullName, {});
      rb.query('cabinetNumber', params.cabinetNumber, {});
      rb.query('surveyId', params.surveyId, {});
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
   * To access the full response (for headers, for example), `interactionsWithDbRemoveDoctorDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  interactionsWithDbRemoveDoctorDelete(
    params?: {
      fullName?: string;
      cabinetNumber?: number;
      surveyId?: number;
    },
    context?: HttpContext
  ): Observable<void> {
    return this.interactionsWithDbRemoveDoctorDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `interactionsWithDbRemoveCredentialDelete()` */
  static readonly InteractionsWithDbRemoveCredentialDeletePath = '/InteractionsWithDB/RemoveCredential';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `interactionsWithDbRemoveCredentialDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  interactionsWithDbRemoveCredentialDelete$Response(
    params?: {
      login?: string;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, InteractionsWithDbApiService.InteractionsWithDbRemoveCredentialDeletePath, 'delete');
    if (params) {
      rb.query('login', params.login, {});
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
   * To access the full response (for headers, for example), `interactionsWithDbRemoveCredentialDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  interactionsWithDbRemoveCredentialDelete(
    params?: {
      login?: string;
    },
    context?: HttpContext
  ): Observable<void> {
    return this.interactionsWithDbRemoveCredentialDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `interactionsWithDbRemoveOperatorDelete()` */
  static readonly InteractionsWithDbRemoveOperatorDeletePath = '/InteractionsWithDB/RemoveOperator';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `interactionsWithDbRemoveOperatorDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  interactionsWithDbRemoveOperatorDelete$Response(
    params?: {
      firstName?: string;
      fatherName?: string;
      lastName?: string;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, InteractionsWithDbApiService.InteractionsWithDbRemoveOperatorDeletePath, 'delete');
    if (params) {
      rb.query('firstName', params.firstName, {});
      rb.query('fatherName', params.fatherName, {});
      rb.query('lastName', params.lastName, {});
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
   * To access the full response (for headers, for example), `interactionsWithDbRemoveOperatorDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  interactionsWithDbRemoveOperatorDelete(
    params?: {
      firstName?: string;
      fatherName?: string;
      lastName?: string;
    },
    context?: HttpContext
  ): Observable<void> {
    return this.interactionsWithDbRemoveOperatorDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
