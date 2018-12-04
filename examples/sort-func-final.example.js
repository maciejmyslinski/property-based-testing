describe('sort function', () => {
  it('should sort integers', () => {
    fc.assert(
      fc.property(fc.array(fc.integer()), (generatedArray) => {
        sort(generatedArray)
      }),
    )
  })
})
