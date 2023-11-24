import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxHelloWorldComponent } from './ngx-hello-world.component';

describe('NgxHelloWorldComponent', () => {
  let component: NgxHelloWorldComponent;
  let fixture: ComponentFixture<NgxHelloWorldComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NgxHelloWorldComponent]
    });
    fixture = TestBed.createComponent(NgxHelloWorldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
