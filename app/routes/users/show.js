import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    return Ember.RSVP.hash({
      user: this.get('store').find('user-profile', params.user_id),
      notes: this.store.findAll('user-note'),
      actions: this.store.findAll('user-action'),
      documents: this.store.findAll('user-document')
    });
  },
  setupController(controller, model) {
    Ember.set(controller, 'user', model.user);
    Ember.set(controller, 'notes', model.notes);
    Ember.set(controller, 'actions', model.actions);
    Ember.set(controller, 'documents', model.documents);
  },
});
