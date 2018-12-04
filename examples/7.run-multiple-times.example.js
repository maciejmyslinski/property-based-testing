describe('sort function', () => {
  it('should sort integers', () => {
    runMultipleTimes(
      generate(array(integer()), (generatedArray) => {
        const result = sort(generatedArray)
        // assertions
      }),
    )
  })
})
