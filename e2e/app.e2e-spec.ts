import { Unrav0104Page } from './app.po';

describe('unrav0104 App', function() {
  let page: Unrav0104Page;

  beforeEach(() => {
    page = new Unrav0104Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
