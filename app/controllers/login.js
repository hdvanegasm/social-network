import Controller from '@ember/controller';
import { inject as service } from '@ember/service'

export default Controller.extend({
  session: service(),
  actions: {
    login() {
      this.get('session').open('firebase', {
        provider: 'password',
        email: this.get('email'),
        password: this.get('password')
      }).then((data) => {
         this.set('email', '');
         this.set('password', '');
         console.log(data);
         this.transitionToRoute('session.user.users', data.uid);
      }).catch((error) => {
        console.error(error);
        window.alert(error.message);
      });
    }
  }
});
