/* eslint-disable react/prop-types */
import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';

import CrawledPage from './CrawledPage/CrawledPage';
import useStyles from './styles';

const CrawledPages = ({ setCurrentId }) => {
  const crawledPages = useSelector((state) => state.crawledPages);
  const classes = useStyles();

  return (
    !crawledPages.length ? <CircularProgress /> : (
      <Grid className={classes.container} container alignItems="stretch" spacing={3}>
        {crawledPages.map((crawledPage) => (
          <Grid key={crawledPage._id} item xs={12} sm={6} md={6}>
            <CrawledPage crawledPage={crawledPage} setCurrentId={setCurrentId} />
          </Grid>
        ))}
      </Grid>
    )
  );
};

export default CrawledPages;
