const { fastify, createServer } = require('./server');
const { promises: fs } = require('fs');
const path = require('path');

fastify.register(require('@fastify/swagger'), {
    openapi: {
        info: {
            title: 'ai测评', description: 'ai测评', version: '1.0.0'
        }, components: {}
    }
});

createServer();

fastify.ready().then(async () => {
    const api = fastify.swagger();
    await fs.writeFile(path.resolve(__dirname, './open-api.json'), JSON.stringify(api, null, 2));
});
