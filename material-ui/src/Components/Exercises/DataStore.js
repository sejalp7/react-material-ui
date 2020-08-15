import React, { Fragment, useState } from "react";
import { Grid, Paper, Typography, List } from "@material-ui/core";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

const styles = {
  Paper: {
    padding: 20,
    marginTop: 10,
    marginBottom: 10,
  },
};
export default function DataStore({ genreDetail }) {

  let [ genre, setgenreDetail] = useState(genreDetail);

  const displayGenere = (id) => {
    genreDetail.map(el => {
      el[1].filter(gen => {
        if(gen.id === id) {
          setgenreDetail(genre =  gen);
        }
      })
    });
  }

  return (
    <Grid container spacing={2}>
      <Grid item sm>
        <Paper style={styles.Paper}>
          {genreDetail.map(([group, genreDet]) => (
            <Fragment>
              <Typography variant="subtitle1">{group}</Typography>
              <List component="ul" key={ group }>
                {genreDet.map(({name, id}) => (
                  <ListItem button key= { name } onClick={ () => displayGenere(id) }>
                    <ListItemText primary={name}  key= { name }/>
                  </ListItem>
                ))}
              </List>
            </Fragment>
          ))}
        </Paper>
      </Grid>
      <Grid item sm>
        <Paper style={styles.Paper}>
        <Typography variant="h5">{ genre.name}</Typography>
        <Typography variant="subtitle1">{ genre.description}</Typography> 
        </Paper>
      </Grid>
    </Grid>
  );
}
