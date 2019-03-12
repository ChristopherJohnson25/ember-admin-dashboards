import Ember from 'ember';

export default Ember.Route.extend({
  session: Ember.inject.service(),
  beforeModel: function() {
    return this.get('session').fetch().catch(function() {});
  },
    model() {
    return this.store.findAll('user-profile')
  },
  setupController(controller, model) {
    Ember.set(controller, 'users-global', model);
  },
  actions: {
    signIn: function(provider) {
      this.get('session').open('firebase', { provider: provider}).then(function(data) {
        console.log(data.currentUser);
      });
    },
    signOut: function() {
      this.get('session').close();
    }
  }
});
