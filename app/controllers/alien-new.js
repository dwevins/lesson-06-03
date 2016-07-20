import Ember from 'ember';

export default Ember.Controller.extend({
  randomString: 'string',
  actions: {
    newSiting() {
      const data ={
        city: this.city,
        state: this.state,
        rating: this.rating,
      };

      fetch('http://tiny-tn.herokuapp.com/collections/aliens', {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        method: 'post',
        body: JSON.stringify(data),
      });
    }
  }
});
