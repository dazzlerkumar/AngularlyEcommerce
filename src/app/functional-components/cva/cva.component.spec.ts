import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvaComponent } from './cva.component';

describe('CvaComponent', () => {
  let component: CvaComponent;
  let fixture: ComponentFixture<CvaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CvaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CvaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
