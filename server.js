/**
 * cPanel / Phusion Passenger entry point.
 * Set "Application startup file" to: server.js
 */
const { createServer } = require("http")
const { parse } = require("url")
const next = require("next")

const port = parseInt(process.env.PORT || "3000", 10)
const hostname = process.env.HOSTNAME || "0.0.0.0"
const dev = process.env.NODE_ENV !== "production"

const app = next({ dev, hostname, port })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  createServer(async (req, res) => {
    try {
      const parsedUrl = parse(req.url, true)
      await handle(req, res, parsedUrl)
    } catch (err) {
      console.error("Request error:", req.url, err)
      res.statusCode = 500
      res.end("Internal Server Error")
    }
  }).listen(port, hostname, (err) => {
    if (err) throw err
    console.log(`SamariTek ready on http://${hostname}:${port} (${dev ? "development" : "production"})`)
  })
})
