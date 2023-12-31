var express = require("express");
var apiMocker = require("connect-api-mocker");

var app = express();

const PORT = process.env.MOCKS_PORT || 3000;

app.use(apiMocker('/mocks'));

app.listen(PORT, () => console.log("Listening on http://localhost:" + PORT));
