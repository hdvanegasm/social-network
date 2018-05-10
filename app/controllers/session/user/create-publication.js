import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    createPublication(uid) {
      let newPublication = this.get('store').createRecord('publication', {
        text: this.get('text'),
        likes: 0
      });

      this.get('store').findRecord('user', uid).then((user) => {
        user.get('publications').pushObject(newPublication);
        newPublication.save().then(() => {
          user.save().then(() => {
            this.set('text', '');
            window.alert('Publication created');
          });
        })
      });
    }
  }
});
