import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceiptPhotoComponent } from './receipt-photo.component';

describe('ReceiptPhotoComponent', () => {
  let component: ReceiptPhotoComponent;
  let fixture: ComponentFixture<ReceiptPhotoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceiptPhotoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceiptPhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
