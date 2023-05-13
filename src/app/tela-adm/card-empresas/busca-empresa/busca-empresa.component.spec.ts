import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscaEmpresaComponent } from './busca-empresa.component';

describe('BuscaEmpresaComponent', () => {
  let component: BuscaEmpresaComponent;
  let fixture: ComponentFixture<BuscaEmpresaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BuscaEmpresaComponent]
    });
    fixture = TestBed.createComponent(BuscaEmpresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
