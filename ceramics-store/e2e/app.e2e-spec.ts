import { EcommerceStore } from './app.po';

describe('oshop App', () => {
  let page: EcommerceStore;

  beforeEach(() => {
    page = new EcommerceStore();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to Taylors Ceramics Store!');
  });
});