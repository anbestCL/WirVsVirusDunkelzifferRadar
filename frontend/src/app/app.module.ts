import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {AppComponent} from './app.component';
import {TestComponentComponent} from './test-component/test-component.component';
import {WelcomeScreenComponent} from './welcome-screen/welcome-screen.component';
import {SymptomsScreenComponent} from './symptoms-screen/symptoms-screen.component';
import {ProgressBarComponent} from './progress-bar/progress-bar.component';
import {ApiModule} from "../api";
import {HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";
import {ButtonsModule, BsDropdownModule, BsDropdownDirective} from "ngx-bootstrap";
import {ProgressbarModule} from "ngx-bootstrap/progressbar";
import { CollapseModule } from 'ngx-bootstrap/collapse';

@NgModule({
  declarations: [
    AppComponent,
    TestComponentComponent,
    WelcomeScreenComponent,
    SymptomsScreenComponent,
    ProgressBarComponent
  ],
  imports: [
    BrowserModule,
    ApiModule,
    HttpClientModule,
    ReactiveFormsModule,
    ButtonsModule,
    ProgressbarModule.forRoot(),
    BsDropdownModule,
    BrowserAnimationsModule,
    CollapseModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
