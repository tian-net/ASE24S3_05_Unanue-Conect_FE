import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Client } from '../models/client.model';

@Component({
  selector: 'app-client-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.css']
})
export class ClientFormComponent implements OnChanges {
  @Input() clientToEdit: Client | null = null;
  @Output() saveClient = new EventEmitter<Client>();

  client: Client = { id: 0, firstName: '', lastName: '', email: '', isDeleted: false };

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['clientToEdit'] && this.clientToEdit) {
      this.client = { ...this.clientToEdit };
    }
  }

  onSubmit(): void {
    if (this.client.id === 0) {
      this.client.id = Math.floor(Math.random() * 1000);
    }
    this.saveClient.emit({ ...this.client });
    this.resetForm();
  }

  resetForm(): void {
    this.client = { id: 0, firstName: '', lastName: '', email: '', isDeleted: false };
  }
}
