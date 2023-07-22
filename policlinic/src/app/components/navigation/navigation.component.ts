import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {SignalRService} from "../../api/swagger/services/signal-r.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit{
  constructor(public signalRService: SignalRService,
              private http: HttpClient) {}

  ngOnInit(): void {
    this.signalRService.startConnection();
    this.signalRService.addTransferDataListener();
    this.startHttpRequest();
  }

  private startHttpRequest = () => {
    this.http.get('https://localhost:7014/api/Сonflict')
      .subscribe(res => {
        console.log(res);
      })
  }
}
