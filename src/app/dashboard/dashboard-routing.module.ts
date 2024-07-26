import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardPage } from './dashboard.page';


const routes: Routes = [
  {
    path: 'tabs',
    component: DashboardPage,
    children: [
      {
        path: 'homePage',
        loadChildren: () => import('../homePage/homePage.module').then(m => m.HomePageModule)
      },
      {
        path: 'expenses',
        loadChildren: () => import('../expenses/expenses.module').then(m => m.ExpenseModule)
      },
      {
        path: 'summary',
        loadChildren: () => import('../summary/summary.module').then(m => m.SummaryPageModule)
      },
      {
        path: '',
        redirectTo: '/homePage',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/homePage',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class DashboardPageRoutingModule {}
