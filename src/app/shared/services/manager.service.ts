import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Plan } from '../models/app-model';

@Injectable({
  providedIn: 'root'
})

export class ManagerService {

  constructor(private db: AngularFirestore) { }


  getMemberShipPlans(): Observable<Plan[]> {
    return this.db.collection<Plan>('memberShipPlans').valueChanges();
  }

}

