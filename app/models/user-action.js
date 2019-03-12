import DS from 'ember-data';

export default DS.Model.extend({
  user: DS.belongsTo('user-profile'),
  content: DS.attr('string'),
  createdAt: DS.attr('date', {
    defaultValue() { return new Date(); }
  })
});
