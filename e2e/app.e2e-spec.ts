import { SevenWondersScorePage } from './app.po';

describe('bgr App', function() {
  let page: SevenWondersScorePage;

  beforeEach(() => {
    page = new SevenWondersScorePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Seven Wonders Score');
  });
});
