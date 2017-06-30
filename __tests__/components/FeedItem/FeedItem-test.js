import React from 'react'
import renderer from 'react-test-renderer'
import FeedItem from '../../../src/components/FeedItem'

describe('FeedItem', () => {
  it('renders correctly', () => {
    const author = { email: 'jacob.juul@gmail.com' }

    const instance = renderer.create(
      <FeedItem
        author={author}
        title="Short Title"
        bookmarks={4}
        comments={12}
        date={new Date("1985-06-20")}
      />
    )

    expect(instance.toJSON()).toMatchSnapshot()
  })
})
