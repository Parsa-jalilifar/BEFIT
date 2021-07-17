import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})

export class ManagerService {

  constructor(private db: AngularFirestore) { }


  getMemberShipPlans() {
    return this.db.collection('memberShipPlans').valueChanges();
  }

}

