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





