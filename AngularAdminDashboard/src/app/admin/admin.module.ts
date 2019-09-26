import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminComponent } from './admin/admin.component';
import { ManageAgentsComponent } from './manage-agents/manage-agents.component';
import { ManageApplicationsComponent } from './manage-applications/manage-applications.component';


@NgModule({
  declarations: [AdminDashboardComponent, AdminComponent, ManageAgentsComponent, ManageApplicationsComponent],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
