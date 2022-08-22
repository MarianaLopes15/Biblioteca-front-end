import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioAutoresComponent } from './formulario-autores.component';

describe('FormularioAutoresComponent', () => {
  let component: FormularioAutoresComponent;
  let fixture: ComponentFixture<FormularioAutoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioAutoresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioAutoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
