import React from 'react';
import { render, act } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import Posts from '../Posts';

const server = setupServer(
  rest.get('https://www.reddit.com/r/react.json', (req, res, ctx) => {
    return res(ctx.json({ data: { children: [{ data: { id: '1', title: 'Test Post' } }] } }));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('fetches and displays data from Reddit API', async () => {
  // Mock Reddit API response
  render(<Posts />);

  // async operation to complete
  await act(async () => {});

  // Verify that the API was called
  expect(server.requests.length).toBe(1);

  // Verify rendered component displays the expected data
  const postElement = screen.getByText('Test Post');
  expect(postElement).toBeInTheDocument();
});