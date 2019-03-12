import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  email: DS.attr('string'),
  homeAirport: DS.attr(),
  city: DS.attr('string'),
  gender: DS.attr('string'),
  termsOfServiceAgree: DS.attr(),
  avatar: DS.attr('string'),
  favoriteTrips: DS.attr(),
  homeLat: DS.attr('string'),
  homeLng: DS.attr('string'),
  notes: DS.hasMany('user-notes'),
  actions: DS.hasMany('user-actions')
});
