import { PowerChartsPresentationPage } from './app.po';

describe('power-charts-presentation App', () => {
  let page: PowerChartsPresentationPage;

  beforeEach(() => {
    page = new PowerChartsPresentationPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
