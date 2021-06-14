import { Grid,Container,Paper,makeStyles,Typography,Button } from '@material-ui/core';
import icon from '../assets/images/Group 228.png';
import flower from '../assets/images/Group 195.png';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      marginTop : '70px'
    },
    image_resize :{
        width : '250px',
        height : '300px',
    },

  }));
  

function Header(){

    const classes = useStyles();
    return(
        <div className="Rectangle-1">

            <nav>
                <ul class="horizontal-list text-center nav-menu">
                    <li>
                        <img className="Image-resize" src={icon}></img>
                    </li>

                    
                    <li style = {{position:"absolute"}}>
                         <h1>organic</h1>
                    </li>

                 
                
                    <li style = {{float:"right", marginRight:'10px' }}>
                        <a href="#contact">Contact</a>
                    </li>
 
                    <li style = {{float:"right"}}>
                        <a href="#products">Products</a>
                    </li>
                    <li style = {{float:"right"}}>
                        <a href="#blog">Blog</a>
                    </li>

                    <li  style = {{float:"right"}}>
                        <a href="#home"> Home </a>
                    </li>
             
                </ul>
            </nav>

            <div className={classes.root}>

                <Grid container spacing = {3}>
                    <Grid item xs={8}>
                        
                        <div>
                            <Typography variant = "p" gutterBottom style={{fontSize:'25px', fontWeight:'normal'}}>
                                Healthy life with
                            </Typography>

                            <Typography variant = "h3" gutterBottom>
                                Natural Organic
                            </Typography>

                            <Typography variant = "p" gutterBottom>
                                Vegetables are the edible parts of a plant
                                that is used in cooking or can be eaten
                            </Typography>

                            <div style = {{marginTop : "25px"}}>
                             <Button variant="contained" style={{backgroundColor:"#00dbd0",color:"#ffffff"}} >Explore Now</Button>
                            </div>
                        
                        </div>

                    </Grid>

                    <Grid item xs = {4}>
                        <img className = {classes.image_resize}src={flower}></img>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default Header;