import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { ExpensesPage } from './expenses.page';

describe('ExpensesPage', () => {
  let component: ExpensesPage;
  let fixture: ComponentFixture<ExpensesPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExpensesPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(ExpensesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
