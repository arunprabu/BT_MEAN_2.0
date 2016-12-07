import { LastDayDemoPage } from './app.po';

describe('last-day-demo App', function() {
  let page: LastDayDemoPage;

  beforeEach(() => {
    page = new LastDayDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
