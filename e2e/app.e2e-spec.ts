import { TGBNG2Page } from './app.po';

describe('tgb-ng2 App', function() {
  let page: TGBNG2Page;

  beforeEach(() => {
    page = new TGBNG2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
