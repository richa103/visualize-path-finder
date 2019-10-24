This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

#### https://richa103.github.io/visualize-path-finder/
  Link to view the program https://richa103.github.io/visualize-path-finder/


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#### https://richa103.github.io/visualize-path-finder/
  Link to view the program https://richa103.github.io/visualize-path-finder/
  
  ### Squares
 The pathfinding Visualizer uses various state updates to rerender the squares on the screen. On a full viewport the grid
 is 40 x 100 grid. On a half screen the grid is 40 x 50. Each square is a seperate element with a single integer prop passed to it to
 signify if it is a maze wall, open square, start, waypoint, end, searchspace, or optimal path node. CSS animations reflect the current 
 prop value passed to each square. Each square only rerenders if a prop changes. Icons are imported from FontAwesome.
 
 ### Delayed Animations features
 All delayed animations are set using javascript timeout Triggers that delay setting the state of individual squares. This delay, is to
 better reflect the search algorithms and the nature of the recursive division algorithms.
 
 ### Mouse Events
 Various onClick events are tied to different handleClick functions depending on which React class called the onClick event. 
 Other mouse events used are onMouseEnter, OnMouseDown, and OnMouseUp to handle drawing maze squares using the cursor while a 
 mouse button is down and to drag the start, waypoint, or end nodes.
 
 ### States
 There are a varied amount of states to reflect the current nature of the program. For example, if an algorithm has been called once
 without resetting, then on drag events of the start, waypoint, or end nodes should reflect realtime changes on the screen
 instead of delayed CSS animations. A flag is set in the game class that does not call the timeoutTrigger function, that is usually called.
 
 ### Buttons, Drop down menus
 The Buttons and drop down menus at the top of the scren have onClick events that call handleClick functions that clear the board or
 reset the start, waypoint, end nodes or create a maze pattern or run the chosen algorithm.
 For example a choice in the Algorithm drop down menu sets the state of algoChoice to the chosen algorithm. Then the start button
 calls the algorithm's choice from a switch statement in the handleAlgorithmClick function with the chosen algorithm.
 
 

