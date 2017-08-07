import { browser, element, by } from 'protractor';

export class SevenWondersScorePage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('body > bgr-root > bgr-navigation > nav > a')).getText();
  }
}
