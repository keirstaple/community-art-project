import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('completed-project-tile', 'Integration | Component | completed project tile', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{completed-project-tile}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#completed-project-tile}}
      template block text
    {{/completed-project-tile}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
