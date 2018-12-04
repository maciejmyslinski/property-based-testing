describe('sort function', () => {
  it('should sort integers', () => {
    generate(array(integers()), (generatedArray) => {
      const expectedResult = generatedArray.sort()
      const actualResult = sort(generatedArray)
      expect(actualResult).toEqual(expectedResult)
    })
  })
})
