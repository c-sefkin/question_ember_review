Board.Answer = DS.Model.extend({
  body: DS.attr(),
  question: DS.belongsTo('question', {async: true})
});
