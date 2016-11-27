import { MyRouteAppPage } from './app.po';

describe('my-route-app App', function() {
  let page: MyRouteAppPage;

  beforeEach(() => {
    page = new MyRouteAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
