import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlFourItemsFanGooeyMenuComponent } from './bl-four-items-fan-gooey-menu.component';

describe('BlFourItemsFanGooeyMenuComponent', () => {
  let component: BlFourItemsFanGooeyMenuComponent;
  let fixture: ComponentFixture<BlFourItemsFanGooeyMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlFourItemsFanGooeyMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlFourItemsFanGooeyMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
