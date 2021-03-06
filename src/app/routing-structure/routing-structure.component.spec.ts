import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutingStructureComponent } from './routing-structure.component';

describe('RoutingStructureComponent', () => {
  let component: RoutingStructureComponent;
  let fixture: ComponentFixture<RoutingStructureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoutingStructureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutingStructureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
