/* tslint:disable */
/* eslint-disable */
import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiConfiguration, ApiConfigurationParams } from './api-configuration';

import { InteractionsWithDbApiService } from './services/interactions-with-db-api.service';

/**
 * Module that provides all services and configuration.
 */
@NgModule({
  imports: [],
  exports: [],
  declarations: [],
  providers: [
    InteractionsWithDbApiService,
    ApiConfiguration
  ],
})
export class SwaggerApiModule {
  static forRoot(params: ApiConfigurationParams): ModuleWithProviders<SwaggerApiModule> {
    return {
      ngModule: SwaggerApiModule,
      providers: [
        {
          provide: ApiConfiguration,
          useValue: params
        }
      ]
    }
  }

  constructor( 
    @Optional() @SkipSelf() parentModule: SwaggerApiModule,
    @Optional() http: HttpClient
  ) {
    if (parentModule) {
      throw new Error('SwaggerApiModule is already loaded. Import in your base AppModule only.');
    }
    if (!http) {
      throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
      'See also https://github.com/angular/angular/issues/20575');
    }
  }
}
