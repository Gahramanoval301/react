import { Container, Grid, Box, Stack, Button, Link, Avatar, Typography, TextField } from '@mui/material'
import LockIcon from '@mui/icons-material/Lock';
import React, { useState } from 'react'
import Checkbox from '@mui/material/Checkbox';

const SignSide = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    const handleSubmit = (e:any) => {
        e.preventDefault();
        setPassword('')
        setEmail('')
    }


    return (
        <Container maxWidth='xl' sx={{ minHeight: '100vh' }}>
            <Grid container>
                <Grid item xs={12} sm={6} >
                    <Box sx={{ border: '1px solid red', height: '100%' }}>
                        <img style={{ width: '100%', height: '100vh' }} src="https://img.freepik.com/free-photo/purple-osteospermum-daisy-flower_1373-16.jpg" alt="" />
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} >
                    <Box sx={{ border: '1px solid red', height: '100vh', p: 2, textAlign: 'center' }}>
                        <Stack useFlexGap gap={1} alignItems={'center'}>
                            <Avatar sx={{ bgcolor: 'secondary.main' }}  >
                                <LockIcon fontSize='large' />
                            </Avatar>
                            <Typography variant="h4" color="initial">Sign In</Typography>
                            <TextField
                                fullWidth
                                id="email"
                                label="Email"
                                value={email}
                                onChange={(e) => { setEmail(e.target.value) }} />
                            <TextField
                                fullWidth
                                id="Password"
                                label="Password"
                                value={password}
                                onChange={(e) => { setPassword(e.target.value) }} />
                            <Checkbox {...label} defaultChecked sx={{ alignSelf: 'flex-start' }} />
                            <Button variant='contained' fullWidth onClick={handleSubmit}>Sign In</Button>
                            <Stack flexDirection={'row'} justifyContent={'space-between'} sx={{ width: '100%' }}>
                                <Link variant='body2'>Don't have an account? Sign Up</Link>
                                <Link variant='body2'>Forgot Password?</Link>
                            </Stack>
                            <Typography variant="body2" color="gray">
                                CopyRight c
                                <Link> Your Website </Link>
                            2023
                            </Typography>
                        </Stack>
                    </Box>
                </Grid>
            </Grid>

        </Container>
    )
}

export default SignSide