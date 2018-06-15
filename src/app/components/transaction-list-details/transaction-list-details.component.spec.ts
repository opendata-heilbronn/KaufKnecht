import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionListDetailsComponent } from './transaction-list-details.component';

describe('TransactionListDetailsComponent', () => {
  let component: TransactionListDetailsComponent;
  let fixture: ComponentFixture<TransactionListDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransactionListDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionListDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
