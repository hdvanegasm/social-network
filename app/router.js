import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('login');
  this.route('register');
  this.route('session', function() {
    this.route('user', { path: ':id' }, function() {
      this.route('users');
      this.route('view-user', { path: ':user_id'});
      this.route('create-publication');
    });
  });
});

export default Router;
