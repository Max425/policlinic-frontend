import { Component } from '@angular/core';
import { PhotoActionsApiService } from "../../api/swagger/services/photo-actions-api.service";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {
  constructor(public dbService: PhotoActionsApiService) {}

  onFileSelected(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement.files && inputElement.files.length > 0) {
      const file = inputElement.files[0];
      this.uploadFile(file);
    }
  }

  uploadFile(file: File): void {
    const params = {
      body: {
        file: file,
      },
    };
    this.dbService.photoActionsUploadPhotoPost(params).subscribe(
      () => {
        // Обработка успешной загрузки
        console.log('Фото успешно загружено');
      },
      (error) => {
        // Обработка ошибок при загрузке
        console.error('Произошла ошибка при загрузке фото', error);
      }
    );
  }
}
