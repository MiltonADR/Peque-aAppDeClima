import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HijoComponent } from './hijo.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', component: HijoComponent }];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  declarations: [HijoComponent],
  exports: [],
})
export class HijoModule {}
