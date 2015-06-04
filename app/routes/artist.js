import Ember from 'ember';

export default Ember.Route.extend({
  model: function (params) {
    return this.store.find('artists', params.artist_id);
  }
});
