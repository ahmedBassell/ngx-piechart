import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxPiechartComponent } from './ngx-piechart.component';

describe('NgxPiechartComponent', () => {
  let component: NgxPiechartComponent;
  let fixture: ComponentFixture<NgxPiechartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxPiechartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxPiechartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
