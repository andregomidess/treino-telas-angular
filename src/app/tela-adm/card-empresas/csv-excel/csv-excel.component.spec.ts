import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsvExcelComponent } from './csv-excel.component';

describe('CsvExcelComponent', () => {
  let component: CsvExcelComponent;
  let fixture: ComponentFixture<CsvExcelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CsvExcelComponent]
    });
    fixture = TestBed.createComponent(CsvExcelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
