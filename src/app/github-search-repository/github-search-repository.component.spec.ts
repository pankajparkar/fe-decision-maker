import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubSearchRepositoryComponent } from './github-search-repository.component';

describe('GithubSearchRepositoryComponent', () => {
  let component: GithubSearchRepositoryComponent;
  let fixture: ComponentFixture<GithubSearchRepositoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GithubSearchRepositoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GithubSearchRepositoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
