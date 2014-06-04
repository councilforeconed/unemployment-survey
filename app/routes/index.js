import Respondent from 'appkit/models/respondent';

export default Ember.Route.extend({
  model: function () {
    return [Respondent.create({
      name: 'Yourself'
    })];
  }
});
