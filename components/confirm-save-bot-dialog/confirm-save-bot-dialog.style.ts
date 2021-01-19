import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  botTableTitle: {
    textAlign: "center",
    fontSize: 18,
    margin: theme.spacing(10, 0, 5, 0),
  },
  botTable: {
    minWidth: 505,
    borderBottom: "1px solid #e4e4e4",
  },
  botTableRow: {
    "& > th, & > td": {
      padding: theme.spacing(3, 0),
      borderTop: "1px solid #e4e4e4",
      textAlign: "left",
    },
    "& > th": {
      fontWeight: "normal",
      padding: theme.spacing(2, 0, 2, 7),
    },
  },
  pairs: {
    display: "flex",
  },
  pair: {
    width: "33%",
  },
  buttonsContainer: {
    display: "grid",
    placeContent: "center",
    gridTemplateColumns: "1fr 1fr",
    gridColumnGap: 10,
    width: 320,
    height: 37,
    margin: theme.spacing(9, 0, 16, 0),
  },
  cancelButton: {
    border: "solid 1px #000000",
    backgroundColor: "#ffffff",
  },
  saveButton: {
    border: "solid 1px ${theme.palette.primary.main}",
    color: "#ffffff",
    backgroundColor: theme.palette.primary.main,
    "&:hover": {
      backgroundColor: theme.palette.primary.main,
    },
  },
}));
