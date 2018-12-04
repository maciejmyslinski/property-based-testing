describe('sort function', () => {
  it('should sort integers', () => {
    generate(array(integer()), (generatedArray) => {
      expect(sort(generatedArray)).toEqual(/* what */)
    })
  })
})
