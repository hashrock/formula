import parsequery from '../fn/parsequery';
import test from 'tape';
import error from '../fn/error';

test('parsequery', function(t) {
  t.plan(5)
  t.equal( parsequery(1), error.na);
  t.deepEqual( parsequery(undefined), {});
  t.equal( parsequery(null), error.na);
  t.deepEqual( parsequery("foo=bar"), { foo: 'bar' });
  t.deepEqual( parsequery("foo%2B1=1%3D1&bar=2"), { 'foo+1': '1=1', bar: '2' });
});
