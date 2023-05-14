import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaEmpresasComponent } from './tabela-empresas.component';

describe('TabelaEmpresasComponent', () => {
  let component: TabelaEmpresasComponent;
  let fixture: ComponentFixture<TabelaEmpresasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TabelaEmpresasComponent]
    });
    fixture = TestBed.createComponent(TabelaEmpresasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
