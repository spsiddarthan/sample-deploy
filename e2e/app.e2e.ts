import { QuickstartNgCliPage } from './app.po';

describe('quickstart-ng-cli App', function() {
  let page: QuickstartNgCliPage;

  beforeEach(() => {
    page = new QuickstartNgCliPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('quickstart-ng-cli works!');
  });
});
