import { decamelize, raw } from 'ember-awesome-macros';
import { module, test } from 'qunit';
import compute from '../helpers/compute';

module('Integration | Macro | decamelize');

test('returns undefined when doesn\'t exist', function(assert) {
  compute({
    assert,
    computed: decamelize('source'),
    strictEqual: undefined
  });
});

test('returns undefined when undefined', function(assert) {
  compute({
    assert,
    computed: decamelize('source'),
    properties: {
      source: undefined
    },
    strictEqual: undefined
  });
});

test('decamelizes string', function(assert) {
  compute({
    assert,
    computed: decamelize('source'),
    properties: {
      source: 'TestString'
    },
    strictEqual: 'test_string'
  });
});

test('returns undefined when composed undefined', function(assert) {
  compute({
    assert,
    computed: decamelize(raw(undefined)),
    strictEqual: undefined
  });
});

test('decamelizes composed string', function(assert) {
  compute({
    assert,
    computed: decamelize(raw('TestString')),
    strictEqual: 'test_string'
  });
});
