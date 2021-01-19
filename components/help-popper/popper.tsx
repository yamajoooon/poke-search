import * as React from 'react';
import {PopperPlacementType} from '@material-ui/core/Popper';
import Popper from '@material-ui/core/Popper';
import Fade from '@material-ui/core/Fade';
import { Button } from "@material-ui/core";
import HelpOutlineOutlinedIcon from '@material-ui/icons/HelpOutlineOutlined';
import Tooltip from '@material-ui/core/Tooltip';
import { useStyles } from "./popper.style";
import Typography from '@material-ui/core/Typography';
import Link from 'next/link'
import Paper from '@material-ui/core/Paper';
import ExternalLink from "@material-ui/core/Link";

type Props = {
    tittle: string;
    content: string;
    placement: PopperPlacementType;
    href?: string;
}

const Pop: React.FC<Props> = ({
  tittle,
  content,
  placement,
  href
}) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'transitions-popper' : undefined;
  
  return (
    <div className = {classes.popper_place}>
        <Button　color="primary" aria-describedby={id} type="button" onClick={handleClick} >
          <HelpOutlineOutlinedIcon />
        </Button>
      
      <div className = {classes.popper_place}>
        <Popper id={id} open={open} anchorEl={anchorEl} placement = {placement}  transition>
          {({ TransitionProps }) => (
              <Fade {...TransitionProps} timeout={350}>
                
                  <div className={classes.paper}>
                    <Paper elevation={3}>
                    <div className={classes.paper_inside}>
                      <h2>{tittle}</h2>
                      {content}
                      <div>
                        { href && <ExternalLink href = {href} target="_blank">詳しくはコチラ</ExternalLink>}
                      </div>
                    </div>
                    </Paper>
                  </div>
                
              </Fade>
            )}
                
        </Popper>
      </div>
    </div>
  );
}

export default Pop;