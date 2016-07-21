import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    addCat() {
      const newObj = {
        name: this.name,
        claws: this.claws || false,
        color: this.color,
        friendly: this.friendly || false,
      };

      if (newObj.name === '' || newObj.color === '') {
        alert('Cats must have name and color');
        return;
      }

      fetch('https://tiny-tn.herokuapp.com/collections/dwe-cats', {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        method: 'post',
        body: JSON.stringify(newObj),
      });
    }
  }
});
