# Referral Invitation

> A referral invitation system built with ruby on rails and react.

User can invite other user through UI and API.

## Built With

- Ruby on Rails 7.0.1
- React

## Getting Started

### Prerequisites

- Ruby 3.0.1
- Rails 7
- MySQL
- NodeJS > 18x
- yarn
### Setup

Clone this repo and enter the directory.

```sh
git clone https://github.com/adityapanditdev/referral-invitation.git && cd referral-invitation
```

### Install

Run the following command to install all the dependencies.

```sh
bundle install
```

### Database Configuration

You need to add the configuration in `database.yml` according to your local mysql database setup.
### Usage

Run the following command to start the server, then go to http://localhost:3000

```sh
bin/setup # check bundler, create and migration database and install yarn dependencies

bin/dev # to start the server

```
## API REQUEST EXAMPLES

#### Sign Up
```
URL without referral: http://localhost:3000/users
URL with referral: http://localhost:3000/users?invitation_token={unique invitation token}
Method: POST
```
Request example:-
```json
{
  "user": {
   "email": "user@test.com",
   "password": "password",
   "password_confirmation": "password",
  }
}
```

#### Sign In
```
URL: http://localhost:3000/users/sign_in
Method: POST
```
Request example:
```json
{
  "user": {
    {
      "email": "user@test.com",
      "password": "password"
    }
  }
}
```

### Authentication headers example for all further queries
``` "Authorization": "wwwww" ```
When doing login and signup you will get token in response that you need to pass in Authorization key in request headers.

#### Referrals of current_user
```
URL: http://localhost:3000/invitations
Method: GET
```

#### Send invite email
```
URL: http://localhost:3000/invitations
Method: POST
Headers: { Authorization: "token we get from login api" }
```
Request example:
```json
{
  "referral_invitation": {
    "email": "name@domain.com"
  }
}
```

## Author

**Aditya Pandit**

- GitHub: [@adityapanditdev](https://github.com/adityapanditdev)