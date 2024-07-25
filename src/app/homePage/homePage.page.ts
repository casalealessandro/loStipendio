import { Component } from '@angular/core';
import { DatabaseService } from '../services/database.service';

@Component({
  selector: 'app-homePage',
  templateUrl: 'homePage.page.html',
  styleUrls: ['homePage.page.scss']
})
export class HomePage {

  salary!: number;
  essentials!: number;
  wants!: number;
  savings!: number;

  constructor(private dbService: DatabaseService) {}

  async saveSalary() {
    await this.dbService.insertIncome(this.salary);
    await this.calculateBudget();
  }

  async calculateBudget() {
    const income = await this.dbService.getLatestIncome();
    if (income) {
      const amount = income.amount;
      this.essentials = amount * 0.5;
      this.wants = amount * 0.3;
      this.savings = amount * 0.2;
    }
  }

}
