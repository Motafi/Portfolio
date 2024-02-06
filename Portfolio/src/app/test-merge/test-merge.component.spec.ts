import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestMergeComponent } from './test-merge.component';

describe('TestMergeComponent', () => {
  let component: TestMergeComponent;
  let fixture: ComponentFixture<TestMergeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestMergeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TestMergeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
