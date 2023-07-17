/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';

/**
 * Global configuration
 */
@Injectable({
  providedIn: 'root',
})
export class ApiConfiguration {
  rootUrl: string = 'https://localhost:7014';
}

/**
 * Parameters for `SwaggerApiModule.forRoot()`
 */
export interface ApiConfigurationParams {
  rootUrl?: string;
}
