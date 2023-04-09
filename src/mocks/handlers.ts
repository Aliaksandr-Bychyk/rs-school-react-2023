import { rest } from 'msw';

const handlers = [
  rest.get(
    `https://api.spaceflightnewsapi.net/v3/articles?_limit=20&title_contains=`,
    (request, responce, context) => {
      return responce(
        context.status(200),
        context.json([
          {
            id: 1,
            imageUrl: 'http://image.com/image.png',
            title: 'Title',
            publishedAt: '2020-02-02',
            newsSite: 'NASA',
            url: 'http://image.com',
            summary: 'Summary',
            updatedAt: '2020-02-02',
            featured: false,
            launches: [],
            events: [],
          },
        ])
      );
    }
  ),
];

export default handlers;
