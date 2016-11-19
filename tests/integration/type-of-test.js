import { typeOf, raw } from 'ember-awesome-macros';
import { module, test } from 'qunit';
import compute from '../helpers/compute';

module('Integration | Macro | type of');

test('lookup: object is type of object', function(assert) {
  compute({
    assert,
    computed: typeOf('key1'),
    properties: {
      key1: {}
    },
    strictEqual: 'object'
  });
});

test('value: object is type of object', function(assert) {
  compute({
    assert,
    computed: typeOf({}),
    strictEqual: 'object'
  });
});

test('composing: object is type of object', function(assert) {
  compute({
    assert,
    computed: typeOf(raw({})),
    strictEqual: 'object'
  });
});
