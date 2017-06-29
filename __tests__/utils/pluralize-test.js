import pluralize from '../../src/utils/pluralize'

describe('pluralize(text, number)', () => {
  it('should not pluralize a word if count is 1', () => {
    const subject = pluralize('Item', 1)
    expect(subject).toEqual('Item')
  })

  it('should pluralize a word if count is > 1 or 0', () => {
    const zeroCount = pluralize('Item', 0)
    const aboveOne = pluralize('Item', 2)
    expect(zeroCount).toEqual('Items')
    expect(aboveOne).toEqual('Items')
  })

  it('should be able to partially apply text', () => {
    const waitingForNumber = pluralize('Item')
    const singular = waitingForNumber(1)
    const plural = waitingForNumber(2)
    expect(singular).toEqual('Item')
    expect(plural).toEqual('Items')
  })

  it('should return empty string if text is undefined', () => {
    const noTextGiven = pluralize(undefined, 2)
    expect(noTextGiven).toEqual('')
  })

  it('should return the word unchanged if no number', () => {
    const noNumberGiven = pluralize('Item', undefined)
    expect(noNumberGiven).toEqual('Item')
  })
})
