import { AppPage } from './app.po';

describe('aisha-ang-app App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Hello world Angular Website (DK:Getting Started)');
  });
});
