# React App with Storybook Example

This example app shows how to create a React app with Storybook and add authentication.

Please read [How to Create a React App with Storybook](https://developer.okta.com/blog/2022/01/19/react-storybook) to see how this app was created.

**Prerequisites:**

* [Node](https://nodejs.org/en/) installed
* An [Okta Developer Account](https://developer.okta.com/signup)

> [Okta](https://developer.okta.com/) has Authentication and User Management APIs that reduce development time with instant-on, scalable user infrastructure. Okta's intuitive API and expert support make it easy for developers to authenticate, manage and secure users and roles in any application.

* [Getting Started](#getting-started)
* [Links](#links)
* [Help](#help)
* [License](#license)

## Getting Started

To install this example application, run the following commands:

```bash
git clone https://github.com/oktadeveloper/okta-react-storybook-example.git
cd okta-react-storybook-example
npm install
```

### Create an OIDC App on Okta

Before you begin, you'll need a free Okta developer account. Install the [Okta CLI](https://cli.okta.com) and run `okta register` to sign up for a new account. If you already have an account, run `okta login`.

Then, run `okta apps create`. Select the default app name, or change it as you see fit. Choose **Single-Page App** and press **Enter**.

Change the Redirect URI to `http://localhost:3000/callback` and accept the default Logout Redirect URI of `http://localhost:3000`.

The Okta CLI will create an OIDC Single-Page App in your Okta Org. It will add the redirect URIs you specified and grant access to the Everyone group. It will also add a trusted origin for `http://localhost:3000`. You will see output like the following when it's finished:

```
Okta application configuration:
Issuer:    https://{yourOktaDomain}/oauth2/default
Client ID: {clientId}
```

**NOTE:** You can also use the Okta Admin Console to create your app. See [Create a React App](https://developer.okta.com/docs/guides/sign-into-spa/react/create-okta-application/) for more information.

### Configure your Okta Settings

Copy your org URL and client ID into `src/index.js`:

```js
const oktaAuth = new OktaAuth({
  issuer: 'https://{yourOktaDomain}/oauth2/default',
  clientId: '{yourClientID}',
  redirectUri: `/callback`,
});
```

Serve the app using `npm start` to login with Okta and see finished app using Storybook components!

## Links

This example uses the following open source libraries:

* [React](https://reactjs.org/)
* [Okta React OIDC SDK](https://github.com/okta/okta-react)
* [Okta Auth JavaScript SDK](https://github.com/okta/okta-auth-js)

## Help

Please post any questions as issues in this repository, or visit our [Okta Developer Forums](https://devforum.okta.com/).

## License

Apache 2.0, see [LICENSE](LICENSE).
