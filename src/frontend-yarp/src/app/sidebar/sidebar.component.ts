import { Component, OnInit, HostBinding, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '../core';

@Component({
  selector: 'tw-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.less'],
  encapsulation: ViewEncapsulation.None
})
export class SidebarComponent implements OnInit {

  @HostBinding('class')
  public classlist = 'sidebar';

  public get userName(): string {
    return this.user.userName;
  }

  public constructor(
    private router: Router,
    private user: UserService
  ) { }

  public ngOnInit(): void {
  }

  public logout(): void {
    this.user.reset();
    window.location.replace('user/logout');
  }
}
