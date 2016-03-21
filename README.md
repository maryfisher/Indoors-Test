# How to run app #

1. Install NodeJS on your computer
2. Install NPM package "grunt-cli" as a global module
3. Inside indoors-client-app, run "npm install" to install local npm dependencies
4. Inside indoors-client-app, run "grunt typings" to install TypeScript definitions
5. Inside indoors-client-app, compile/copy app to dist by running "grunt"

6. Prepare app.properties at ../indoors-web-service (spring.resources.staticLocations=file:///[Path to]/indoors-client-app/dist/)
7. Inside indoors-web-service run "mvn package && java -jar indoors-rest-service/target/indoors-rest-service-0.0.1-SNAPSHOT.jar --spring.config.location=file:../app.properties"

Deployed app can be at https://indoors-test.herokuapp.com