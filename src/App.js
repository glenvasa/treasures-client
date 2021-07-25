import React from 'react'
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core'

import Posts from './components/Posts/Posts'
import Form from './components/Form/Form'

import treasures from './images/dragon-treasures.png'

const App = () => {
    return (
        <Container maxwidth="lg">
            <AppBar position="static" color="inherit">
                <Typography variant="h2" align="center">Treasures</Typography>
                <img src={treasures} alt="treasures" heigh="60"/>
            </AppBar>
            {/* Grow provides simple animation */}
            <Grow in>
                <Container>
                    <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Posts />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form />
                        </Grid>
                    </Grid>

                </Container>
            </Grow>
        </Container>
    )
}

export default App