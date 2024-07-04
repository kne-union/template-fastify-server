const fp = require('fastify-plugin');

module.exports = fp(async (fastify, options) => {
  const { models, services } = fastify.project;
  fastify.project.services.main = {};
});
