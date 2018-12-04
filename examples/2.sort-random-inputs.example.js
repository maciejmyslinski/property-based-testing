describe('sort function', () => {
  it('should sort integers', () => {
    generate(array(integer()), (generatedArray) => {
      sort(generatedArray)
    })
  })
})
