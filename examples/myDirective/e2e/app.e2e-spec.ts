import { MyDirectivePage } from './app.po';

describe('my-directive App', function() {
  let page: MyDirectivePage;

  beforeEach(() => {
    page = new MyDirectivePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
