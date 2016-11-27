import { MyDataBindingAppPage } from './app.po';

describe('my-data-binding-app App', function() {
  let page: MyDataBindingAppPage;

  beforeEach(() => {
    page = new MyDataBindingAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
