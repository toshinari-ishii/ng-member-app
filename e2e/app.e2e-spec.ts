import { NgMemberAppPage } from './app.po';

describe('ng-member-app App', () => {
  let page: NgMemberAppPage;

  beforeEach(() => {
    page = new NgMemberAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
