import { Component, OnInit } from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { SoumitService } from 'src/app/services/soumit.service';

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
  count: number = 0;
  config: object = {};
  data: any;
  when: Date | null = new Date();
  constructor(private _soumitBService: SoumitService) {}
  ngOnInit(): void {}

  display() {
    //this._soumitBService.OnPing('Four');
  }
  addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    this.when = event.value;
  }
  saveConfigLocally(param: object) {
    this.config = param;
  }
  calculate(a: number, b: number) {
    this.count = a * b + 100;
    return this.count;
  }

  addClicked() {
    debugger;
    let req_params = {
      count: this.calculate(10, 10),
      name: 'sam',
    };
    this.saveConfigLocally(req_params);
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
    debugger;
    this._soumitBService
      .insertData(this.uname, this.eventname, this.amount, this.when)
      .subscribe((response: any) => {
        console.log(response);
        debugger;
        this.data = response;
        alert('Data created'+this.uname);
        this.resetControl();
      });
  }

  resetControl() {
    this.uname = '';
    this.eventname = '';
    this.amount = 0;
    this.when = null;
  }
}
