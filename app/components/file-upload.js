import Ember from 'ember';

export default Ember.Component.extend({
  firebaseApp: Ember.inject.service(),
  actions: {
    fileLoaded(file){
      var self = this;
      // let file = file[0];
      let metadata = {
        'contentType' : file.type
      };
      let storeName = this.get('name');
      let storageRef = this.get('firebaseApp').storage().ref();
      let uploadTask = storageRef.child(`uploads/${storeName}/${file.name}`).put(file, metadata).then(snapshot => {
      return snapshot.ref.getDownloadURL();
      }).then(downloadURL => {
        var userDocument = this.store.createRecord('user-document', {
          type: file.type,
          name: file.name,
          user: this.get('user'),
          uploadedBy: this.get('session'),
          url: downloadURL
        });
        userDocument.save().then(() => {
          console.log('save successful');
        }, function() {
          console.log('save failed');
        });
      }).catch(error => {});
    },
  }
});
