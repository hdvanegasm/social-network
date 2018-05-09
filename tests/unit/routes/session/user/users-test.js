import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | session/user/users', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:session/user/users');
    assert.ok(route);
  });
});
