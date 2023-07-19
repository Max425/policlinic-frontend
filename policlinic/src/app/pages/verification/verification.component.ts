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

    // Вызываем метод для отправки запроса с логином и паролем
    this.apiService.tokenPost({ username: this.login, password: this.password }).subscribe(
      (response) => {
        const responseBody = JSON.parse(response.body);
        const token = responseBody.access_token;
        if (token) {
          // Убираем префикс "Bearer " и сохраняем токен в localStorage
          localStorage.setItem('access_token', token.replace('Bearer ', ''));

          // Переходим на страницу /operator
          this.router.navigate(['/operator']);
        } else {
          // Если токен не был получен, выводим сообщение об ошибке
          this.errorMessage = 'Неверный логин или пароль';
        }
      },
      (error) => {
        // Выводим ошибку в консоль (для тестирования)
        console.error('Ошибка при авторизации:', error);

        // Выводим сообщение об ошибке на экран
        this.errorMessage = 'Неверный логин или пароль';
      }
    );
  }
}
