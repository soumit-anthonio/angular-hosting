import { Component, OnInit } from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { SoumitBaseService } from 'src/app/services/soumitbaseservice';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  id: string = '';
  uname: string = '';
  eventname: string = '';
  amount: number = 0;
  when: Date | null = new Date();
  constructor(private _soumitBService: SoumitBaseService) {}
  ngOnInit(): void {}

  display() {
    //this._soumitBService.OnPing('Four');
  }
  addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    this.when = event.value;
  }
  addClicked() {
    if (this.uname == '') {
      alert('Please enter Name');
      return;
    }
    if (this.eventname == '') {
      alert('Please enter Event');
      return;
    }
    if (this.amount == 0) {
      alert('Please enter Amount');
      return;
    }
    if (this.when == null) {
      alert('Please enter When');
      return;
    }
    this._soumitBService.insertData(this.uname, this.eventname, this.amount,this.when);
    this.resetControl();
  }

  private resetControl(){
    this.uname = '';
    this.eventname = '';
    this.amount = 0;
    this.when = null;
  }
}
