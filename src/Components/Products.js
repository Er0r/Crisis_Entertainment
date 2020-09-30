import React from 'react'
import Logo from '../Assets/vlsnap.png'
import logo2 from '../Assets/fsefsef-1464x656.jpg';
import logo3 from '../Assets/unreal_demo.jpg';
import '../Assets/Products.css';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { BrowserRouter, Link} from 'react-router-dom';
import Iframe from 'react-iframe';
const useStyles = makeStyles({
    root: {
      maxWidth: 1500,
      maxHeight: 1000,
      marginLeft: 30,
      padding:15,
    },
    root2: {
        marginTop:15,
        maxWidth: 1500,
        maxHeight: 1000,
        marginLeft: 30,
        padding:15,
    },
    root3: {
        marginTop:15,
        maxWidth: 1500,
        maxHeight: 1000,
        marginLeft: 30,
        padding:15, 
    }
  });

  
  
function Products() {
    const classes = useStyles();

    return (
        <BrowserRouter>
        <div class="container-fluid contenedor text-center">
            <h1 class="text-center">𝑵𝒆𝒘 𝑫𝒂𝒚𝒔 𝑨𝒓𝒆 𝑪𝒐𝒎𝒊𝒏𝒈...</h1>

            <Card className={classes.root} id="card1">
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
                            FIRST BATTLE ROYALE GAME MADE IN BANGLADESH FOR GAMER'S. GET READY FOR DECEMBER, 2020. THIS GAME IS COMING IN THREE PLATFORMS, SO THAT GAMER'S OF EVERY PLATFORM WILL FEEL THE NEXT LEVEL EXPERIENCE.
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <a href="https://store.steampowered.com/app/1358900/Annihilation/"  color="inherit">
                        KEEP IT IN YOUR STEAM WISHLIST. 
                    </a>
                </CardActions>  
            </Card>
            <h1 class="text-center">Trailer(Annihilation)</h1>
            <div align="center">
                <Iframe width="650" height="450"  src="https://www.youtube.com/embed/pODEFPdaWtA" display="block" frameborder="0" style="text-align:center" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></Iframe>
            </div>
            
            <h1 class="text-center">𝕺𝖚𝖗 𝖔𝖙𝖍𝖊𝖗 𝕻𝖗𝖔𝖉𝖚𝖈𝖙𝖘...</h1>
            <Card className={classes.root2} id="card2">
                <CardActionArea>
                    <CardMedia
                        component="img"
                        alt="Contemplative Reptile"
                        height="200"
                        image={logo2}
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
                        MORE ABOUT DREAM RUNNER
                    </Button>
                </CardActions>  
            </Card>


            <Card className={classes.root3} id="card3">
                <CardActionArea>
                    <CardMedia
                        component="img"
                        alt="Contemplative Reptile"
                        height="200"
                        image={logo3}
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
                        MORE ABOUT UNREAL DEMO
                    </Button>
                </CardActions>  
            </Card>

            
        </div>
        </BrowserRouter>
        
    )
}

export default Products
