import error from '../fn/error'
import test from 'tape'
import tan from '../fn/tan'

test('tan', function(t) {
  t.plan(4)
  t.equal( tan(0), 0 );
  t.equal( tan(1), 1.5574077246549023 );
  t.equal( tan(NaN), error.value );
  t.equal( tan('invalid'), error.value );
});
