import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyTransactionsDetailsComponent } from './my-transactions-details.component';

describe('MyTransactionsDetailsComponent', () => {
  let component: MyTransactionsDetailsComponent;
  let fixture: ComponentFixture<MyTransactionsDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyTransactionsDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyTransactionsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
