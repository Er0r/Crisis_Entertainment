import React from 'react'
import Logo from '../Assets/vlsnap.png'
import '../Assets/Products.css';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
      maxWidth: 1500,
      maxHeight: 1000,
      marginLeft: 60,
      padding:15,
    },
    root2: {
        marginTop:15,
        maxWidth: 1500,
        maxHeight: 1000,
        marginLeft: 60,
        padding:15,
    },
    root3: {
        marginTop:15,
        maxWidth: 1500,
        maxHeight: 1000,
        marginLeft: 60,
        padding:15, 
    }
  });
  

function Products() {
    const classes = useStyles();
    return (
        <div class="container-fluid contenedor text-center">
            <h1 class="text-center">𝐎𝐔𝐑 𝐏𝐑𝐎𝐃𝐔𝐂𝐓𝐒</h1>

            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        alt="Contemplative Reptile"
                        height="200"
                        image={Logo}
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h1" component="h2" className="header_word">
                            ANNIHILATION
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p" className="under_word">
                            BATTLE ROYALE GAME MADE FOR COMPETITIVE GAMER'S
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary" className="morebtn">
                        MORE ABOUT ANNIHILATION
                    </Button>
                </CardActions>  
            </Card>

            <Card className={classes.root2}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        alt="Contemplative Reptile"
                        height="200"
                        image={Logo}
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h1" component="h2" className="header_word">
                            DREAM RUNNER
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p" className="under_word">
                            ABSOLUTE MASTERPIECE ANDROID GAME
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary" className="morebtn">
                        MORE ABOUT ANNIHILATION
                    </Button>
                </CardActions>  
            </Card>


            <Card className={classes.root3}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        alt="Contemplative Reptile"
                        height="200"
                        image={Logo}
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h1" component="h2" className="header_word">
                            UNREAL DEMO
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p" className="under_word">
                            BATTLE ROYALE GAME MADE FOR COMPETITIVE GAMER'S
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary" className="morebtn">
                        MORE ABOUT ANNIHILATION
                    </Button>
                </CardActions>  
            </Card>

            
        </div>
    )
}

export default Products
