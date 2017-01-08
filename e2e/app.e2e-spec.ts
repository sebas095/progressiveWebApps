import { DiditLitePage } from './app.po';

describe('didit-lite App', function() {
  let page: DiditLitePage;

  beforeEach(() => {
    page = new DiditLitePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
