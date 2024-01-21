/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CustomBootstrapSpinnerComponent } from './custom-bootstrap-spinner.component';

describe('CustomBootstrapSpinnerComponent', () => {
  let component: CustomBootstrapSpinnerComponent;
  let fixture: ComponentFixture<CustomBootstrapSpinnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomBootstrapSpinnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomBootstrapSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
