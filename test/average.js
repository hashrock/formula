import test from 'tape';
import average from '../fn/average';
import error from '../fn/error'

test('average', function(t) {

  t.plan(3);

  t.equal( average(1,2,3), 2);
  t.equal( average(4,5,6), 5);
  t.equal( average(4,5,"foo"), error.value);

});
