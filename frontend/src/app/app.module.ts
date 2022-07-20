import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { AuthService } from './shared/servecies/auth.service';
import { UserService } from './shared/servecies/user.service';
import { AuthGuard } from './shared/guard/auth.guard';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { ToggleService } from './shared/servecies/toggle.service';

@NgModule({
  declarations: [AppComponent, NotFoundComponent],
  imports: [BrowserModule, HttpClientModule, AuthModule, AppRoutingModule],
  providers: [AuthGuard, UserService, AuthService, ToggleService],
  bootstrap: [AppComponent],
})
export class AppModule {}
