import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleFederationComponent } from './module-federation.component';

describe('ModuleFederationComponent', () => {
  let component: ModuleFederationComponent;
  let fixture: ComponentFixture<ModuleFederationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModuleFederationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModuleFederationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
