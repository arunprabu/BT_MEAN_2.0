import { MyNotesAppPage } from './app.po';

describe('my-notes-app App', function() {
  let page: MyNotesAppPage;

  beforeEach(() => {
    page = new MyNotesAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
