import { Grid,Container,Paper,makeStyles,Typography,Button } from '@material-ui/core';


function Organizations(){
    return(
        <div style = {{marginTop : "70px"}}>
            <Container>
                <Typography variant = "h6" align = "center" >
                    Produly presented by
                </Typography>

                <Typography variant = "subtitle1" align = "center" paragraph>
                    Description of organizations
                </Typography>
            </Container>
        </div>
    )
}

export default Organizations;