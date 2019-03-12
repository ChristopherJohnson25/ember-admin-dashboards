import DS from 'ember-data';

export default DS.Model.extend({
  createdAt: DS.attr('date', {
    defaultValue() { return new Date(); }
  }),
  name: DS.attr('string'),
  type: DS.attr('string'),
  user: DS.belongsTo('user-profile'),
  url: DS.attr('string'),
  uploadedBy: DS.attr('string')
});
