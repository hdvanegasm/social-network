import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | session/user/create-publication', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:session/user/create-publication');
    assert.ok(route);
  });
});
