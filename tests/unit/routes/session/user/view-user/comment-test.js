import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | session/user/view-user/comment', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:session/user/view-user/comment');
    assert.ok(route);
  });
});
