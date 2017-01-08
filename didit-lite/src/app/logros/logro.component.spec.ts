/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LogroComponent } from './logros.component';

describe('LogroComponent', () => {
  let component: LogroComponent;
  let fixture: ComponentFixture<LogroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
