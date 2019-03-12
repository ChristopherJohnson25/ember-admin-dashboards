import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
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
