/* eslint-disable react/prop-types */
import React from 'react';
import { Card, CardContent, Paper, TextField, Typography } from '@material-ui/core/';
// import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
// import DeleteIcon from '@material-ui/icons/Delete';
// import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
// import moment from 'moment';
// import { useDispatch } from 'react-redux';

// import { likePost, deletePost } from '../../../actions/urls';
import useStyles from './styles';

// eslint-disable-next-line react/prop-types
const CrawledPage = ({crawledPage}) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent>
        <Paper className={classes.paper}>
          <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`}>
            <Typography variant="h6">{'Url'}</Typography>
            {/* <TextField name="creator" variant="outlined" label="Creator" fullWidth value={postData.creator} onChange={(e) => setPostData({ ...postData, creator: e.target.value })} /> */}
            <TextField name="Url" fullWidth value={crawledPage.url}  />
            <Typography variant="h6">{'p'}</Typography>
            <TextField name="p" fullWidth value={crawledPage.creationDate}  />
            <Typography variant="h6">{'H1'}</Typography>
            <TextField name="H1" fullWidth value={crawledPage.creationDate}  />
            <Typography variant="h6">{'H5'}</Typography>
            <TextField name="H5" fullWidth value={crawledPage.creationDate}  />

            {/* <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button> */}
            {/* <TextField name="message" variant="outlined" label="Message" fullWidth multiline rows={4} value={setCrawledPageData.message} onChange={(e) => setCrawledPageData({ ...crawledPageData, message: e.target.value })} /> */}
            {/* <TextField name="tags" variant="outlined" label="Tags (coma separated)" fullWidth value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',') })} /> */}
            {/* <div className={classes.fileInput}><FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} /></div> */}
            {/* <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button> */}
          </form>
        </Paper>
      </CardContent>
    </Card>
  );
};

export default CrawledPage;

