import { capitalize, raw } from 'ember-awesome-macros';
import { module, test } from 'qunit';
import compute from '../helpers/compute';

module('Integration | Macro | capitalize');

test('returns undefined when doesn\'t exist', function(assert) {
  compute({
    assert,
    computed: capitalize('source'),
    strictEqual: undefined
  });
});

test('returns undefined when undefined', function(assert) {
  compute({
    assert,
    computed: capitalize('source'),
    properties: {
      source: undefined
    },
    strictEqual: undefined
  });
});

test('capitalizes string', function(assert) {
  compute({
    assert,
    computed: capitalize('source'),
    properties: {
      source: 'test string'
    },
    strictEqual: 'Test string'
  });
});

test('returns undefined when composed undefined', function(assert) {
  compute({
    assert,
    computed: capitalize(raw(undefined)),
    strictEqual: undefined
  });
});

test('capitalizes composed string', function(assert) {
  compute({
    assert,
    computed: capitalize(raw('test string')),
    strictEqual: 'Test string'
  });
});
