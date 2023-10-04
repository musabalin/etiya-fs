import { Component } from '@angular/core';

@Component({
  templateUrl: './first-workshop.component.html',
  styleUrls: ['./first-workshop.component.css']
})
export class FirstWorkshopComponent {
  
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
