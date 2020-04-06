import { PassaroUrbanoPage } from './app.po';

describe('passaro-urbano App', () => {
  let page: PassaroUrbanoPage;

  beforeEach(() => {
    page = new PassaroUrbanoPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
