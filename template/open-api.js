const { fastify, createServer } = require('./server');
const { promises: fs } = require('fs');
const path = require('path');
const packageJson = require('./package.json');

fastify.register(require('@fastify/swagger'), {
    openapi: {
        info: {
            title: '<%=name%>', description: '<%=description%>', version: packageJson.version
        }, components: {}
    }
});

createServer();

fastify.ready().then(async () => {
    const api = fastify.swagger();
    await fs.writeFile(path.resolve(__dirname, './open-api.json'), JSON.stringify(api, null, 2));
});
