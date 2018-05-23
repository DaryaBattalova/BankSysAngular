import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { UserListComponent } from './components/user-management/user-list/user-list.component';
import { UserInfoComponent } from './components/user-management/user-info/user-info.component';
import { CommonComponent } from './main/main.component';
import { RegisterComponent } from './components/security/register/register.component';
import { PasswordRecoveryComponent } from './components/security/restore-password/restore-password-recovery/password-recovery.component';
import { RestorePasswordEnterEmailComponent } from './components/security/restore-password/restore-password-enter-email/restore-password-enter-email.component';
import { RestorePasswordNotificationComponent } from './components/security/restore-password/restore-password-notification/restore-password-notification.component';
import { RestorePasswordSendSuccessComponent } from './components/security/restore-password/restore-password-send-success/restore-password-send-success.component';
import { ConfirmEmailComponent } from './components/security/confirm-email/confirm-email.component';
import { DeniedComponent } from './components/notifications/denied/denied.component';
import { AccountInfoComponent } from './components/user-management/account-info/account-info.component';
import { LoginComponent } from './components/security/login/login.component';
import { BankListComponent } from './components/bank/bank-list/bank-list.component';
import { BankWorkerComponent } from './components/bank/bank-worker/bank-worker.component';
import { RegisterNotificationComponent } from './components/security/register-notification/register-notification.component';
import { OrderTicketComponent } from './components/bank/order-ticket/order-ticket.component';
import { TicketComponent } from './components/bank/ticket/ticket.component';
import { TicketViewComponent } from './components/bank/ticket-view/ticket-view.component';


const routes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: 'main', component: LoginComponent },
  { path: 'accounts', component: UserListComponent },
  { path: 'denied', component: DeniedComponent },
  { path: 'accounts/:id', component: UserInfoComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'restorePassword/email', component: RestorePasswordEnterEmailComponent },
  { path: 'restorePassword/newPassword', component: PasswordRecoveryComponent },
  { path: 'restore/password/send/success', component: RestorePasswordSendSuccessComponent },
  { path: 'passwordHasBeenChanged', component: RestorePasswordNotificationComponent },
  { path: 'confirm/email', component: ConfirmEmailComponent },
  { path: 'account/info', component: AccountInfoComponent },
  { path: 'login', component: LoginComponent },
  { path: 'api/v1/banks/:bankList', component: BankListComponent },
  { path: 'api/v1/exchangeRates/:id', component: BankListComponent },
  { path: 'api/v1/bankWorker', component: BankWorkerComponent },
  { path: 'successfulRegistration', component: RegisterNotificationComponent },
  { path: 'api/v1/orderTicket', component: OrderTicketComponent },
  { path: 'api/v1/tickets/:bankIdAndDate', component: OrderTicketComponent },
  { path: 'api/v1/ticket', component: TicketComponent },
  { path: 'api/v1/tickets/:ticketCreation', component: TicketComponent },
  { path: 'api/v1/ticketView', component: TicketViewComponent }

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
