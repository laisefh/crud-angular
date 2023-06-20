import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCachorroComponent } from './list-cachorro.component';

describe('ListCachorroComponent', () => {
  let component: ListCachorroComponent;
  let fixture: ComponentFixture<ListCachorroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListCachorroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListCachorroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
