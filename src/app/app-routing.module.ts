import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParentComponent } from './communication/parent/parent.component';
import { DataBindingComponent } from './databinding/data-binding/data-binding.component';
import { DirectiveComponent } from './directives/directive/directive.component';
import { DirectivesComponent } from './directives/directives.component';
import { NgformComponent } from './forms/ngform/ngform.component';
import { ReactiveFormComponent } from './forms/reactive-form/reactive-form.component';
import { ObservableSubscribeComponent } from './Rxjs/observable-subscribe/observable-subscribe.component';
import { SubComponent } from './subject/sub/sub.component';

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
{ path: 'lazyLoading', loadChildren: () => import('./lazy-loading/lazy-loading.module').then(m => m.LazyLoadingModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
