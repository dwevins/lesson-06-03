import Ember from 'ember';
import config from '../config/environment'

export default Ember.Route.extend({
model({ page }) {
    // const page = params.page
    // const { page } = params;

    return fetch(`https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=${config.nasaKey}&page=${page}`)
      .then((res) => res.json());
  }
});
