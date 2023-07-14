import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OpPageComponent } from './pages/op-page/op-page.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { VerificationComponent } from './pages/verification/verification.component';

const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'login', component: VerificationComponent },
  { path: 'operator', component: OpPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
