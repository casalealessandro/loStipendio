import { Component,OnInit  } from '@angular/core';
import { DatabaseService } from '../services/database.service';

@Component({
  selector: 'app-summary',
  templateUrl: 'summary.page.html',
  styleUrls: ['summary.page.scss']
})
export class SummaryPage implements OnInit {

  
  expenses?: any[] = [];

  constructor(private dbService: DatabaseService) {}

  async ngOnInit() {
    this.expenses = await this.dbService.getExpenses();
  }
}
