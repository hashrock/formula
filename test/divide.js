import test from 'tape'
import error from '../fn/error'
import divide from '../fn/divide'

test('divide', (t) => {
  t.plan(4)
  t.equal( divide( 10, 1 ), 10)
  t.equal( divide( 10, 2 ), 5)
  t.equal( divide( 10, 5 ), 2)
  t.equal( divide( 10, 0 ), error.div0)
})
