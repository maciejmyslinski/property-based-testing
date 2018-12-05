describe('sort function', () => {
  it('should sort integers', () => {
    generate(array(integer()), (generatedArray) => {
      const result = sort(generatedArray)

      // type – orange
      // presence / emptiness – plate
      expect(Array.isArray(result)).toBe(true)

      // size – sliver
      expect(generatedArray.length).toBe(result.length)

      result.forEach((element, i) => {
        // shape – half of a sandwich
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
  §
