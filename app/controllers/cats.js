import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    deleteCat(cat) {
      if (confirm('Adopt this cat?')) {
        fetch('https://tiny-tn.herokuapp.com/collections/dwe-cats/' + cat._id, {
          method: 'delete',
        })
        .then(() => {
          this.set('model', this.model.filter((item) => {
            return item._id !== cat._id;
          }))
        })
      }
    },

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
      };

      fetch('https://tiny-tn.herokuapp.com/collections/dwe-cats', {
        method: 'post',
        body: JSON.stringify(newObj),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      })
      .then((res) => res.json())
      .then((cat) => {
        this.set('model', [...this.model, cat]);
      });
    }
  }
});
