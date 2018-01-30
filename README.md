#Sonar - Homeflow Tech Test


###Technologies used:

- Node
- Express
- JavaScript

###Get up and running:

Start by cloning the repo and navigating into the project root:

```git clone https://github.com/Benjamin-Hughes/MidoriBB.git ```

Next run NPM to install dependancies:

```npm install```

Next you will need to create a .env file and store your key inside a variable called REQUEST:

```REQUEST='http://index1.homeflow.co.uk/properties?api_key=yourkeygoeshere&search[place][id]=51e7c4a873dadaf60feee624&[search][channel]=sales'```

Once that's done you can start the app by running ```node app``` and browse to it on http://localhost:3000

###Issues:

- No detailed description section created yet
- I was unable to piece together the correct URL's to use to display images within the time I had available
- No location search, but all other search functionality is working

###Potential Improvements:

- Add testing using Mocha/Chai
- Add descriptions and detailed description section for properties
- Tidy up formatting/use React for better organisation
- Hosting on Heroku