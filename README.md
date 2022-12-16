# CM Order Status Integration
### Getting Started
This is an external connection script that listens to frontend button events [order status request]. When the button is clicked within Drift Widget a post drift.identify() function stores the session token into a custom Drift Attribute. Upon this event, it gets translated into a GET call request to collect the request status object from CM API and present it back into the conversation.

This app serves Drift Customer "Covalent Metrology", orgId: ***6104.  The test custom Drift app is owned by Aleia's account and available [here](https://app.drift.com/settings/setup/63d12ab0-599b-4b4e-8c1b-192f4ef66783) and [here](https://dev.drift.com/app/63d12ab0-599b-4b4e-8c1b-192f4ef66783/info).


### Requirements
- Drift to Unified Login Redirection
- GET API Call to collect a Single Order Status by CM Number for a Logged-in Customer
- [A Drift OAuth App](https://devdocs.drift.com/docs/authentication-and-scopes)
- [A Drift App API Key](https://devdocs.drift.com/docs/quick-start).
    - Required Auth Scopes: 
        - conversation_read
        - conversation_write
        - contact_read
        - contact_write
        - user_read
        
### How to use/update this repo
Clone this repo and navigate to the repo's top level directory (drift-CM-orderGetter-bot).
Install node dependencies

#### Node and core dependencies

This project leverages core libraries/dependencies that are listed below:

* axios (https://www.npmjs.com/package/axios)
* body-parser (https://www.npmjs.com/package/body-parser)
* dotenv (https://www.npmjs.com/package/dotenv)
* express (https://www.npmjs.com/package/express)
* ngrok (https://www.npmjs.com/package/ngrok)
* node (https://nodejs.org/en/)
* npm (https://www.npmjs.com/package/npm)

#### Environment Variables
This app uses .env secrets to manage API credentials.  

Hosting Recommendations
Store the following variables to the Lambda runtime environment via Terraform configuration files:

`DRIFT_TOKEN` - The Bearer Token generated when you installed the app to your Drift Org

### Considerations
To deploy this app, you are required to swap local tunneling with a public API Gateway "Webhook listener".

Copy and paste this URL into the webhook field in the Drift Dev Platform.  For example, your webhook address can look like the following:

```https://sample.execute-api.us-east-1.amazonaws.com/prod/drift-sample```

![Capture](https://user-images.githubusercontent.com/57994411/151228007-563fafb8-e7e2-438c-98a5-81537987e4e6.JPG)


Be sure to run ```npm install`` _before you run any deployment shell of some sort (ie. node modules) be included hosting service that is containing the app's code.


