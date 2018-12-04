describe('sort function', () => {
  it('should sort integers', () => {
    generate(array(integers()), (generatedArray) => {
      sort(generatedArray)
    })
  })
})
