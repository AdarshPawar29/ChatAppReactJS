const express = require("express");
const sockectio = require("socket.io");
const http = require("http");

const PORT = process.env.PORT || 5000;

const router = require("./router");

const app = express();
const server = http.createServer(app);
const io = sockectio(server);

app.use(router);

server.listen(PORT, () => console.log(`Server has started on port ${PORT}`));
