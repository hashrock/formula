import len from '../fn/len';
import error from '../fn/error';
import test from 'tape';

test('len', function(t) {
  t.plan(4)
  t.equal( len("12345"), 5 );
  t.equal( len(["12345"]), 1 );
  t.equal( len(), error.error );
  t.equal( len(NaN), error.value );
})
