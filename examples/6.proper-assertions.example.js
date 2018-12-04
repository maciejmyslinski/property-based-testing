describe('sort function', () => {
  it('should sort integers', () => {
    generate(array(integer()), (generatedArray) => {
      const result = sort(generatedArray)

      // type
      expect(Array.isArray(result)).toBe(true)

      // number of elements
      expect(generatedArray.length).toBe(result.length)

      result.forEach((element, i) => {
        // type of elements
        expect(typeof element).toBe('number')

        // every number should be smaller than the next one
        const nextElement = result[i + 1]
        if (nextElement) {
          expect(nextElement).toBeGreaterThan(element)
        }
      })

      // idempotence
      expect(sort(result)).toEqual(result)
    })
  })
})
