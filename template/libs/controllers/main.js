const fp = require('fastify-plugin');

module.exports = fp((fastify, options) => {
  const { services } = fastify.project;
  fastify.get(
    `${options.prefix}/welcome`,
    {
      onRequest: [],
      schema: {
        query: {}
      },
      response: {
        200: {
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  message: { type: 'string' }
                }
              }
            }
          }
        }
      }
    },
    async request => {
      return { message: 'welcome' };
    }
  );
});
