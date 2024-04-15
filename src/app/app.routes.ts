import {RouterModule, Routes} from '@angular/router';
import {NgModule} from "@angular/core";
import {UserManagementComponent} from "./views/admin/user-management/user-management.component";

export const routes: Routes = [
  { path: '/user-management', component: UserManagementComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule {
}
