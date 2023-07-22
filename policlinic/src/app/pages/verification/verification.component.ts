import { Component } from '@angular/core';
import { AccountApiService } from '../../api/swagger/services/account-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-verification',
  templateUrl: './verification.component.html',
  styleUrls: ['./verification.component.css'],
})
export class VerificationComponent {
  login: string = '';
  password: string = '';
  errorMessage: string | null = null;

  constructor(private apiService: AccountApiService, private router: Router) {}

  onLoginButtonClick() {
    this.errorMessage = null;

    this.apiService.tokenPost({ username: this.login, password: this.password }).subscribe(
      (response) => {
        const responseBody = JSON.parse(response.body);
        const token = responseBody.access_token;
        const id = responseBody.id;
        if (token) {
          localStorage.setItem('access_token', token);
          localStorage.setItem('id', id);

          this.router.navigate(['/operator']);
        } else {
          this.errorMessage = 'Неверный логин или пароль';
        }
      },
      (error) => {
        console.error('Ошибка при авторизации:', error);
        this.errorMessage = 'Неверный логин или пароль';
      }
    );
  }
}
