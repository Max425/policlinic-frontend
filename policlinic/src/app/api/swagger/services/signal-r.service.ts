import { Injectable } from '@angular/core';
import * as signalR from '@aspnet/signalr';
import {IConflict} from "../../../models/conflict";
@Injectable({
  providedIn: 'root'
})
export class SignalRService {
  public data: IConflict[];

  private hubConnection: signalR.HubConnection;

  public startConnection = () => {
    this.hubConnection = new signalR.HubConnectionBuilder()
      .withUrl('https://localhost:7014/conflict')
      .build();

    this.hubConnection
      .start()
      .then(() => console.log('Connection started'))
      .catch(err => console.log('Error while starting connection: ' + err))
  }

  public addTransferDataListener = () => {
    this.hubConnection.on('transferdata', (data) => {
      this.data = data;
      console.log(data);
    });
  }
}
