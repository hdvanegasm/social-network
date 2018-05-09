import Controller from '@ember/controller';
import { inject as service } from '@ember/service'

export default Controller.extend({
  session: service(),
  actions: {
    login(provider) {
      this.get('session').open('firebase', {
        provider: 'password',
        email: this.get('username'),
        password: this.get('username')
       }).then(function(data) {
        this.transitionToRoute('session.user.users', data.currentUser);
      }).catch(function(error) {
        window.alert(error.message);
      });
    }
  }
});
