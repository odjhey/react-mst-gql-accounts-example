# Purpose

1. to handle all authentication requirements

> NOTE: authorization to be handled on a separate package

# How-to

1. add `.env` to server (see `.env.template`)
1. add `.env` to webclient (see `.env.template`)
1. start your mongo instance (as per configured `server/.env` `mongoURI`)
1. start server

   ```
   cd server

   yarn start
   or
   npm run start
   ```

1. start webclient

   ```
   cd webclient

   yarn start
   or
   npm run start
   ```

1. visit `localhost:3000` on your favorite modern browser

# Todo

1. containerize
1. setup SMTP server
1. add other user info

# Test

1. signup
1. login
1. logout
1. multi user (login as user1, logout, then login as user2)
1. 2 factor
1. verify email
1. change/reset password
1. change email
1. register multi email
