import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RXJSComponent } from './rx-js.component';

describe('RXJSComponent', () => {
  let component: RXJSComponent;
  let fixture: ComponentFixture<RXJSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RXJSComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RXJSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
