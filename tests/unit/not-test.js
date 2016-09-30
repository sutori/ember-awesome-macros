import Ember from 'ember';
import { not } from 'ember-awesome-macros';
import { module, test } from 'qunit';

const {
  get, setProperties
} = Ember;

const Obj = Ember.Object.extend({
  test: not('source'),
  testNested: not(not('source'))
});

let obj;

module('Unit | Macro | not', {
  beforeEach() {
    obj = Obj.create();
  }
});

test('false returns true', function(assert) {
  assert.expect(1);

  setProperties(obj, {
    source: false
  });

  assert.strictEqual(get(obj, 'test'), true);
});

test('true returns false', function(assert) {
  assert.expect(1);

  setProperties(obj, {
    source: false
  });

  assert.strictEqual(get(obj, 'test'), true);
});

test('nested: false returns false', function(assert) {
  assert.expect(1);

  setProperties(obj, {
    source: false
  });

  assert.strictEqual(get(obj, 'testNested'), false);
});

test('nested: true returns true', function(assert) {
  assert.expect(1);

  setProperties(obj, {
    source: true
  });

  assert.strictEqual(get(obj, 'testNested'), true);
});