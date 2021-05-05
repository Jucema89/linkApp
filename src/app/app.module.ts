import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { LinksEffects } from './store/effects/link.effects';

import { environment } from '../environments/environment';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { linksReducer } from './store/reducer/links.reducer';
import { CardUserComponent } from './components/dashboard/card-user/card-user.component';
import { CardCreateLinkComponent } from './components/dashboard/card-create-link/card-create-link.component';
import { CardViewLinkComponent } from './components/dashboard/card-view-link/card-view-link.component';
import { appReducers } from './store/app.reducer';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    CardUserComponent,
    CardCreateLinkComponent,
    CardViewLinkComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    SweetAlert2Module.forRoot(),
    AppRoutingModule,
    ReactiveFormsModule,
    StoreModule.forRoot( appReducers ),
    EffectsModule.forRoot([LinksEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
