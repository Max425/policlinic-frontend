import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatBadgeModule} from '@angular/material/badge';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatMenuModule} from '@angular/material/menu';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';

import { AppComponent } from './app.component';
import { VerificationComponent } from './pages/verification/verification.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { OpPageComponent } from './pages/op-page/op-page.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { VisitorComponent } from './components/visitor/visitor.component';
import {FilterVisitorsPipe} from "./pipes/filter-visitors.pipe";
import { RecordComponent } from './components/record/record.component';
import { NotificationsComponent } from './pages/notifications/notifications.component';
import { ConflictVisitorComponent } from './components/conflict-visitor/conflict-visitor.component';
import { PersonalaccountComponent } from './components/personalaccount/personalaccount.component';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { AuthInterceptor } from './auth.interceptor';
import { ReactiveFormsModule } from '@angular/forms';
import { FloorComponent } from './components/floor/floor.component';
@NgModule({
  declarations: [
    AppComponent,
    VerificationComponent,
    MainPageComponent,
    OpPageComponent,
    NavigationComponent,
    VisitorComponent,
    FilterVisitorsPipe,
    RecordComponent,
    NotificationsComponent,
    ConflictVisitorComponent,
    PersonalaccountComponent,
    FloorComponent
  ],
  imports: [
    ReactiveFormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatButtonModule,
    MatCardModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatFormFieldModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatSidenavModule,
    MatTableModule,
    MatTabsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
