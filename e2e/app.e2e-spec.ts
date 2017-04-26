import { ProjetoTestePage } from './app.po';

describe('projeto-teste App', () => {
  let page: ProjetoTestePage;

  beforeEach(() => {
    page = new ProjetoTestePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
