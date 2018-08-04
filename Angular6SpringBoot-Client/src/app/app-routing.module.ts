 import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomersListComponent } from './customers-list/customers-list.component';
import { DevicesListComponent } from './devices-list/devices-list.component';
import { CreateCustomerComponent } from './create-customer/create-customer.component';
import { SearchCustomersComponent } from './search-customers/search-customers.component';
import { CreateDeviceComponent } from './create-device/create-device.component';

const routes: Routes = [
    { path: '', redirectTo: 'customer', pathMatch: 'full' },
    { path: 'customer', component: CustomersListComponent },
    { path: 'add', component: CreateCustomerComponent },
    { path: 'createdevice', component: CreateDeviceComponent },
    { path: 'findbyage', component: SearchCustomersComponent },
    { path: 'device', component: DevicesListComponent },
   
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
