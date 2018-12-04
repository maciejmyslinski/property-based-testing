describe('sort function', () => {
  it('should sort integers', () => {
    generate(array(integer()), (generatedArray) => {
      const expectedResult = generatedArray.sort()
      const actualResult = sort(generatedArray)
      expect(actualResult).toEqual(expectedResult)
    })
  })
})
