import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCachorroComponent } from './edit-cachorro.component';

describe('EditCachorroComponent', () => {
  let component: EditCachorroComponent;
  let fixture: ComponentFixture<EditCachorroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditCachorroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditCachorroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
