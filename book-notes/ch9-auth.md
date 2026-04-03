# Notes:

- OAuth would be the simplest since it leverages existing accounts with known companies. (Log in with Facebook, Google, Apple, etc.)
  - These other services (origin of the email, or other account), verifies legitimacy of access by granting us an **access token**.
- **Authentication** vs. **Authorization**
  - Authentication
    - verification of user credentials
    - can cover biometics
    - includes concepts like:
      - **single-factor authentication** (usually pin or password only)
      - **multifactor authentication** (Authenticator, OTP)
  - Authorization
    - Comes after authentication
    - More about what resources a user is granted access to.
- OAuth is a way to implement the authorization step:
  - Since users login with a third-party account, that access sometimes grants third-party privileges, such as commenting or posting via your application, or simply accessing information such as name.
- Flow:
  - The client application (your Full-stack app) sends "client credentials, the ID, the secret, and the user credentials to the authorization server..."
  - "The **client ID** is a public identifier for the client app; you can make it public or store it in the code."
  - Don't store the _client secret_ in the code.
- _Grant Types_
  - **client credentials flow**
    - machine-to-machine communication
    - The client already has the details and passes them to the authorization server to receive an access token.
    - "Here, the task itself is both the client and the resource owner."
      - "the client (app/service) authenticates as itself and gets an access token that represents the client/application (no user involved)"
  - **authorization code flow**
    - most common
    - one API call to receive authorization grant code
    - another API call to use authorization to get access token in return
  - **implicit flow**
    - skips authorization step and receives access token directly.
    - don't do this.
  - **resource owner password credentials flow**
    - user sends their personal information to the client (your full-stack app), and the client forwards it the authentication server.
    - This is different from _client credentials flow_ in that ...
- **Bearer Tokens**
  - access tokens are often _bearer tokens_
    - defined shelf life, but can be refreshed with a _refresh token_ (no limited shelf life)
    - "The provider usually rotates the refresh token each time a new bearer token is issued and accepts each refresh token only once."
    - The _bearer token_ is usually in the form of a JSON Web Token (JWT), which can be sent as URL parameters or as part of API request data
      - JWTs can be _signed_ and/or _encrypted_.
      - JWTs use _hash-based message authentication code (HMAC)_ using the _SHA-256_ algorithm. (checksums)
      - JWTs perform 2 checks
        - confirm the sender of the message
        - check hash (content has not changed)
  - access to the token grants access to the data.
- **The Authorization Code Flow**
  - This part essentially gives an example where allowing login via a social media account could update the process of publishing the output in an automated way.
- **Createing a JWT token**
  - creating an example jwt
  - JWT
    - string separated by periods (".")
    - **header**
      - base-64 enconded JSON)
      - FWIW, think of this like the header for an HTTP request where details about the transaction can be indicated
      - view example [code 1](#example-code)
    - **paylaod**
      - base-64 enconded JSON
      - properties in this paylod are referred to as _claim_
    - **signature**
      - checksum of above 2

# Implementation notes:

- The examaple stores a hardcoded value in the database, but, in prod, the secret should NOT be available.
- I've read elsewhere that string comparison is inefficient as compared to comparing number values (learned this from comparing dates as JS Date Objects vs as ISO date strings). However, comparing hash/checksum strings might be more efficient since they're more likely to terminate early?

# 2026 Revisit Deviations:

- I didn't do this one as well, similar to last year, but I generally get the idea better this time around.

# Example code:

```js
const headerObject = {
  "typ": "JWT"
  "alg": "HS256"
}
```
