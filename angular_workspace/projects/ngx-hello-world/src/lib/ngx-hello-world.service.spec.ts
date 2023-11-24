import { TestBed } from '@angular/core/testing';

import { NgxHelloWorldService } from './ngx-hello-world.service';

describe('NgxHelloWorldService', () => {
  let service: NgxHelloWorldService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxHelloWorldService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
