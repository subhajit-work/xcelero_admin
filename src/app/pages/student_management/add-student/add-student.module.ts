import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AddStudentPage } from './add-student.page';
import { SharedModule } from '../../../shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: AddStudentPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AddStudentPage]
})
export class AddStudentPageModule {}
