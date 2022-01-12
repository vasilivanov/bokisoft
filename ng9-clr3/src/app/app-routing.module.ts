import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestjsComponent } from './testjs/testjs.component';
import { CustomerComponent } from './reusable-forms/customer/customer.component';
import { ClarityTestComponent } from './clarity-test/clarity-test/clarity-test.component';
import { FaInputComponent } from './projection/fa-input/fa-input.component';


const routes: Routes = [{
  path: 'testjs',
  component: TestjsComponent
}, {
  path:'reusable-forms',
  component: CustomerComponent
}, {
  path:'projection',
  component: FaInputComponent
}, {
  path:'clarity-test',
  component: ClarityTestComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
