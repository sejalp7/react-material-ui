import React from "react";
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

export default function Footer({ genre, category, onSelect }) {
  let index = category ? genre.findIndex(gen => gen === category) + 1 : 0;

  const tabChange = (e, i) => {
    onSelect(i === 0 ? 0 : genre[i - 1]); 
  }
  
  return (
    <Paper>
      <Tabs
        value={index}
        onChange= { tabChange }
        indicatorColor="primary"
        textColor="primary"
        centered
      >
         <Tab label="All" />
        { genre.map(group => 
            <Tab label={group} />
          )}
      </Tabs>
    </Paper>
  );
}
