import React from "react";
import {
  Typography,
  AppBar,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CssBaseline,
  Grid,
  Toolbar,
  Button,
  Container,
} from "@mui/material";

import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import useStyles from "./styles";

const photosCards=[1,2,3,4,5,6,7,8,9,10];
const App = () => {
  const classes = useStyles();
  return (
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <PhotoCameraIcon className={classes.icon} />
          <Typography variant="h6">This is H6 headline</Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div className={classes.container}>
          <Container maxWidth="sm">
            <Typography
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom //to add bottom margin
            >
              Photo Album
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph //to make sure it loops throw lines
            >
              Hello Everyone ! Welcome to my Photo Album ♥ Take a look and hope
              you will enjoy. You can always be creative in your own way ♥.
            </Typography>
            <div className={classes.buttons}>
              <Grid container justifyContent="center" spacing={2}>
                <Grid item>
                  <Button variant="contained" color="primary">
                    Watch My Photos
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    Help
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container justifyContent='center' spacing={4}>
            {
              photosCards.map((index)=>(
                            <Grid item key={index}>
              <Card className={classes.cards}>
                <CardMedia
                  className={classes.cardMedia}
                  image="https://source.unsplash.com/random"
                  title="Image Title"
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5">Head</Typography>
                  <Typography paragraph>Description of the image</Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color='primary'>View</Button>
                  <Button size="small" color='primary'>Edit</Button>

                </CardActions>
              </Card>
            </Grid>
              ))
            }

          </Grid>
        </Container>
      </main>
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary">
          Some information in footer
        </Typography>

      </footer>
    </>
  );
};

export default App;
