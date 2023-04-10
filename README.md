# PropNex Investment Suite 
* A real estate application for property seekers
* Built using the Ionic-Angular framework
* Supports both Web and Mobile (iOS & Android) platforms<br>

## Frameworks to Install
* Node.js version 16.13.0
* npm version 8.1.4
* Ionic CLI version 6.20.5<br>

## How to Run
* In a fresh pull of the repo, `cd propnex-investment-suite`
* delete 'node_modules' folder and run `npm install`
* `ng build`<br>

**Web**
* `ionic serve` runs app on browser (localhost) with live reload feature<br>

**Mobile**<br>

*Method 1*
* run app on Chrome browser
* (right click) `Inspect`
* `Dimensions: ` select desired device from dropdown list (eg. iPhone 12 Pro)<br>

*Method 2 - android only (Android Studio)*
* `ng build`
* `ionic capacitor add android`
* `ionic capacitor copy android` 
* alternatively, `ionic capacitor run android` or `ionic capacitor run android -l`<br>

*Method 3 - ios only (XCode)*
* `ng build`
* `ionic capacitor add ios`
* `ionic capacitor copy ios` 
* alternatively, `ionic capacitor run ios` or `ionic capacitor run ios -l`<br>

## Project Structure
|- ai_models<br>
&emsp;|- price_prediction     -- contains the price prediction model<br>
&emsp;|- recommendation_system    -- contains the recommendation system model<br>
|- database_data    -- contains the exported firebase databases<br>
|-propnex-investment-suite  -- contains the application code<br>
&emsp;|- src  -- main source folder for the application code<br>
&emsp;&emsp;|- app  -- contains the application module and components<br>
&emsp;&emsp;&emsp;|- pages    -- contains the various pages of the app<br>
&emsp;&emsp;&emsp;&emsp;|- auth     -- contains logic to build the login/signup page <br>
&emsp;&emsp;&emsp;&emsp;|- home     -- contains all the logic and internal page folders to build the home page<br>
&emsp;&emsp;&emsp;&emsp;|- stats    -- contains logic to build the statistical insights page <br>
&emsp;&emsp;&emsp;&emsp;|- units    -- contains the all the logic, internal page folders and components to build the find place page<br>
&emsp;&emsp;&emsp;|- services     -- contains the various services used by the app<br>
&emsp;&emsp;|- assets   -- contains images and other assets used in the app<br>
&emsp;&emsp;|- theme    -- contains styling and theming configuration files for the app<br>
&emsp;&emsp;|- global.scss  -- global stylesheet used to define styles that apply to the entire app<br>
&emsp;|- node_module  -- contains all third-party dependencies and libraries that the app uses<br>
&emsp;|-package.json  -- configuration file that contains information about the project and its dependencies






