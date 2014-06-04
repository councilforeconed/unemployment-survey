import Respondent from 'appkit/models/respondent';

export default Ember.ArrayController.extend({

  canRemoveRespondent: function () {
    return this.get('content').length > 1;
  }.property('content.[]'),

  totalNeither: function () {
      return this.get('content').filterBy('status', 0).length;
  }.property('@each.status'),

  totalEmployed: function () {
      return this.get('content').filterBy('status', "Employed").length;
  }.property('@each.status'),

  totalUnemployed: function () {
      return this.get('content').filterBy('status', "Unemployed").length;
  }.property('@each.status'),

  totalYoungOrInstitutionalized: function () {
      return this.get('content').filterBy('status', "Young or Institutionalized").length;
  }.property('@each.status'),

  unemploymentRate: function () {
    var employed = this.get('totalEmployed');
    var unemployed = this.get('totalUnemployed');
    if (employed + unemployed === 0) return "Not Enough Information";
    return unemployed / (employed + unemployed);
  }.property('@each.status'),

  actions: {
    addRespondent: function () {
      this.get('content').pushObject(Respondent.create());
    },

    removeRespondent: function () {
      this.get('content').popObject();
    }
  }
});
