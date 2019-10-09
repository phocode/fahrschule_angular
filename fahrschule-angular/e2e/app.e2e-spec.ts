import { FahrschuleAngularPage } from './app.po';

describe('fahrschule-angular App', function() {
  let page: FahrschuleAngularPage;

  beforeEach(() => {
    page = new FahrschuleAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
