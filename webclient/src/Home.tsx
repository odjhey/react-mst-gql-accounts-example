import React from 'react'
import { RouteComponentProps, Link, Redirect } from 'react-router-dom'
import { Button, Typography } from '@material-ui/core'
import { useQuery } from './models'

import { accountsClient, apolloClient } from './utils/accounts'
import { observer } from 'mobx-react'

const Home = ({ history }: RouteComponentProps<{}>) => {
  console.log('render home')
  const { loading, error, data } = useQuery((store) => store.me())

  const onResendEmail = async () => {
    //await accountsGraphQL.sendVerificationEmail(data.getUser.emails[0].address);
  }

  const onLogout = async () => {
    await apolloClient.clearStore()
    await accountsClient.logout()
    history.push('/login')
  }

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error.message}</p>

  // If user is not logged in we redirect him to the login page
  console.log('home me', data)
  if (!data || !data.me) {
    return <Redirect to="/login" />
  }

  //@ts-ignore
  const { me } = data

  console.log('emails', me)
  const email = me.emails ? me.emails[0] : { address: '', verified: false }

  return (
    <div>
      <Typography gutterBottom>Hello {me.username}</Typography>
      <Typography gutterBottom>You are logged in</Typography>
      <Typography gutterBottom>Email: {email.address}</Typography>
      <Typography gutterBottom>You username is {me.username}</Typography>
      <Typography gutterBottom>
        You email is {email.verified ? 'verified' : 'unverified'}
      </Typography>
      {!email.verified && (
        <Button onClick={onResendEmail}>Resend verification email</Button>
      )}

      <Link to="two-factor">Set up 2fa</Link>

      <Button variant="contained" color="primary" onClick={onLogout}>
        Logout
      </Button>
    </div>
  )
}

export default observer(Home)
