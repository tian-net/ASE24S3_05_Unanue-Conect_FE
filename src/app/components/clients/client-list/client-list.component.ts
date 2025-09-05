import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Client } from '../models/client.model';

@Component({
  selector: 'app-client-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent {
  @Input() clients: Client[] = [];
  @Output() editClient = new EventEmitter<Client>();
  @Output() deleteClient = new EventEmitter<number>();
  @Output() restoreClient = new EventEmitter<number>();

  onSelectClient(client: Client): void {
    this.editClient.emit(client);
  }

  onDeleteClient(id: number): void {
    this.deleteClient.emit(id);
  }

  onRestoreClient(id: number): void {
    this.restoreClient.emit(id);
  }
}
