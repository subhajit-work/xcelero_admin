import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SharedModule } from '../../../shared/shared.module';
import { SkillQualificationListPage } from './skill-qualification-list.page';

const routes: Routes = [
  {
    path: '',
    component: SkillQualificationListPage
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
  declarations: [SkillQualificationListPage]
})
export class SkillQualificationListPageModule {}
