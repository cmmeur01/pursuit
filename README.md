# [Pursuit](https://pursuitapp.herokuapp.com/#/) 

Pursuit, a fitness tracking application, allows users to create and save routes and workouts while keeping track of their time / distance spent cycling or running, by using the GoogleMaps API. 


[main-feed]: https://i.imgur.com/wYUSL4I.png "Workout Feed"
[route-builder]: https://i.imgur.com/NbodRQt.png "Route Builder"


![Workout Feed][main-feed]


### Built With:

* Ruby on Rails 5.2.3 - Backend API (Ruby 2.5.5)
 
* React - Frontend components

* Redux - State Management

* GoogleMaps API - Map stuff :)

* PostgreSQL - Data Storage

### Highlights

#### Route Builder 

This is the heart of the application, where the user interfaces with the application to create their own custom routes. 

![Route Builder][route-builder]

Once the component had fully mounted, I created a function that would wait for the users input on the map. 










### Local Deployment:

* Clone this repo

* Inside the directory, run "rails credentials:edit" and add your Google API key under the key of "google" and then "api_key" pointing at your key

* Run "docker-compose up -d" and navigate to http://localhost:3000

