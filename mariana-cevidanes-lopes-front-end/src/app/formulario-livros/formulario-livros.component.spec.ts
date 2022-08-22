import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioLivrosComponent } from './formulario-livros.component';

describe('FormularioLivrosComponent', () => {
  let component: FormularioLivrosComponent;
  let fixture: ComponentFixture<FormularioLivrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioLivrosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioLivrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
