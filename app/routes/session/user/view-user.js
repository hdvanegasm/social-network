import Route from '@ember/routing/route';

export default Route.extend({
  model({ user_id }) {
    return this.get('store').query('publication', {
      orderBy: 'author',
      equalTo: user_id
    });
  }
});
