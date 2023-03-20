import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from '../layout/layout.component';
import { PadreComponent } from '../components/padre/padre.component';
import { HijoComponent } from '../components/hijo/hijo.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('../components/padre/padre.module').then((m) => m.PadreModule),
      },
      {
        path: 'hijo',
        loadChildren: () =>
          import('../components/hijo/hijo.module').then((m) => m.HijoModule),
      },
    ],
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  declarations: [],
  exports: [RouterModule],
})
export class AppRoutingModule {}
