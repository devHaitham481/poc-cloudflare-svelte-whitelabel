const express = require('express');
const redis = require('redis');


const client = redis.createClient();

const app = express();


app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  next();
})

app.get('/api/customizations/:brand', function(req, res, next) {
  // brand can  be the brand's domain name 
  const brand = req.params.brand;


  client.get(`${brand}`, function(err, res) {
    if (err) {
      console.error();
      res.status(500).send(`Error retrieving customizations from Redis`);
      next();
    }

    const customizations = JSON.parse(reply)
    res.json(customizations)
  })
  app.get('/api/customizations', function(req, res) {
    const domain = req.get('Host');
    const workerUrl = `https://${process.env.CF_ACCOUNT_ID}.${process.env.CF_WORKERS_SUBDOMAIN}.workers.dev`;

    fetch(`${workerUrl}/api/customizations`, {
      headers: { Host: domain },
    })
      .then(response => response.json())
      .then(customizations => res.json(customizations))
      .catch(err => {
        console.error(err);
        res.status(500).send('Error fetching customizations from Cloudflare Worker');
      });
  });


  app.listen(4000, function() {
    console.log('server is running on port 4000')
  })

})
