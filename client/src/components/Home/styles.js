import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    [theme.breakpoints.down('sm')]: { // run below CSS only for devices of size small or below
        mainContainer: {
            flexDirection: "column-reverse"
        }
    }
}));