import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    submitNotes: function() {
      var userNotes = this.store.createRecord('user-note', {
        user: this.get('user'),
        content: this.get('content'),
      });
      userNotes.save().then( () => {
        console.log('save successful');
        this.set('content', null);
      }, function() {
        console.log('save failed');
      });
    },
  }
});
