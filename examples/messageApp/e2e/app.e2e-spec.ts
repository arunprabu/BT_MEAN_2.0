import { MessageAppPage } from './app.po';

describe('message-app App', function() {
  let page: MessageAppPage;

  beforeEach(() => {
    page = new MessageAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
