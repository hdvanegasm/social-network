import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    comment(uid, publication) {
      let newComment = this.get('store').createRecord('comment', {
        text: this.get('commentText')
      });
      this.get('store').findRecord('user', uid).then((user) => {
        newComment.set('author', user)
        this.get('store').findRecord('publication', publication.id).then((publication) => {
          publication.get('comments').pushObject(newComment);
          publication.save().then(() => {
            newComment.save().then((() => {
              this.set('commentText', '');
            }));
          });
        });
      })
    }
  }
});
