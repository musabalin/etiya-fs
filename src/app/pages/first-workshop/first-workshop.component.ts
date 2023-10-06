import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { login } from 'src/app/store/auth/auth.actions';
import { SharedState } from 'src/app/store/shared.reducers';

@Component({
  templateUrl: './first-workshop.component.html',
  styleUrls: ['./first-workshop.component.css']
})
export class FirstWorkshopComponent {

  constructor(private store: Store<SharedState>) { }

  loginSimulation() {
    // bir aksiyonu triggerlamak
    this.store.dispatch(login({ id: 1, username: 'Musa' }));
  }

  title = 'etiya-fs';

  students = ["Musa", "Özge", "Görkem", "Çiğdem"]
  name: string = "Musa";
  address: string = '';
  toDoList: string[] = [];
  toDo: string = '';
  cartItems: number = 0;

  increase() {
    this.cartItems++;
  }

  increase1() {
    this.cartItems--;
  }

  changeName(event: any) {
    console.log("İsim değişti");
    let newValue = event.target.value;
    this.name = newValue;
  }
  changeNameBtn() {
    this.name = 'Değer Değişti.'
  }

  addToDo() {
    this.toDoList.push(this.toDo);
    this.toDo = '';
  }
  removeToDo(toDo: string) {
    this.toDoList = this.toDoList.filter(item => item != toDo);
  }

}
