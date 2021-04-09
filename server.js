import express, { static, urlencoded, json } from 'express';
const PORT = process.env.PORT || 8000;
const app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(static('public'));

// Parse application body as JSON
app.use(urlencoded({ extended: true }));
app.use(json());

// Set Handlebars.
import exphbs from 'express-handlebars';

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Import routes and give the server access to them.
import routes from './controllers/burgerController.js';

app.use(routes);

// Start our server so that it can begin listening to client requests.
app.listen(PORT, () =>
  console.log(`Server listening on: http://localhost:${PORT}`)
);