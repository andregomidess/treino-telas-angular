import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilSairComponent } from './perfil-sair.component';

describe('PerfilSairComponent', () => {
  let component: PerfilSairComponent;
  let fixture: ComponentFixture<PerfilSairComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PerfilSairComponent]
    });
    fixture = TestBed.createComponent(PerfilSairComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
