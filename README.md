# [Pursuit](https://pursuitapp.herokuapp.com/#/) 

Pursuit, a fitness tracking application, allows users to create and save routes and workouts while keeping track of their time / distance spent cycling or running, by using the GoogleMaps API. 


[main-feed]: https://i.imgur.com/wYUSL4I.png "Workout Feed"
[route-builder]: https://i.imgur.com/a6YfCS0.png "Route Builder"


![Workout Feed][main-feed]


### Built With:

* Ruby on Rails 5.2.3 - Backend API (Ruby 2.5.5)
 
* React - Frontend components

* Redux - State Management

* GoogleMaps API - Map functionality

* PostgreSQL - Data Storage

### Highlights

#### Route Builder 

This is the heart of the application, where the user interfaces with the application to create their own custom routes. 

![Route Builder][route-builder]

Once the component has fully mounted, I created a function that would wait for the users input on the map. Once receiving the input or click on the map, this waypoint is added to the path to be saved and a marker created for the location. The route is saved with each click, however it only gets committed to the database once the user confirms they want to save the route and provides the other necessary input values. With each save of the map, GoogleMaps Elevation API is called to update the distance and elevation with each additional waypoint. 

```javascript
  listenClicks() {
    let thatMap = this.map;
    this.polyLine.setMap(this.map);
    let thatPath = this.path;
    
    const addLatLng = (event) => {
      //add the point to the path
      thatPath.push(event.latLng);
      //make a new marker at that position
      var marker = new google.maps.Marker({
        position: event.latLng,
        map: thatMap
      });
      //add the marker to the array of markers to display
      this.markers.push(marker);
      //set the state to the waypoints array from the create path
      this.setState({ waypoints: thatPath["j"] });
    };
    
    //adding the point to the waypoints / markers
    //saving the route builds the request for elevation API
    this.map.addListener('click', addLatLng);
    this.map.addListener('click', this.saveRoute);
  }
```

One issue encountered was the GoogleMaps Elevation API was unable to provide cumulative elevation over the entire route. It only provided the current elevation at any given waypoint. To make use of that data I had to keep a running tally of the change in elevation which could then be saved in the state and displayed for the user.

```javascript
calcElevation(elevations) {
    let totalGain = 0;
    //if change between points is > 0.25m add to total gain
    //filters out some noise
    for (let i = 0; i < elevations.length - 1; i++) {
      if ((elevations[i + 1].elevation - elevations[i].elevation) > 0.25) {
        totalGain = totalGain + (elevations[i + 1].elevation - elevations[i].elevation);
      }
    }
    this.setState({elevation: totalGain});
  }
```




