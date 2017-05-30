const React = require('React');
const renderer = require('react-test-renderer');
import FeedItem from '../../../src/components/FeedItem';

describe('FeedItem', () => {
  it('renders correctly', () => {
    const instance = renderer.create(
      <FeedItem
        author="TestAuthor"
        title="Short Title"
        bookmarks={4}
        comments={12}
      />
    );

    expect(instance.toJSON()).toMatchSnapshot();
  });
});