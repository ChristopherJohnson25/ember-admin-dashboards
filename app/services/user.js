import Ember from 'ember';

export default Ember.Service.extend({
  store: Ember.inject.service(),
  session: Ember.inject.service(),
  loadCurrentUser() {
    return new Ember.RSVP.Promise((resolve, reject) => {
      const uid = this.get('session').get('uid');
      if (!Ember.isEmpty(uid)) {
        return this.get('store').findRecord('user-profile', uid).then((user) => {
          this.set('currentUser', user);
          resolve();
        }, reject);
      } else {
        this.set('currentUser', null);
        resolve();
      }
    });
  }

});
