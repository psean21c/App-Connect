// Objective : Add Swagger

const express = require('express'),
  app = express(),
  port = process.env.PORT || 3000;

const morgan = require('morgan')
const router = require('./pg_query6');
const bodyParser = require('body-parser')

var swaggerUi = require('swagger-ui-express'),
    swaggerDocument = require('./swagger.json');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/api/v1', router);

app.use(morgan('combined')) // combined , short
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(router)

app.listen(port, () => {
    console.log('RESTful API server(v-06) started on: ' + port);
});

