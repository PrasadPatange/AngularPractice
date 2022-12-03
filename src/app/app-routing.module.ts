import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Parent1Component } from './comm/parent1/parent1.component';
import { ParentComponent } from './communication/parent/parent.component';
import { ContentProductComponent } from './content-child/content-product/content-product.component';
import { ProductsComponent } from './content-projection/products/products.component';
import { DataBindingComponent } from './databinding/data-binding/data-binding.component';
import { DirectiveComponent } from './directives/directive/directive.component';
import { DirectivesComponent } from './directives/directives.component';
import { ProductComponent } from './Feature_Module/product-dashboard/product/product.component';
import { NgformComponent } from './forms/ngform/ngform.component';
import { ReactiveFormComponent } from './forms/reactive-form/reactive-form.component';
import { PipeComponent } from './pipe/pipe.component';
import { ObservableSubscribeComponent } from './Rxjs/observable-subscribe/observable-subscribe.component';
import { SubComponent } from './subject/sub/sub.component';
import { ViewchildParentComponent } from './ViewChild/viewchild-parent/viewchild-parent.component';
import { PromiseVsObservableComponent } from './promise-vs-observable/promise-vs-observable.component';
import { RxjsSubjectComponent } from './RXJS_Subject/rxjs-subject/rxjs-subject.component';
import { Subcomp1Component } from './RXJS_Subject/subcomp1/subcomp1.component';
import { UserDataComponent } from './Interceptor/user-data/user-data.component';
import { TDFormComponent } from './tdform/tdform.component';
import { HookParentComponent } from './Hooks/hook-parent/hook-parent.component';
import { DynamicFormComponent } from './forms/dynamic-form/dynamic-form.component';

const routes: Routes = [
{
  path:'comm',
  component:ParentComponent
},
{
  path:'sub',
  component:SubComponent
},
{
  path:'databind',
  component:DataBindingComponent
},
{
  path:'obs',
  component:ObservableSubscribeComponent
},
{
  path:'reactForm',
  component:ReactiveFormComponent
},
{
  path:'ngForm',
  component:NgformComponent
},
{
  path:'Directive',
  component:DirectiveComponent
},
{
  path:'Host',
  component:DirectivesComponent
},
{
  path:'pipe',
  component:PipeComponent
},
{
  path:'parent',
  component:Parent1Component
},
{
  path:'feature',
  component:ProductComponent
},
{
  path:'viewChild',
  component:ViewchildParentComponent
},
{
  path:'content-projection',
  component:ProductsComponent
},
{
  path:'content-child',
  component:ContentProductComponent
},
{
  path:'promise',
  component:PromiseVsObservableComponent
},
{
  path:'subject',
  component:RxjsSubjectComponent
},
{
  path:'comp1',
  component:Subcomp1Component
},
{
  path:'intercept',
  component:UserDataComponent
},
{
  path:'form',
  component:TDFormComponent
},
{
  path:'hook',
  component:HookParentComponent
},
{
  path:'dynamic',
  component:DynamicFormComponent
},
{ path: 'lazyLoading', loadChildren: () => import('./lazy-loading/lazy-loading.module').then(m => m.LazyLoadingModule) },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
