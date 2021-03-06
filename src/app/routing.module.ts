import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./home/home.component";
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
    {path: 'home', component: HomeComponent },
    {path: 'profile', component: ProfileComponent },
    {path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
    imports: [ RouterModule.forRoot(routes, { useHash: true }) ],
    exports: [ RouterModule ]
})
export class RoutingModule {}
