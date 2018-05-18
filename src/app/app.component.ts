import { Component, OnInit } from '@angular/core';
import { StorageService } from './services/storage/storage.service';
import { AuthService } from './services/authentication/auth.service';
import { Router, Event, NavigationStart, NavigationEnd, NavigationError, NavigationCancel } from '@angular/router';
import { UserListComponent } from './components/user-management/user-list/user-list.component';
import { environment } from '../environments/environment';
import { UserInfoComponent } from './components/user-management/user-info/user-info.component';
import { BankListComponent } from './components/bank/bank-list/bank-list.component';
import { BankWorkerComponent } from './components/bank/bank-worker/bank-worker.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  static backendUrl = environment.apiUrl;

  title = 'app';
  loading = true;

  constructor(private storageService: StorageService, public authService: AuthService, private router: Router) {
    router.events.subscribe((routerEvent: Event) => {
      this.checkRouterEvent(routerEvent);
    });
  }

  checkRouterEvent(routerEvent: Event): void {
    if (routerEvent instanceof NavigationStart) {
      this.loading = true;
    }

    if (routerEvent instanceof NavigationEnd ||
      routerEvent instanceof NavigationCancel ||
      routerEvent instanceof NavigationError) {
      this.loading = false;
    }
  }

  logOut(): void {
    this.authService.logout();
    this.router.navigateByUrl('/main');
  }

  ngOnInit(): void {
    if (this.storageService.getToken()) {
      this.authService.loginUser(this.storageService.getUser());
    }

    this.authService.addRoleComponent(this.authService.client, BankListComponent.name);

    this.authService.addRoleComponent(this.authService.admin, UserListComponent.name);
    this.authService.addRoleComponent(this.authService.admin, UserInfoComponent.name);

    this.authService.addRoleComponent(this.authService.bankWorker, BankWorkerComponent.name);
  }
}
