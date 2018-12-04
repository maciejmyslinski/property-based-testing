describe('sort function', () => {
  it('should sort integers', () => {
    generate(array(integers()), (generatedArray) => {
      expect(sort(generatedArray)).toEqual(/* what */)
    })
  })
})
