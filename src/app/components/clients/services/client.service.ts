import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Client } from '../models/client.model';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private clients: Client[] = [
    { id: 1, firstName: 'Juan', lastName: 'Pérez', email: 'juan.perez@email.com', isDeleted: false },
    { id: 2, firstName: 'María', lastName: 'López', email: 'maria.lopez@email.com', isDeleted: false }
  ];
  private nextId = 3;
  private clientsSubject = new BehaviorSubject<Client[]>(this.clients);

  constructor() { }

  getClients(): Observable<Client[]> {
    return this.clientsSubject.asObservable();
  }

  addClient(client: Client): void {
    client.id = this.nextId++;
    client.isDeleted = false;
    this.clients.push(client);
    this.clientsSubject.next(this.clients);
  }

  updateClient(updatedClient: Client): void {
    const index = this.clients.findIndex(c => c.id === updatedClient.id);
    if (index !== -1) {
      this.clients[index] = { ...updatedClient };
      this.clientsSubject.next(this.clients);
    }
  }

  softDeleteClient(id: number): void {
    const client = this.clients.find(c => c.id === id);
    if (client) {
      client.isDeleted = true;
      this.clientsSubject.next(this.clients);
    }
  }

  restoreClient(id: number): void {
    const client = this.clients.find(c => c.id === id);
    if (client) {
      client.isDeleted = false;
      this.clientsSubject.next(this.clients);
    }
  }
}
