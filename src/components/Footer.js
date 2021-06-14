import footerImage from '../assets/images/Group 229.png';
import { Grid,Container,Paper,makeStyles,Typography,Button } from '@material-ui/core';
import icon from '../assets/images/Group 220.png';

const useStyles = makeStyles((theme) => ({

    root: {
        marginTop : '70px',
        position : 'relative',
    },
    image : {
        display : 'block',
        height : '200px',
        width : '100%',
    },

    iconDim : {
        width : '50px',
        height : '50px',
        marginBottom : '10px'
    },
    footerlayout : {
        position : 'absolute',
        bottom : '20%',
        padding : '10px',
        color : 'white',
    }
}));


function Footer(){

    const classes = useStyles();

    return(
        <div className = {classes.root} >
            <img className = {classes.image} src = {footerImage}></img>
            
            <Grid container spacing = {0} className = {classes.footerlayout} >
                <Grid item xs = {4}>
                    <Container>
                        <img className = {classes.iconDim} src = {icon}></img>
                        <Typography variant = "subtitle1" gutterBottom>Description comes here</Typography>
                    </Container>
                </Grid>
                <Grid item xs = {4}>
                    <Container>

                        <Typography variant = "h6">Information</Typography>

                    </Container>

                </Grid>
                <Grid item xs = {4}>
                    <Typography variant = "h6">Follow Us</Typography>
                </Grid>
            </Grid>


        </div>
    )
}

export default Footer;