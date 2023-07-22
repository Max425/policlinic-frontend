import { Injectable } from '@angular/core';
import * as signalR from '@microsoft/signalr';
import {IConflict} from "../../../models/conflict";
@Injectable({
  providedIn: 'root'
})
export class SignalRService {
  public data: IConflict[] = [];
  private hubConnection: signalR.HubConnection
  public startConnection = () => {
    this.hubConnection = new signalR.HubConnectionBuilder()
      .withUrl('https://localhost:7014/conflict')
      .build();
    this.hubConnection
      .start()
      .catch(err => console.log('Error while starting connection: ' + err))
  }

  public addTransferDataListener = () => {
    this.hubConnection.on('transferdata', (data) => {
      this.data = data;
    });
  }

  public sendData = (conflict: IConflict) => {
    this.hubConnection.invoke('Send', conflict)
      .catch(err => console.error(err));
  }
  // public addSendDataListener = () => {
  //   this.hubConnection.on('Receive', (data) => {
  //     this.data = data;
  //   })
  // }
}
