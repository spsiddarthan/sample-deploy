export class QuickstartNgCliPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('quickstart-ng-cli-app h1')).getText();
  }
}
