import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PadreComponent } from './padre.component';
import { FormsModule } from '@angular/forms';
import { HijoComponent } from '../hijo/hijo.component';
import { HijoModule } from '../hijo/hijo.module';

const routes: Routes = [{ path: '', component: PadreComponent }];

@NgModule({
  imports: [CommonModule, FormsModule, RouterModule.forChild(routes)],
  declarations: [PadreComponent],
})
export class PadreModule {}
