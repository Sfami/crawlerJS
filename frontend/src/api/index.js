import axios from 'axios';

const getUrl = 'http://localhost:3000/crawler/history';

const postUrl = 'http://localhost:3000/crawler/crawl';

export const fetchCrawledPages = () => axios.get(getUrl);
export const createCrawledPage = (newCrawledPage) => axios.post(postUrl, newCrawledPage);
export const updateCrawledPage = (id, updatedCrawledPage) => axios.patch(`${postUrl}/${id}`, updatedCrawledPage);
export const deleteCrawledPage = (id) => axios.delete(`${postUrl}/${id}`);
