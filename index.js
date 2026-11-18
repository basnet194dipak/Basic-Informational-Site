import http from "node:http";
import fs from "fs";

async function Readfile(filepath) {
  try {
    let data = await fs.promises.readFile(filepath, "utf-8");
    return data;
  } catch (err) {
    return null;
  }
}

// create a local server
const server = http.createServer();

server.on("request", async (request, res) => {
  let added_path;
  let status_code = 200;
  if (request.url == "/") {
    added_path = "/index";
  } else if (request.url === "/contact-me") {
    added_path = "/contact-me";
  } else if (request.url === "/about") {
    added_path = "/about";
  } else {
    added_path = "/404";
    status_code = 404;
  }

  let filepath = `/home/program21/odin/Basic-Informational-Site${added_path}.html`;
  let data = await Readfile(filepath);
  if (data) {
    res.writeHead(status_code, { "Content-Type": "text/html" });
    res.end(data);
  } else {
    res.writeHead(500, {
      "Content-Type": "text/plain",
    });
    res.end("Internal Server Error");
  }
});

server.listen(8080);
