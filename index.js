// Define url to request
const target_url = 'https://cfw-takehome.developers.workers.dev/api/variants'

// Define getting response
const fetchInit = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json;charset=UTF-8'
  }
};

addEventListener('fetch', event => {
  //event.respondWith(handleRequest(event.request))
  event.respondWith(handleRequest(target_url))
})
/**
 * Respond with hello worker text
 * @param {Request} request
 */
async function handleRequest(request) {
  //const cachedResponse = await caches.match(request);
  const get_response = await fetch(request,fetchInit);
  return get_response;
}
