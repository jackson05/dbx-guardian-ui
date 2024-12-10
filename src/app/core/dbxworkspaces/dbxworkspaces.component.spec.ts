import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DbxworkspacesComponent } from './dbxworkspaces.component';

describe('DbxworkspacesComponent', () => {
  let component: DbxworkspacesComponent;
  let fixture: ComponentFixture<DbxworkspacesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DbxworkspacesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DbxworkspacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
