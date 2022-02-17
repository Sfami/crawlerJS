import express from 'express';
import { crawl, getHistory } from '../controllers/crawlerController';
const crawlerRouter = express.Router();

// let CrawledPage = require('../models/CrawledPageModel');

// crawlerRouter.route('/').get((req, res) => {
//   CrawledPage.find()
//     .then(crawledPages => res.json(crawledPages))
//     .catch(err => res.status(400).json('Error: ' + err));
// });

// crawlerRouter.route('/add').post((req, res) => {
//   const url = req.body.url;

//   const newCrawledPage = new CrawledPage({url});

//   newCrawledPage.save()
//     .then(() => res.json('User added!'))
//     .catch(err => res.status(400).json('Error: ' + err));
// });



// we protect the POST, PUT and DELETE methods

crawlerRouter.post('/crawl', crawl);
// crawlerRouter.get('/crawl', crawl);

// crawlerRouter.get('/crawl', (req, res) => {
//   res.send('THIS WORKS.... crawl');
// });

crawlerRouter.get('/history', getHistory);

// crawlerRouter.get('/history', (req, res) => {
//   res.send('THIS WORKS.... history');
// });



export default crawlerRouter;
