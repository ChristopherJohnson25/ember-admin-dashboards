import Ember from 'ember';

export default Ember.Controller.extend({
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
    submitAction: function() {
      var userAction = this.store.createRecord('user-action', {
        user: this.get('user'),
        content: this.get('timeLineContent'),
      });
      userAction.save().then( () => {
        console.log('save successful');
        this.set('timeLineContent', null);
      }, function() {
        console.log('save failed');
      });
    },
  }
});
