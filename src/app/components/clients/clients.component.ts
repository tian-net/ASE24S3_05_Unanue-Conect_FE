import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientFormComponent } from './client-form/client-form.component';
import { ClientListComponent } from './client-list/client-list.component';
import { Client } from './models/client.model';

@Component({
  selector: 'app-clients',
  standalone: true,
  imports: [CommonModule, ClientFormComponent, ClientListComponent],
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent {
  clients: Client[] = [];
  selectedClient: Client | null = null;

  onSaveClient(client: Client): void {
    const index = this.clients.findIndex(c => c.id === client.id);

    if (index > -1) {
      // Si existe, actualizamos
      this.clients[index] = client;
    } else {
      // Si no existe, agregamos
      this.clients.push(client);
    }

    this.selectedClient = null; // Resetear selección
  }

  onEditClient(client: Client): void {
    this.selectedClient = client;
  }

  onDeleteClient(id: number): void {
    const client = this.clients.find(c => c.id === id);
    if (client) client.isDeleted = true;
  }

  onRestoreClient(id: number): void {
    const client = this.clients.find(c => c.id === id);
    if (client) client.isDeleted = false;
  }
}
