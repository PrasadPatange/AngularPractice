import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentComponent } from './communication/parent/parent.component';
import { ChildComponent } from './communication/child/child.component';
import { ReactiveFormComponent } from './forms/reactive-form/reactive-form.component';
import { NgformComponent } from './forms/ngform/ngform.component';
import { DirectivesComponent } from './directives/directives.component';
import { DirectiveComponent } from './directives/directive/directive.component';
import { DataBindingComponent } from './databinding/data-binding/data-binding.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { Comp1Component } from './subject/comp1/comp1.component';
import { Comp2Component } from './subject/comp2/comp2.component';
import { SubComponent } from './subject/sub/sub.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ObservableSubscribeComponent } from './Rxjs/observable-subscribe/observable-subscribe.component';
import { ViewChildComponent } from './communication/view-child/view-child.component';
import { HighlightsDirective } from './directives/highlights.directive';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HeaderInterceptor } from './Interceptor/header.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    ReactiveFormComponent,
    NgformComponent,
    DirectivesComponent,
    DirectiveComponent,
    DataBindingComponent,
    NavbarComponent,
    Comp1Component,
    Comp2Component,
    SubComponent,
    ObservableSubscribeComponent,
    ViewChildComponent,
    HighlightsDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HeaderInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
