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
import { CommonModule } from '@angular/common';
import { AgePipe } from './pipes/age.pipe';
import { PipeComponent } from './pipe/pipe.component';
import { Parent1Component } from './comm/parent1/parent1.component';
import { Child1Component } from './comm/child1/child1.component';
import { ProductDashboardModule } from './Feature_Module/product-dashboard/product-dashboard.module';
import { ViewchildParentComponent } from './ViewChild/viewchild-parent/viewchild-parent.component';
import { ViewchildChildComponent } from './ViewChild/viewchild-child/viewchild-child.component';
import { ProductsComponent } from './content-projection/products/products.component';
import { ProductWidgetsComponent } from './content-projection/product-widgets/product-widgets.component';
import { ContentProductComponent } from './content-child/content-product/content-product.component';
import { ProductListComponent } from './content-child/product-list/product-list.component';
import { PromiseVsObservableComponent } from './promise-vs-observable/promise-vs-observable.component';
import { ObsVsSubComponent } from './RXJS_Subject/obs-vs-sub/obs-vs-sub.component';
import { RxjsSubjectComponent } from './RXJS_Subject/rxjs-subject/rxjs-subject.component';
import { SubVsBsubComponent } from './RXJS_Subject/sub-vs-bsub/sub-vs-bsub.component';
import { ReplaysubjectComponent } from './RXJS_Subject/replaysubject/replaysubject.component';
import { AsyncSubjectComponent } from './RXJS_Subject/async-subject/async-subject.component';
import { Subcomp1Component } from './RXJS_Subject/subcomp1/subcomp1.component';
import { Subcomp2Component } from './RXJS_Subject/subcomp2/subcomp2.component';
import { UserDataComponent } from './Interceptor/user-data/user-data.component';
import { SetHeaderInterceptor } from './Interceptor/set-header.interceptor';
import { LoggingInterceptor } from './Interceptor/logging.interceptor';
import { TDFormComponent } from './tdform/tdform.component';

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
    HighlightsDirective,
    AgePipe,
    PipeComponent,
    Parent1Component,
    Child1Component,
    ViewchildParentComponent,
    ViewchildChildComponent,
    ProductsComponent,
    ProductWidgetsComponent,
    ContentProductComponent,
    ProductListComponent,
    PromiseVsObservableComponent,
    ObsVsSubComponent,
    RxjsSubjectComponent,
    SubVsBsubComponent,
    ReplaysubjectComponent,
    AsyncSubjectComponent,
    Subcomp1Component,
    Subcomp2Component,
    UserDataComponent,
    TDFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    ProductDashboardModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HeaderInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: SetHeaderInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
