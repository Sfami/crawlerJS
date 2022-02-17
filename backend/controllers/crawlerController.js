import CrawledPage from '../models/CrawledPageModel';

export const crawl = async (req, res) => {
  // const {url} = req.body;
  // return res.json({url});
  const crawledPage = req.body;
  const newCrawledPage = new CrawledPage(crawledPage);
  try {
    await newCrawledPage.save();
    res.status(201).json(newCrawledPage);
  } catch (error) {
    res.status(409).json({ message: error.message});
  }

  // res.send('THIS WORKS.... crawl');
};

//load history using mongoose -> https://mongoosejs.com/
export const getHistory = async (req, res) => {
  // CrawledPage.find({}, (error, pages) => {
  //   if (error) {
  //     return res.status(400).json(error);
  //   }

  //   return res.send(pages);
  // });
  try {
    const crawledPages = await CrawledPage.find();
    res.status(200).json(crawledPages);
  } catch (error) {
    res.status(404).json({ message: error.message});
  }
  // res.send('THIS WORKS.... history');
};

