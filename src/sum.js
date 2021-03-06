// Copyright 2015 JC Fisher

import flatten from './flatten'
import error from './error'
import reduce from './reduce'

// SUM a given list of `numbers`
export default function sum(...numbers) {
    return reduce(flatten(flatten(numbers)), (a, b) => {
      if (typeof b !== 'number') { return error.value }
      return a + b
    });
}
