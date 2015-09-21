import Ember from 'ember';
// var cities = [{
//   name: "Portland",
//   attractions: ['Rose Garden', 'OMSI']
// }, {
//   name: "Austin",
//   attractions: ['Stubbs', 'SXSW']
// }];

export default Ember.Route.extend({
  model() {
    return this.store.findAll('city')
      // return cities
  },

});
