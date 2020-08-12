import React from 'react';
import {Grid, Button} from '@material-ui/core/';
import Form from './Form';

import '../styles/App.scss';

function App() {
  return (
    <Grid container direction="row" className="content">
<Grid item md={6} xs={12} className="text-col">
<h1>
  Learn to code by watching others
</h1>
<h3>See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable.</h3>
</Grid>
<Grid item md={6} xs={12} className="form-col">
<Grid container className="head-form">
  <h4><strong>Try it free 7 days</strong> then $20/mo. thereafter</h4>
<Form/>

</Grid>


</Grid>

    </Grid>
    
   
  );
}

export default App;
