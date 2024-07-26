import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ExpensesPage } from './expenses.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { ExpensesRoutingModule } from './expenses-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    ExpensesRoutingModule
  ],
  declarations: [ExpensesPage]
})
export class ExpenseModule {}
