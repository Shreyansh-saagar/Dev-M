import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrameToggleComponent } from './frame-toggle.component';

describe('FrameToggleComponent', () => {
  let component: FrameToggleComponent;
  let fixture: ComponentFixture<FrameToggleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FrameToggleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FrameToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
