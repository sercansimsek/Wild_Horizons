import http from "node:http";
import { getDataFromDB } from "./database/db.js";

const PORT = 8000;

const server = http.createServer(async (req, res) => {
  const destinations = await getDataFromDB();

  if (req.url === "/api" && req.method === "GET") {
    res.write(JSON.stringify(destinations));
    res.end();
  }
});

server.listen(PORT, () => console.log(`Connected on port: ${PORT}`));
