import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowseMotosComponent } from './browse-motos.component';

describe('BrowseMotosComponent', () => {
  let component: BrowseMotosComponent;
  let fixture: ComponentFixture<BrowseMotosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrowseMotosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrowseMotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
