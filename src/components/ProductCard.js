import { CardContent,makeStyles,Typography,Button,Card, ListItemSecondaryAction } from '@material-ui/core';
import item from '../assets/images/Group 205.png'


function ProductCard(){


    return(
        <div style = {{margin : '5px'}}>
            <img src={item}></img>
        </div>
         
    )
}

export default ProductCard;