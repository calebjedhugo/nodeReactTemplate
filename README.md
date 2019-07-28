
This is a way to get a React front end and Nodejs backend working quickly together in a developer environment.

To deploy a project based off of this template to production will be another long story (sorry to get your hopes up). It will require the automated building of the react app, packing of the node app, moving the client files around, deploying to a server that automatically kicks off and restarts your server-side code using a "deploy" script in your json (you'll have to write that), and finally a little code in nodejs that will send the index when the root of the site is requested.

And, of course, you'll need to install the dependencies (npm install dependencies) via npm before you can type in the "npm run dev" command and get going.

I may update this in the future to include the deployment process, but for now a developer environment is what I have for you! :)
