import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaAdmComponent } from './tela-adm.component';

describe('TelaAdmComponent', () => {
  let component: TelaAdmComponent;
  let fixture: ComponentFixture<TelaAdmComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TelaAdmComponent]
    });
    fixture = TestBed.createComponent(TelaAdmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
