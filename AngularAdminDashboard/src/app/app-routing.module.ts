import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './page-not-found.component';
import { AuthGuard } from './user/auth.guard';
import { SelectiveStrategy } from './selective-strategy.service';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'dashboard', component: DashboardComponent },
      {
        path: 'products',
        canActivate: [AuthGuard],
        data: { preload: false },
        loadChildren: () =>
          import('./products/product.module').then(m => m.ProductModule)
      },
      { path: '', redirectTo: '', pathMatch: 'full' },
      { path: '**', component: PageNotFoundComponent }
    ], { enableTracing: true, preloadingStrategy: SelectiveStrategy })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
