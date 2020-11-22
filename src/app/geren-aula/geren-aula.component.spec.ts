import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GerenAulaComponent } from './geren-aula.component';

describe('GerenAulaComponent', () => {
  let component: GerenAulaComponent;
  let fixture: ComponentFixture<GerenAulaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GerenAulaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GerenAulaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
