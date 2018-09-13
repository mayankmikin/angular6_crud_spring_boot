 import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewiesListComponent } from './newies-list/newies-list.component';

const routes: Routes = [
    { path: '', redirectTo: 'news', pathMatch: 'full' },
    { path: 'news', component: NewiesListComponent },
   
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
