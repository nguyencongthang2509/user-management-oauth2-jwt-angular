import { Component } from '@angular/core';
import {MatSidenavContainer} from "@angular/material/sidenav";
import {MatToolbar} from "@angular/material/toolbar";
import {MatNavList} from "@angular/material/list";
import {MatIcon} from "@angular/material/icon";
import {RouterOutlet} from "@angular/router";
import {Observable} from "rxjs";
import {BreakpointObserver, Breakpoints, BreakpointState} from "@angular/cdk/layout";
import {AsyncPipe} from "@angular/common";

@Component({
  selector: 'app-admin-layout',
  standalone: true,
  imports: [
    MatSidenavContainer,
    MatToolbar,
    MatNavList,
    MatIcon,
    RouterOutlet,
    AsyncPipe
  ],
  templateUrl: './admin-layout.component.html',
  styleUrl: './admin-layout.component.css'
})
export class AdminLayoutComponent {
  isHandset$: Observable<BreakpointState> = this.breakpointObserver.observe(Breakpoints.Handset);

  constructor(private breakpointObserver: BreakpointObserver) {}
}
