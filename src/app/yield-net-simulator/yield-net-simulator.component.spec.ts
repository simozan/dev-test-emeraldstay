import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YieldNetSimulatorComponent } from './yield-net-simulator.component';

describe('YieldNetSimulatorComponent', () => {
  let component: YieldNetSimulatorComponent;
  let fixture: ComponentFixture<YieldNetSimulatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YieldNetSimulatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YieldNetSimulatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
