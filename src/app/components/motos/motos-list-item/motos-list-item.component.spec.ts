import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotosListItemComponent } from './motos-list-item.component';

describe('MotosListItemComponent', () => {
  let component: MotosListItemComponent;
  let fixture: ComponentFixture<MotosListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MotosListItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MotosListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
