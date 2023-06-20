import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCachorroComponent } from './add-cachorro.component';

describe('AddCachorroComponent', () => {
  let component: AddCachorroComponent;
  let fixture: ComponentFixture<AddCachorroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCachorroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddCachorroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
