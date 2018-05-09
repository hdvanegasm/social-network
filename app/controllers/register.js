import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  session: service(),
  firebaseApp: service(),
  actions: {
    register() {
      this.get('firebaseApp').auth()
      .createUserWithEmailAndPassword(this.get('email'), this.get('password'))
      .then((data) => {
        let newUser = this.get('store').createRecord('user', {
          id: data.uid,
          email: this.get('email'),
          password: this.get('password')
        });
        newUser.save();
        this.set('email', '');
        this.set('password', '');
        window.alert('Registration successful');
        this.transitionToRoute('session.user.users', data.uid);
      }).catch(function(error) {
        console.error(error);
        window.alert(error.message);
      });
    }
  }
});
