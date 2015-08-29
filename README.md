vanity.js
---

A simple stat-logging server.

One possible usage pattern:

On your server, set the `allow_origin` environment variable to the url of the
site that will be using `client.js`. Run the server with `node server.js`. On
your site, ensure the client is loaded, then call `window.Vanity({{ your
server's url }}).key({{ the stat you want to log }})`.
