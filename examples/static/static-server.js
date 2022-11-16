const https = require("http");
const fs = require("fs");
const express = require("express");

const options = {
    key: fs.readFileSync("webpubViewer.pem"),
    cert: fs.readFileSync("webpubViewer.pem"),
    requestCert: false,
    rejectUnauthorized: false
};

const app = express();
const port = process.env.PORT || 3333;
const server = https.createServer(options, app);

server.listen( port, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Express server listening on port " + server.address().port);
  }
});

app.use("/viewer", express.static(__dirname + "/viewer"));
app.use("/TheCallOfTheWild", express.static(__dirname + "/TheCallOfTheWild"));
app.use("/AJourneyToTheCentreOfTheEarth", express.static(__dirname + "/AJourneyToTheCentreOfTheEarth"));
app.use("/backstop", express.static(__dirname + "/backstop"));

app.get('/', function (req, res) {
  res.header("Content-type", "text/html");
  const domain = req.hostname === 'localhost' ? req.protocol + "%3A%2F%2F" + req.hostname + "%3A" + port : "https%3A%2F%2F" + req.hostname;
  return res.end("<h1>Webpub-viewer on http</h1>" + 
  "<p>This example is running with static files on the same origin. Since it is http, Service Workers should register in compatible browsers.</p>" +
  "<p><a href='/viewer/?url=" + domain + "%2FAJourneyToTheCentreOfTheEarth%2Fmanifest.json'>A Journey to the Centre of the Earth</p>" +
  "<p><a href='/viewer/?url=" + domain + "%2FTheCallOfTheWild%2Fmanifest.json'>The Call of the Wild</p>");
});
