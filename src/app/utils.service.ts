import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  private users$ = new BehaviorSubject<any[]>([]);

  setUsers(users: any[]) {
    this.users$.next(users);
  }
  getUsers() {
    return this.users$.asObservable();
  }
  constructor() { }
}
