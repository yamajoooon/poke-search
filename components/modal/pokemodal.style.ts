import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({


    
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    },
    // 親ウィンドウのスタイル（ちょっと暗くする）
    overlay: {
        background: 'rgba(0, 0, 0, 0.2)'
    },

    botStatus: {
        padding: theme.spacing(2,5),
    },
    
    botTableTitle: {
        textAlign: "center",
        fontSize: "23px"
    },
    botTable: {
        marginTop: theme.spacing(4),
        width: "100%",
      },
    botTableRow: {
    "& > th, & > td": {
        padding: theme.spacing(3, 0),
        borderTop: "1px solid #e4e4e4",
    },
    "& > th": {
        fontWeight: "normal",
        textAlign: "left",
        padding: theme.spacing(2,12,2,6),
    },
    "& > td": {
        textAlign: "left",
    },
    },

    button: {
        height: 40,
        width: 160,
        margin: theme.spacing(4,2,1,0),
    },
    buttonPosition: {
        padding: theme.spacing(2,10,4,9),
    },
    

}));