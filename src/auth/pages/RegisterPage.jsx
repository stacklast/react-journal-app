import { Grid, TextField, Typography, Link, Button } from '@mui/material'
import React from 'react'
import { AuthLayout } from '../layout/AuthLayout'
import { Link as RouterLink } from 'react-router-dom';

export const RegisterPage = () => {
  return (
    <AuthLayout title='Crear Cuenta'>
      <form>
          <Grid container>
            <Grid item xs={12} sx={{mt:2}}>
              <TextField label="Nombre Completo" type="text" placeholder="Jhon Doe" fullWidth />
            </Grid>
            <Grid item xs={12} sx={{mt:2}}>
              <TextField label="Correo" type="email" placeholder="correo@google.com" fullWidth />
            </Grid>
            <Grid item xs={12} sx={{mt:2}}>
              <TextField label="Contraseña" type="password" placeholder="Contraseña" fullWidth />
            </Grid>

            <Grid container spacing={2} sx={{mb:2, mt:1}}>
              <Grid item xs={12} sm={12}>
                <Button variant='contained' fullWidth>
                  Crear Cuenta
                </Button>
              </Grid>
            </Grid>

            <Grid container direction='row' justifyContent='end'>
              <Link component={RouterLink} color='inherit' to='/auth/register'>
                Crear una Cuenta
              </Link>
            </Grid>

            <Grid container direction='row' justifyContent='end'>
              <Typography sx={{mr:1}}>Ya tienes cuenta?</Typography>
              <Link component={RouterLink} color='inherit' to='/auth/login'>
                Ingresar
              </Link>
            </Grid>

          </Grid>
        </form>
    </AuthLayout>
  )
}
