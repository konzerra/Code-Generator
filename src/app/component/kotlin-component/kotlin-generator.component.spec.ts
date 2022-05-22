import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KotlinGeneratorComponent } from './kotlin-generator.component';

describe('GeneratorComponent', () => {
  let component: KotlinGeneratorComponent;
  let fixture: ComponentFixture<KotlinGeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KotlinGeneratorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KotlinGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
