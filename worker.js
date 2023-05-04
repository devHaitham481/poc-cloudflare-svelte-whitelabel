import { config } from 'config.ts'
// const Redis = require('ioredis');

async function handleRequest(request) {
  const domain = new URL(request.url).hostname;

  // const client = new Redis(process.env.REDIS_URL);

  // const customizations = await client.get(getBrandFromDomain(domain));
  // client.quit();


  return new Response(config, {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
      'Access-Control-Allow-Headers': 'Content-Type',
    }
  })
}



// function getBrandFromDomain(domain) {
//   const brandMap = {
//     'brandA.com': 'brandA',
//     'brandB.com': 'brandB'
//   };
//
//   return brandMap[domain];
// }

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})
