import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagErroComponent } from './pag-erro.component';

describe('PagErroComponent', () => {
  let component: PagErroComponent;
  let fixture: ComponentFixture<PagErroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagErroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagErroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
