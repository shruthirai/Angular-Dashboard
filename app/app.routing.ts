import { RouterModule, Routes, Router } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { HomeComponent } from './views/home/home.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { UserlistComponent } from './views/userlist/userlist.component';
import { PermissionsComponent } from './views/permissions/permissions.component';

const route: Routes = [
    {
        path: 'aeyone/app', component: HomeComponent,
        children: [
            { path: 'dashboard', component:  DashboardComponent},
            {path: 'userlist', component: UserlistComponent},
            {path: 'permission', component: PermissionsComponent}
        ]
    },
    { path: '**', redirectTo: '/aeyone/app/dashboard', pathMatch: 'full' },
    { path: '', redirectTo: '/aeyone/app/dashboard', pathMatch: 'full' },
];

export const routingModule: ModuleWithProviders = RouterModule.forRoot(route);
