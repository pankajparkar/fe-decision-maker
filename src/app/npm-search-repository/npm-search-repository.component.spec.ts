import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NpmSearchRepositoryComponent } from './npm-search-repository.component';

describe('NpmSearchRepositoryComponent', () => {
  let component: NpmSearchRepositoryComponent;
  let fixture: ComponentFixture<NpmSearchRepositoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NpmSearchRepositoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NpmSearchRepositoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
