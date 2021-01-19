import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

export const useStyles = makeStyles((theme) => ({
    paper: {
    //   border: '1px solid',
      padding: theme.spacing(1),
    //   backgroundColor: theme.palette.background.paper,
      width: '70%'
    },

    paper_inside: {
        padding: theme.spacing(2),
    },

    popper_place: {
      margin: '5px' 
    },

    tooltip: {
        backgroundColor: "#f5f5f9",
        color: 'rgba(0, 0, 0, 0.87)',
        maxWidth: 220,
        fontSize: theme.typography.pxToRem(12),
        border: '1px ',
      },
  }));