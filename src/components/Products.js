import { Grid,Container,Paper,makeStyles,Typography,Button } from '@material-ui/core';
import icon from '../assets/images/Group 114.png';
import ProductCard from './ProductCard';
import item from '../assets/images/Group 205.png'

const useStyles = makeStyles((theme) => ({

    root: {
        flexGrow: 1,
      },
    image_resize :{
        width : '150px',
        height : '200px',
    },
    flex_container :{
        display : 'flex',
        justifyContent : 'center',
    },
}));

function Products(){

    const classes = useStyles();

    return(
        <div>
            <Grid container spacing = {0} alignItems="center" justify = "center">
                <Grid item>
                    <img src={icon}></img>
                </Grid>
            </Grid>

            <Container>
                <Typography variant = "h6" align = "center" >
                    Welcome to Nature
                </Typography>

                <Typography variant = "subtitle1" align = "center" paragraph>
                    Description about nature
                </Typography>
            </Container>



            <div className = {classes.flex_container}>
                    
                <div><ProductCard></ProductCard></div>
                <div><ProductCard></ProductCard></div>
                <div><ProductCard></ProductCard></div>
                <div><ProductCard></ProductCard></div>
            </div>



        </div>
    )
}

export default Products;