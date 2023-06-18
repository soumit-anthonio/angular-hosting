import { Component } from '@angular/core';
import { SoumitBaseService } from 'src/app/services/soumitbaseservice';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  
  constructor(private _soumitService:SoumitBaseService){
    
  }
  
  display(){
    //this._soumitService.OnPing('Four');
  }
}
