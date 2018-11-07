import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListainformesComponent } from './listainformes.component';

describe('ListainformesComponent', () => {
  let component: ListainformesComponent;
  let fixture: ComponentFixture<ListainformesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListainformesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListainformesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
