import DS from 'ember-data';

export default DS.Model.extend({
  text: DS.attr('string'),
  likes: DS.attr('number'),

  author: DS.belongsTo('user')
});
