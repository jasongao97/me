export async function onRequest(context) {
  const pathname = new URL(context.request.url).pathname;

  if (pathname.endsWith("/script")) {
    return getScript(context);
  } else if (pathname.endsWith("/event")) {
    return postData(context);
  }

  return new Response("Hello, world!");
}

async function getScript(context) {
  let response = await caches.default.match(context.request);
  if (!response) {
    response = await fetch("https://analytics.jasongao.me/js/plausible.js");
    context.waitUntil(caches.default.put(context.request, response.clone()));
  }
  return response;
}

async function postData(context) {
  const request = new Request(context.request);
  request.headers.delete("cookie");
  return await fetch("https://analytics.jasongao.me/api/event", request);
}
