async function handler(event) {
  const request = event.request
  let uri = event.uri
  if (uri.endsWith('.html')) {
    uri = uri.slice(0, -5);
  }

  const redirects = {
    '/overview': '/',
    '/accessing-claims-data': '/production-access',
    '/understanding-ab2d-data': '/ab2d-data',
    '/tutorial-postman-swagger': '/api-documentation',
    '/tutorial-curl': '/api-documentation',
    '/advanced-user-guide': '/api-documentation',
    '/data_dictionary': '/ab2d-data',
    '/setup-mac': '/setup-instructions',
    '/setup-linux': '/setup-instructions',
    '/setup-windows': '/setup-instructions'
  }

  if (redirects[uri]) {
    const response = {
      status: '301',
      statusDescription: 'Moved Permanently',
      headers: {
        location: [{
          key: 'Location',
          value: redirects[uri]
        }]
      }
    }
    return response;
  }
  return request;
}

handler({ request: 'blah', uri: '/overview.html' })