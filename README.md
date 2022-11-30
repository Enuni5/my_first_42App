# MY first 42App
My first application with the 42 school API

We are going to use nodjs and express.

First step is install nodejs at the iMac machines at school:
```
brew install nodejs
```

While it's installing, we go ahead and create a github repository. Then we'll create a project with nodejs:

```
npm init
```
Choose all default options.

Then, install express framework:

```
npm install express --save
```

While all of this is installing, we are going to register the app at the 42 intra.

```
Being logged in at the 42 intra > user menu > settings > left panel API > 
> Top right button "Register new App" > Fill the fields and give basic scope
(At the URI field I'm filling with the localhost port I'll use to do tests)
```

Next, we are going to create ```(touch)``` an app.js file with your favourite IDE 
and write a simple connection app:
```
const express = require("express");
const app = express();
app.post('/', function (req, res) {
  res.send('[]Saludos desde express');
});
app.get('/', function (req, res) {
  res.send('[]Saludos desde express');
});
app.listen(3000, () => {
 console.log("El servidor está inicializado en el puerto 3000");
});
```

At the ```app.listen(3000, () => {console.log("El servidor está inicializado en el puerto 3000");``` 
we can change the port number at which we want the app to "listen"

We can test our app running it at the console:

```
node app.js
```
Open a web browser and type:

```
localhost:3000
```
We should be seeing the "[]Saludos desde express" message.

Moving on to next step, we follow along the 42 api guide at: 
https://api.intra.42.fr/apidoc/guides/getting_started
