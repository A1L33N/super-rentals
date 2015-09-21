import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('city');
  },

  actions: {
    destroyCity(city) {
      // debugger;
      city.destroyRecord();
      this.transitionTo('cities');
    }
  }

});
