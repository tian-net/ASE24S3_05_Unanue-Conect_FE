export interface Client {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  isDeleted?: boolean; // 👈 nuevo campo opcional
}
