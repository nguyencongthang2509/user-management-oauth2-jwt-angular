import {NgModule} from '@angular/core';
import {AppComponent} from "./app.component";
import {CommonModule} from "@angular/common";
import {RouterLink, RouterModule, RouterOutlet} from "@angular/router";
import {routes} from "./app.routes";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    RouterOutlet,
    RouterLink,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
