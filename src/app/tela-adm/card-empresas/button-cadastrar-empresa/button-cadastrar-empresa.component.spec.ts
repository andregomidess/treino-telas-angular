import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonCadastrarEmpresaComponent } from './button-cadastrar-empresa.component';

describe('ButtonCadastrarEmpresaComponent', () => {
  let component: ButtonCadastrarEmpresaComponent;
  let fixture: ComponentFixture<ButtonCadastrarEmpresaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonCadastrarEmpresaComponent]
    });
    fixture = TestBed.createComponent(ButtonCadastrarEmpresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
