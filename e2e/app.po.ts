import { browser, element, by } from 'protractor';

export class SevenWondersScorePage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('bgr-navigation a .navbar-brand')).getText();
  }
}
