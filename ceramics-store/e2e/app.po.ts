import { browser, by, element } from 'protractor.conf';

export class EcommerceStore {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}