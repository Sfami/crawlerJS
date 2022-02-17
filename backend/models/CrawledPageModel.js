import mongoose, { Schema } from 'mongoose';

const crawledPageSchema = new Schema({
  url: {
    type: String,
    required: true,
    trim: true,
    minlength: 10
  },

  //todo: add here the missing fields
  creationDate: {
    type: Date,
    default: Date.now
  },
  updateDate: {
    type: Date,
    default: Date.now
  }
});

const CrawledPage = mongoose.model('CrawledPage', crawledPageSchema);

module.exports = CrawledPage;

// export default mongoose.model('CrawledPage', crawledPageSchema);
