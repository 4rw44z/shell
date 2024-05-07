import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MfSharedComponent } from './mf-shared.component';

describe('MfSharedComponent', () => {
  let component: MfSharedComponent;
  let fixture: ComponentFixture<MfSharedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MfSharedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MfSharedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
