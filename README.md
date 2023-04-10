# propnex-fyp

* PropNex Investment suite 
* Built using the ionic-angular framework
* Supports both web and mobile (ios & android) platforms.


## How to Run
* In a fresh pull of the repo, `cd propnex-investment-suite`
* delete 'node_modules' folder and run `npm install`
* `ng build`

**Web**
* `ionic serve` runs app on browser (localhost) with live reload feature

**Mobile**\
*Method 1*
* run app on Chrome browser
* (right click) 'Inspect'
* 'Dimensions: ' select desired device from dropdown list (eg. iPhone 12 Pro)

*Method 2 - android only (Android Studio)*
* `ng build`
* `ionic capacitor add android`
* `ionic capacitor copy android` 
* alternatively, `ionic capacitor run android` or `ionic capacitor run android -l`

*Method 3 - ios only (XCode)*
* `ng build`
* `ionic capacitor add ios`
* `ionic capacitor copy ios` 
* alternatively, `ionic capacitor run ios` or `ionic capacitor run ios -l`


## Project Structure
|- ai_models
    |- price_prediction     -- contains the price prediction model
    |- recommendation_system    -- contains the recommendation system model
|- database_data    -- contains the exported firebase databases
|-propnex-investment-suite  -- contains the application code
    |- src  -- main source folder for the application code
        |- app  -- contains the application module and components
            |- pages    -- contains the various pages of the app
                |- auth     -- contains logic to build the login/signup page 
                |- home     -- contains all the logic and internal page folders to build the home page 
                |- stats    -- contains logic to build the statistical insights page 
                |- units    -- contains the all the logic, internal page folders and components to build the find place page
            |- services     -- contains the various services used by the app
        |- assets   -- contains images and other assets used in the app
        |- theme    -- contains styling and theming configuration files for the app
        |- global.scss  -- global stylesheet used to define styles that apply to the entire app
    |- node_module  -- contains all third-party dependencies and libraries that the app uses
    |-package.json  -- configuration file that contains information about the project and its dependencies






