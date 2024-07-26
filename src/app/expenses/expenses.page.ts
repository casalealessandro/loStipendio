import { Component } from '@angular/core';
import { DatabaseService } from '../services/database.service';

@Component({
  selector: 'app-expenses',
  templateUrl: 'expenses.page.html',
  styleUrls: ['expenses.page.scss']
})
export class ExpensesPage {


  category:string='';
  description:string='';
  amount:number=0;

  constructor(private dbService: DatabaseService) {}

  async addExpense() {
    const date = new Date().toISOString();
    await this.dbService.insertExpense(this.category, this.description, this.amount, date);
  }
}
