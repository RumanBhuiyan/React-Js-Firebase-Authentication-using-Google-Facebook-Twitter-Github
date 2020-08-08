#  React js Firebase Authentication using Google,Facebook,Twitter,Github 🧐😐😎

## This is a demo project on how to configure any react app to use firebase authentictaion using google,facebook,twitter,github etc
## How to use it:
### 1. firstly download the project zip file and extract it then open the project in your fabourite code editor
###    like [VS Code](https://code.visualstudio.com/) or [Atom](https://atom.io/)
### 2. Go to your `package.json` file and install all the packages in `dependencies` list step by step using `npm install package_name`
###   thus install [firebase](https://www.npmjs.com/package/firebase) package running the command `npm i firebase`
### 3. Then go to [Firebase](https://firebase.google.com/) and create your app ,after that go to project setting and copy your app's
### apikey,authdomain etc information and paste them inside firebase.js file's config object  
###   `const config = {`
###  `apiKey: process.env.API_KEY,`
###  `authDomain: process.env.AUTH_DOMAIN,`
###  `databaseURL: process.env.DATABASE_URL`,
###  `projectId: process.env.PROJECT_ID,`
###  `storageBucket: process.env.STORAGE_BUCKET,`
###  `messagingSenderId: process.env.MESSAGING_SENDER_ID,`
### `};`
###  4. For using Facebook,Twitter,Github authentication in your app you must have to enable them in your 
### firebase app & how to enable them go through the documentation [Firebase Docs](https://firebase.google.com/docs/web/setup)
### 5. After Fixing everything open your terminal inside this project & type `npm start` & Open your Browser
### like Google Chrome and type in the url box `http://localhost:3000/` You will see something alike 
<img src="/images/final.PNG" />

### Because all React app run their app in `port no:3000` by default




