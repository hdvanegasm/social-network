import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  actions: {
    createPublication(uid) {
      let newPublication = this.get('store').createRecord('publication', {
        text: this.get('text'),
        likes: 0
      });

      let user = this.get('store').findRecord('user', uid).then((user) => {
        user.get('publications').pushObject(newPublication);
        newPublication.save().then(() => {
          user.save().then(function() {
            window.alert('Bien')
          });
        })
      });
    }
  }
});
