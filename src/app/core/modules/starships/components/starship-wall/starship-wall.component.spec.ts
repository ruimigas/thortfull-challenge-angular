/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { StarshipWallComponent } from './starship-wall.component';

describe('StarshipWallComponent', () => {
  let component: StarshipWallComponent;
  let fixture: ComponentFixture<StarshipWallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StarshipWallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StarshipWallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
