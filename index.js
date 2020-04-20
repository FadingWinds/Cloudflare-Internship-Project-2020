// Define url to request
const target_url = 'https://cfw-takehome.developers.workers.dev/api/variants';

// Requirement 1: Request the URLs from the API

addEventListener('fetch', async event => {
  event.respondWith(handleRequest(target_url));
});

/*
async function handleRequest(request) {
  //const cachedResponse = await caches.match(request);
  // Define init of the fetch method
  const init = {
	method: 'GET',
	headers: {
	  'content-type': 'application/json;charset=UTF-8',
	},
  };
  const get_response = await fetch(request,init);
  const results = await get_response.json(); // Get JSON format results
  const body_json = JSON.stringify(results); // Turning results to an array
  var urls = JSON.parse(body_json);
  console.log(urls);
  const bi_rand = Math.round(Math.random());
  return new Response(body_json, init);
};
*/

async function handleRequest(request) {
  //const cachedResponse = await caches.match(request);
  // Define init of the fetch method
  const init = {
	method: 'GET',
	headers: {
	  'content-type': 'application/json;charset=UTF-8',
	},
  };
  const get_response = await fetch(request,init);
  const results = await get_response.json(); // Get JSON format results
  const body_json = JSON.stringify(results); // Turning results to an array
  var urls = JSON.parse(body_json);
  console.log(urls);
  const bi_rand = Math.round(Math.random());
  console.log(bi_rand);
  const url_resp = await fetch(urls.variants[bi_rand]);
  return url_resp;
//  return new Response(body_json, init);
};