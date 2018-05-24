import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EqualValidator } from '../app/components/security/register/register-validator.directive';
import { PasswordEqualValidator } from '../app/components/security/restore-password/restore-password-recovery/password-recovery-validator.directive';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { RegisterComponent } from './components/security/register/register.component';
import { AppRoutingModule } from './/app-routing.module';
import { CommonComponent } from './main/main.component';
import { UserInfoComponent } from './components/user-management/user-info/user-info.component';
import { UserListComponent } from './components/user-management/user-list/user-list.component';
import { LoginComponent } from './components/security/login/login.component';
import { PasswordRecoveryComponent } from './components/security/restore-password/restore-password-recovery/password-recovery.component';
import { RestorePasswordEnterEmailComponent } from './components/security/restore-password/restore-password-enter-email/restore-password-enter-email.component';
import { RestorePasswordNotificationComponent } from './components/security/restore-password/restore-password-notification/restore-password-notification.component';
import { RestorePasswordSendSuccessComponent } from './components/security/restore-password/restore-password-send-success/restore-password-send-success.component';
import { ConfirmEmailComponent } from './components/security/confirm-email/confirm-email.component';
import { DeniedComponent } from './components/notifications/denied/denied.component';

import { AccountService } from './services/user-management/account.service';
import { ProfileService } from './services/user-management/profile.service';
import { StorageService } from './services/storage/storage.service';
import { AuthService } from './services/authentication/auth.service';
import { PagerService } from './services/pager.service';
import { AccountInfoComponent } from './components/user-management/account-info/account-info.component';
import { HighlightModule } from 'ngx-highlightjs';
import { BankListComponent } from './components/bank/bank-list/bank-list.component';
import { BankService } from './services/bank/bank.service';
import { CurrencyExchangeService } from './services/bank/currency-exchange.service';
import { BankWorkerComponent } from './components/bank/bank-worker/bank-worker.component';
import { BankWorkerService } from './services/bank/bank-worker.service';
import { RegisterNotificationComponent } from './components/security/register-notification/register-notification.component';
import { OrderTicketComponent } from './components/bank/order-ticket/order-ticket.component';
import { MyDatePickerModule } from 'mydatepicker';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OrderTicketService } from './services/bank/order-ticket.service';
import { TicketComponent } from './components/bank/ticket/ticket.component';
import { TicketViewComponent } from './components/bank/ticket-view/ticket-view.component';
import { DataService } from './services/bank/data.service';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    EqualValidator,
    PasswordEqualValidator,
    CommonComponent,
    UserInfoComponent,
    UserListComponent,
    LoginComponent,
    PasswordRecoveryComponent,
    RestorePasswordEnterEmailComponent,
    RestorePasswordNotificationComponent,
    RestorePasswordSendSuccessComponent,
    ConfirmEmailComponent,
    DeniedComponent,
    AccountInfoComponent,
    BankListComponent,
    BankWorkerComponent,
    RegisterNotificationComponent,
    OrderTicketComponent,
    TicketComponent,
    TicketViewComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    MyDatePickerModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    BrowserAnimationsModule
  ],
  providers: [
    HttpClient,
    AccountService,
    ProfileService,
    StorageService,
    AuthService,
    PagerService,
    BankService,
    CurrencyExchangeService,
    BankWorkerService,
    OrderTicketService,
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
