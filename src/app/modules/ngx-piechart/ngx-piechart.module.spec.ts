import { NgxPiechartModule } from './ngx-piechart.module';

describe('NgxPiechartModule', () => {
  let ngxPiechartModule: NgxPiechartModule;

  beforeEach(() => {
    ngxPiechartModule = new NgxPiechartModule();
  });

  it('should create an instance', () => {
    expect(ngxPiechartModule).toBeTruthy();
  });
});
