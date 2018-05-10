import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  actions: {
    like(publication) {
      this.get('store').findRecord('publication', publication.id).then((publication) => {
        publication.incrementProperty('likes');
        publication.save();
      })
    }
  }
});
