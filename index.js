// Define url to request
const target_url = 'https://cfw-takehome.developers.workers.dev/api/variants';

addEventListener('fetch', async event => {
  event.respondWith(handleRequest(target_url));
});

// Define a series of rewriter handlers
class TITLErewriter {
	element(element) {
		element.setInnerContent("Cloudflare Internship Application Project - Wenqing Tang");
	}
}
class HEADrewriter {
	element(element) {
		element.prepend("Welcome to the page of");
	}
}
class TEXTrewriter {
	element(element) {
		element.setInnerContent(
			"Thanks for reviewing my project! "
			);
		element.append("Hope you stay healthy and safe :) ");
		element.append(
			"Click the following button to visit my (in-development) personal website based on Hexo."
			);
	}
}
class LINKrewriter {
	element(element) {
		element.setAttribute("href", 'https://fadingwinds.me/');
		element.setInnerContent("Click and Go visit!")
	}
}


async function handleRequest(request) {
  // Define init of the fetch method
  const init = {
	method: 'GET',
	headers: {
	  'content-type': 'application/json;charset=UTF-8',
	},
  };
  const resp = await fetch(request,init);
  // Get JSON format results
  const results = await resp.json(); 
  console.log("Fetched JSON: " + results);
  // Turning results to an array 
  const body_json = JSON.stringify(results);
  const urls = JSON.parse(body_json);
  // Setup randomized visit
  const bi_rand = Math.round(Math.random());
  console.log("Acquired Binary Random Int:" + bi_rand);
  // Setup cookie for different page; expires in 3 days
  const cookie_init = {
  	method: 'GET',
  	headers: {
  		'Set-Cookie': 'id=bi_rand.toString(); Max-Age = 259200; Secure'
  	},
  };
  const url_resp = await fetch(urls.variants[bi_rand], cookie_init);
  const rewriter = new HTMLRewriter()
  	.on('title', new TITLErewriter())
  	.on('h1', new HEADrewriter())
  	.on('p', new TEXTrewriter())
  	.on('a', new LINKrewriter());
  return rewriter.transform(url_resp);
};