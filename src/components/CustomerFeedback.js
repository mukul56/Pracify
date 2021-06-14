import { Grid,Container,TextField,makeStyles,Typography,Button } from '@material-ui/core';
import icon from '../assets/images/Group 86.png';
import icon1 from '../assets/images/Group 134.png';

const useStyles = makeStyles((theme) => ({
    
    root : {
        flexGrow : 1,
        marginTop : '100px'
    },

    image_resize :{
        width : '30px',
        height : '30px',
    },

    left_image : {
        width : '250px',
        height : '600px',

    },

    round_image : {
        width : '70px',
        height : '70px',
        borderRadius  : '50%',
        border: '5px solid #555',
    }

  }));

function CustomerFeedback(){

    const classes = useStyles();

    return(
        <div className = {classes.root}>
            <Container>
                <Grid container spacing = {0} alignItems="center" justify = "center">
                    <Grid item>
                        <img className = {classes.image_resize} src={icon}></img>
                    </Grid>
                </Grid>

                <Grid container spacing = {0} alignItems="center" justify = "center">
                    <Grid item>
                        <img className = {classes.round_image} src={icon1}></img>
                    </Grid>
                </Grid>

                <Typography variant = "h6" align = "center">Jane Doe</Typography>
                <Typography variant = "subtitle1" align = "center">Description fo Jane Doe Comes here</Typography>
            </Container>

            <Container style = {{marginTop : '100px'}}>
                <Typography variant = "h5" align = "center" gutterBottom>Subscibe to our Newsletter</Typography>
                <Typography variant = "subtitle1" align = "center" paragraph gutterBottom>Description about newsletter</Typography>
            </Container>

            <Container>
                <Grid justify = "center" alignItems = "center" container spacing = {2}>
                    <Grid item>
                        <TextField id = "email" label = "Enter Your Email" variant = "standard" />

                    </Grid>
                    
                    <Grid item>
                        <div>
                            <Button variant="contained" style={{backgroundColor:"#00dbd0",color:"#ffffff"}} >Subscribe</Button>
                        </div>
                    </Grid>
                </Grid>
            </Container>


        </div>



        






    )
}

export default CustomerFeedback;