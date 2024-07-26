// src/app/services/database.service.ts
import { Injectable } from '@angular/core';
import { CapacitorSQLite, SQLiteConnection, SQLiteDBConnection } from '@capacitor-community/sqlite';

@Injectable({
  providedIn: 'root'
})

export class DatabaseService {
  private sqlite: SQLiteConnection =  new SQLiteConnection(CapacitorSQLite);
  private db!: SQLiteDBConnection

  constructor() {
    this.initDB();
  }

  async initDB() {
  
    try {
      this.db = await this.sqlite.createConnection('salary_db', false, 'no-encryption', 1,false);
      await this.db.open();
      await this.createTables();
    } catch (error) {
      console.error('Unable to open database:', error);
    }
  }

  async createTables() {
    const query = `
      CREATE TABLE IF NOT EXISTS Income (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        amount REAL
      );
      CREATE TABLE IF NOT EXISTS Expenses (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        category TEXT,
        description TEXT,
        amount REAL,
        date TEXT
      );
    `;
    await this.db.execute(query);
  }

  async insertIncome(amount: number) {
    const query = `INSERT INTO Income (amount) VALUES (?)`;
    const values = [amount];
    await this.db.run(query, values);
  }

  async insertExpense(category: string, description: string, amount: number, date: string) {
    const query = `INSERT INTO Expenses (category, description, amount, date) VALUES (?, ?, ?, ?)`;
    const values = [category, description, amount, date];
    await this.db.run(query, values);
  }

  async getLatestIncome() {
    const query = `SELECT * FROM Income ORDER BY id DESC LIMIT 1`;
    const result = await this.db.query(query);
    return result.values![0];
  }

  async getExpenses() {
    const query = `SELECT * FROM Expenses`;
    const result = await this.db.query(query);
    return result.values;
  }
}
