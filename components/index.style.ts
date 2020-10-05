import { makeStyles, createStyles, Theme} from '@material-ui/core/styles'


const useStyles = makeStyles((theme: Theme) =>
    createStyles({

        Mainwrapper: {
            backgroundColor: "#f4fafa"
        },
        Main: {
            maxwidth: "1040px",
            padding: "20px 50px"
        },
        lessoncontainer: {
            margintop: "20px"
        }
    })
);

export default useStyles