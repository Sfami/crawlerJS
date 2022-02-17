/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
// import FileBase from 'react-file-base64';

import useStyles from './styles';
import { createCrawledPage, updateCrawledPage } from '../../actions/crawledPages';

const Form = ({ currentId, setCurrentId }) => {
  const [crawledPageData, setCrawledPageData] = useState({ url: '', creatioDate: '', updateDate: ''});
  const crawledPage = useSelector((state) => (currentId ? state.crawledPages.find((message) => message._id === currentId) : null));
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    if (crawledPage) setCrawledPageData(crawledPage);
  }, [crawledPage]);

  const clear = () => {
    setCurrentId(0);
    setCrawledPageData({ url: '', creatioDate: '', updateDate: ''});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (currentId === 0) {
      dispatch(createCrawledPage(crawledPageData));
      clear();
    } else {
      dispatch(updateCrawledPage(currentId, crawledPageData));
      clear();
    }
  };

  return (
    <Paper className={classes.paper}>
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
        <Typography variant="h6">{currentId ? `Editing "${crawledPage.url}"` : 'Creating a Memory'}</Typography>
        {/* <TextField name="creator" variant="outlined" label="Creator" fullWidth value={postData.creator} onChange={(e) => setPostData({ ...postData, creator: e.target.value })} /> */}
        <TextField name="url" variant="outlined" label="Enter Url" fullWidth value={setCrawledPageData.url} onChange={(e) => setCrawledPageData({ ...setCrawledPageData, url: e.target.value })} />
        <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
        {/* <TextField name="message" variant="outlined" label="Message" fullWidth multiline rows={4} value={setCrawledPageData.message} onChange={(e) => setCrawledPageData({ ...crawledPageData, message: e.target.value })} /> */}
        {/* <TextField name="tags" variant="outlined" label="Tags (coma separated)" fullWidth value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',') })} /> */}
        {/* <div className={classes.fileInput}><FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} /></div> */}
        {/* <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button> */}
      </form>
    </Paper>
  );
};

export default Form;
