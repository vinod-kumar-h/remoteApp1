import { Routes } from '@angular/router';
import { InsDashboard } from './pages/ins-dashboard/ins-dashboard';
import { ClaimList } from './pages/claim-list/claim-list';

export const routes: Routes = [
    {
        path: '',
        component: InsDashboard
    },
    {
        path: 'claim-list',
        component: ClaimList
    }
];
