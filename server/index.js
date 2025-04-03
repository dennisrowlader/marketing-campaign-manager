'use strict';

const Hapi = require('@hapi/hapi');

const init = async () => {
  // Server details
  const server = Hapi.server({
    port: 3000,
    host: 'localhost',
    routes: {
      cors: true
    }
  });

  // Storage
  let storedData = [];

  // Routes
  server.route({
    method: 'GET',
    path: '/',
    handler: (request, h) => {
      console.log(request.query.test);
      return 'Hello World';
    }
  });

  server.route({
    method: 'POST',
    path: '/create',
    handler: (request, h) => {
      console.log(request);
    }
  });

  await server.start();
  console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {
  console.log(err);
  process.exit(1);
});

init();