const jsonServer = require("json-server");
const express = require("express");  // Ensure express is required
const server = jsonServer.create();
const router = jsonServer.router("db.json");

// Middleware to serve static files
server.use(express.static('./public'));

// Use default middleware
const middlewares = jsonServer.defaults();
server.use(middlewares);

// Custom rewriter (optional)
server.use(
  jsonServer.rewriter({
    "/*": "/$1",
  })
);

// Use the router
server.use(router);

// Listen on the environment's port or 3000
const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});