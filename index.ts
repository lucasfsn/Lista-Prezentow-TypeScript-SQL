import cors from 'cors';
import express from 'express';
import 'express-async-errors';
import { engine } from 'express-handlebars';
import methodOverride from 'method-override';
// import * as methodOverride from 'method-override'
import { childRouter } from './routers/child';
import { giftRouter } from './routers/gift';
import { homeRouter } from './routers/home';
import './utils/db';
import { handleError } from './utils/errors';
import { handlebarsHelpers } from './utils/handlebars-helpers';

const app = express();

app.use(
  cors({
    origin: 'https://localhost:3000',
  })
);

app.use(methodOverride('_method'));
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.static('public'));
app.engine(
  '.hbs',
  engine({
    extname: '.hbs',
    helpers: handlebarsHelpers,
  })
);
app.set('view engine', '.hbs');

app.use('/', homeRouter);
app.use('/child', childRouter);
app.use('/gift', giftRouter);

app.use(handleError);

app.listen(3000, 'localhost', () => {
  console.log('Listening on http://localhost:3000');
});
