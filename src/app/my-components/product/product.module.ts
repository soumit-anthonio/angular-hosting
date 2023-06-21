import { NgModule } from '@angular/core';
import { ProductComponent } from './product.component';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ColorDirective } from 'src/app/color.directive';
import { SoumitBaseService } from 'src/app/services/soumitbaseservice';
import { SoumitService } from 'src/app/services/soumit.service';
import { FormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';

const productRoutes: Routes = [{ path: '', component: ProductComponent }];
@NgModule({
  declarations: [ProductComponent, ColorDirective],
  imports: [
    CommonModule,
    FormsModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonToggleModule,
    RouterModule.forChild(productRoutes),
  ],
  providers: [{ provide: SoumitBaseService, useClass: SoumitService }],
})
export class ProductModule {}
