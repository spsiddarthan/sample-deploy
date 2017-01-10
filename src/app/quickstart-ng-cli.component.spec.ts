import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { QuickstartNgCliAppComponent } from '../app/quickstart-ng-cli.component';

beforeEachProviders(() => [QuickstartNgCliAppComponent]);

describe('App: QuickstartNgCli', () => {
  it('should create the app',
      inject([QuickstartNgCliAppComponent], (app: QuickstartNgCliAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'quickstart-ng-cli works!\'',
      inject([QuickstartNgCliAppComponent], (app: QuickstartNgCliAppComponent) => {
    expect(app.title).toEqual('quickstart-ng-cli works!');
  }));
});
