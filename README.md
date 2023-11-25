### Install
- `npm install`
- `npm run build`

### Run
- `npm start`

### Deploy to Firebase
- `sudo npm install -g firebase-tools`
- `firebase login`
- `firebase init`
  - Which Firebase features do you want to set up for this directory? Press Space to select features, then Enter
 to confirm your choices. 
    - Hosting: Configure files for Firebase Hosting and (optionally) set up GitHub Action 
deploys
  - ? What do you want to use as your public directory?
    - build
  - ? Configure as a single-page app (rewrite all urls to /index.html)?
    - Yes
  - ? Set up automatic builds and deploys with GitHub?
    - No
  - ? File build/index.html already exists. Overwrite?
    - No
- `firebase deploy`
