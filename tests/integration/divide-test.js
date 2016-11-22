import { divide } from 'ember-awesome-macros';
import { module, test } from 'qunit';
import compute from '../helpers/compute';

module('Integration | Macro | divide');

test('divides two numbers', function(assert) {
  compute({
    assert,
    computed: divide('source1', 'source2'),
    properties: {
      source1: 3,
      source2: 2
    },
    strictEqual: 1.5
  });
});

test('divides three numbers', function(assert) {
  compute({
    assert,
    computed: divide('source1', 'source2', 'source3'),
    properties: {
      source1: 3,
      source2: 2,
      source3: 2
    },
    strictEqual: 0.75
  });
});

test('handles all undefined', function(assert) {
  compute({
    assert,
    computed: divide('source1', 'source2'),
    assertion(val) {
      return isNaN(val);
    }
  });
});

test('handles some undefined', function(assert) {
  compute({
    assert,
    computed: divide('source1', 'source2'),
    properties: {
      source1: 3
    },
    assertion(val) {
      return isNaN(val);
    }
  });
});

test('allows raw numbers', function(assert) {
  compute({
    assert,
    computed: divide(3, 2, 2),
    strictEqual: 0.75
  });
});

test('allows composing', function(assert) {
  compute({
    assert,
    computed: divide(divide('source1', 'source2'), 'source3'),
    properties: {
      source1: 3,
      source2: 2,
      source3: 2
    },
    strictEqual: 0.75
  });
});
