import fc from 'fast-check'

describe('sort function', () => {
  it('should sort integers', () => {
    fc.assert(
      fc.property(
        fc.array(fc.integer()),
        (generatedArray) => {
          const result = sort(generatedArray)
          // assertions
        },
      ),
    )
  })
})
