import React from 'react';
import ReactDOM from 'react-dom';
import { faRocket } from "@fortawesome/free-solid-svg-icons";
import { faFire } from "@fortawesome/free-solid-svg-icons";
import { faGlobeAmericas } from "@fortawesome/free-solid-svg-icons";
import { faCaretSquareDown } from "@fortawesome/free-solid-svg-icons";
import { faMoneyBill } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './index.css';

//function Square(props) {

class Square extends React.Component{
  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.value === nextProps.value) {
      return false;
    } else {
      return true;
    }
  }
  render(){

  var className = (this.props.value === 0) ? "white" : "black";//"square blueVis";
  if(this.props.value === 0 || this.props.value === 1){
  return (
    /*An opening that can be passed through*/
    <div className={className} onClick={this.props.onClick} onMouseEnter = {this.props.onMouseEnter}>
      </div>
  );
}

else if(this.props.value === 2){
  /*an obstruction that can passed through*/
  return (
  <div className="white" onClick={this.props.onClick} onMouseEnter = {this.props.onMouseEnter}>
  <FontAwesomeIcon  className = "nodeStretch iconsFire fa-sm icons" icon={faFire} />

  </div>
);
}
else if(this.props.value === 3){
  //The starting point
  return(
    <div className="white"  onMouseEnter = {this.props.onMouseEnter}  onMouseDown = {this.props.onMouseDown}>
      <FontAwesomeIcon className = "nodesStretch icons"icon={faRocket} />
      </div>
  );
}
else if(this.props.value === 4){
  //The Ending point
  return(
    <div className="white" onMouseEnter = {this.props.onMouseEnter}  onMouseDown = {this.props.onMouseDown}>
      <FontAwesomeIcon className = "nodesStretch fa-sm icons" icon={faGlobeAmericas} />
      </div>
  );

}
else if(this.props.value === 5){
  //Teleportation
  return(
    <div className="white" onClick={this.props.onClick} onMouseEnter = {this.props.onMouseEnter}>
      <FontAwesomeIcon className = "fa-sm icons" icon={faGlobeAmericas} />
      </div>
  );

}
else if(this.props.value === 6){
  //Space Searched
  return(
    <div className="blue" onClick={this.props.onClick} onMouseEnter = {this.props.onMouseEnter}>

      </div>
  );

}

else if(this.props.value === 7){
  //Optimal Route
    return(
      <div className="orange" onClick={this.props.onClick} onMouseEnter = {this.props.onMouseEnter}>
          </div>
        );
      }
  else if(this.props.value === 8){
    //Money middle destination
    return(
      <div className="white" onMouseDown = {this.props.onMouseDown} onMouseEnter = {this.props.onMouseEnter}>
        <FontAwesomeIcon className = "fa-sm icons greenMoney nodesStretch" icon={faMoneyBill} />
        </div>
    );
    }
}
}

class Algorithms extends React.Component{


  renderAlgorithm(i){
    return (<button onClick = {() => this.props.onClick(i)}>
    {i}
    </button>
  );
  //{this.renderAlgorithm("Swarm Algorithm")}
  //{this.renderAlgorithm("Convergent Swarm Algorithm")}
  //{this.renderAlgorithm("Bidirectional Swarm Algorithm")}
  }

  render(){
    return(
      <li className="dropdown leftPadding">
        <a href="javascript:void(0)" className="dropbtn">Algorithms
          <FontAwesomeIcon  className = "iconPadding fa-sm" icon={faCaretSquareDown} />
        </a>
        <div className="dropdown-content">
          {this.renderAlgorithm("A* Search")}
          {this.renderAlgorithm("Dijikstra's Algorithm")}
          {this.renderAlgorithm("Greedy Best-first Search")}
          {this.renderAlgorithm("Breadth-first Search")}
          {this.renderAlgorithm("Depth-first Search")}
        </div>
      </li>
    );
  }
}
class Mazes_Patterns extends React.Component{

  renderMazes(i){
    return (<button onClick = {() => this.props.onClick(i)}>
    {i}
    </button>
  );

  }

  render(){
    return(
      <li className="dropdown">
        <a href="javascript:void(0)" className="dropbtn">Mazes & Patterns
        <FontAwesomeIcon  className = "iconPadding fa-sm" icon={faCaretSquareDown} /></a>
        <div className="dropdown-content">
        {this.renderMazes("Create Border")}
        {this.renderMazes("Recursive Division")}
        {this.renderMazes("Recursive Division (vertical skew)")}
        {this.renderMazes("Recursive Division (horizontal skew)")}
        {this.renderMazes("Basic Random Maze")}
        {this.renderMazes("Basic Weight Maze")}
        {this.renderMazes("Simple Stair Pattern")}
        </div>
      </li>
    );
  }
}
class Bombs extends React.Component{

  render(){
    return(
      <li><button onClick = {this.props.onClick}>Add Money</button></li>
    );
  }
}
class VisualizeAlgorithm extends React.Component{

  render(){
    return(
      <li><button onClick = {() => this.props.onClick()}>Start {this.props.algoChoice}!</button></li>
    );
  }
}
class ClearBoard extends React.Component{

  render(){
    return(
      <li><button onClick = {this.props.onClick}>Reset Board</button></li>
    );
  }
}
class ClearWalls_Weights extends React.Component{

  render(){
    return(
      <li><button onClick = {this.props.onClick}>Clear Walls & Fire</button></li>
    );
  }
}
class ClearPath extends React.Component{
  pathClearing(i){
    return(
      <button onClick = {() => this.props.onClick(i)}>Clear Path</button>
    );
  }
  render(){
    return(
      <li>
      {this.pathClearing(false)}
      </li>
    );
  }
}
class SpeedOfAlgorithm extends React.Component{
  chooseSpeed(i){
    return (<button onClick = {() => this.props.onClick(i)}>
    {i}
    </button>
  );

  }
  render(){
    return(
      <li className="dropdown">
        <a href="javascript:void(0)" className="dropbtn">Speed: {this.props.speedName}
        <FontAwesomeIcon  className = "iconPadding fa-sm" icon={faCaretSquareDown} /></a>
        <div className="dropdown-content">
          {this.chooseSpeed("Fast")}
          {this.chooseSpeed("Average")}
          {this.chooseSpeed("Slow")}
        </div>
      </li>
    );
  }
}
class Tutorial extends React.Component{
  constructor(props){
    super(props);
    this.handleWindowOpen = this.handleWindowOpen.bind(this);
    this.handleWindowClose = this.handleWindowClose.bind(this);
    this.state = {
      closeWindow: true,
    };
  }
  componentDidMount(){
    document.addEventListener('mousedown', this.handleTutorialClick, false); //add event listener to entire document
  }
  componentWillUnmount(){
    document.removeEventListener('mousedown', this.handleTutorialClick, false);
  }
  handleTutorialClick = (e) => {
    if(this.node.contains(e.target)){
      return; //click is inside the popup window
    }
    this.handleClickOutside();
  }
  handleClickOutside(){
    this.setState({closeWindow: true});
  }
  handleWindowOpen(){
    this.setState({closeWindow: false});
  }
  handleWindowClose(){
    this.setState({closeWindow: true});
  }
  render(){
    const closeWindow = this.state.closeWindow;
    var classes = (closeWindow) ? "popUpWindowClose" : "popUpWindowOpen";
    return(
      <>

      <li onClick = {this.handleWindowOpen}><button>Tutorial</button></li>
      <div className = {classes} ref={node => this.node = node}>
        <button onClick = {this.handleWindowClose}>X</button>
        <h3>This program will simulate various Pathfinding Algorithms
          <FontAwesomeIcon className = "nodesStretch icons smallerLeftPadding"icon={faRocket} />
        </h3>
        <ol className = "liFormat">
        <li>Start, Waypoint, and Destination are all draggable! Feel free to position them where you like</li>
        <li>Choose an algorithm from the drop down menu</li>
        <li> Choose a maze or pattern from the drop down menu or create your own by clicking and dragging the mouse across the grid</li>
        <li> The Add Money waypoint will add a middle destination for the rocket to reach, before heading to its home planet</li>
        <li>Choose a speed for the algorithm and create maze to run at, from the speed drop down menu</li>
        <li>Click the Start button to visualize the algorithm</li>
        <li>After the algorithm has finished running, you can drag the rocket, money, or planet around for realtime visualization of the chosen algorithm</li>
        <li>Thanks for checking out my program! I hope you enjoy it. From Jade Richardson.</li>
        </ol>
        <h4>Tips and Tricks
        <FontAwesomeIcon  className = "nodeStretch iconsFire fa-sm icons smallerLeftPadding" icon={faFire} /></h4>
        <p>A*, Dijikstra, and Breadth First search will find the shortest path. Depth First and Greedy will find a path..</p>
        <p>Use Clear Path button to reset algorithms, clear searchspace, and path found.</p>
        <p>The rocket can go through fire, but it is expensive and the rocket would prefer to avoid that</p>
        <p>An empty square grid is + 1 path cost, while fire is + 15 path cost</p>
        <p>Clear path will reset the search space and the optimal path to the destination. It will also reset realtime visualization of the algorithm</p>
        <p>Reset Board will reset the start and end point back to their original positions and will clear walls, weights, paths, and realtime visualization</p>
        <p>Since the program  is run aschronously, it is possible to run two algorithms or mazes at the same time. This can have an impact on performance. Go ahead and refresh the page if the program runs slowly.</p>

        <p></p>
      </div>
    </>

    );
  }
}

class Board extends React.Component {
  constructor(props){
    super(props);
    let squares = [];
    this.state = {
      isTableRendered: false,
    };

  }


  renderSquare(i,j) {

    return <Square value = {this.props.squares[i][j]}
    /*This might slow down performance*/
    onClick={() => this.props.onClick(i,j)}
    onMouseEnter={() => this.props.onMouseEnter(i,j)}
    onMouseDown = {() => this.props.onMouseDown(i,j)} //for handling dragging start or end

    />;
  }


  render() {
    const width = this.props.width;
    const height = this.props.height;
    let squares = [];
    for(let i=0; i < height; ++i) {
        let row = [];
        for(let j=0; j<width; ++j) {
          row.push(this.renderSquare(i,j));
        }
  squares.push(<div key={i} className="board-row">{row}</div>);
}

    return (
      <div>{squares}</div>
  );
  }
}

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.handleMouseUp = this.handleMouseUp.bind(this);
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleAlgorithmClick = this.handleAlgorithmClick.bind(this);
    this.handleMazes_PatternsClick = this.handleMazes_PatternsClick.bind(this);
    this.handleAddBombClick = this.handleAddBombClick.bind(this);
    this.handleVisualizeAlgorithmClick = this.handleVisualizeAlgorithmClick.bind(this);
    this.handleClearBoardClick = this.handleClearBoardClick.bind(this);
    this.handleClearWalls_WeightsClick = this.handleClearWalls_WeightsClick.bind(this);
    this.handleClearPathClick = this.handleClearPathClick.bind(this);
    this.handleSpeedClick = this.handleSpeedClick.bind(this);
    this.updatePredicate = this.updatePredicate.bind(this);
    this.handleMouseDownSquare = this.handleMouseDownSquare.bind(this);
    this.handleMouseUpSquare = this.handleMouseUpSquare.bind(this);
    let x = Array(40).fill(null);
    for(let i = 0; i < 40; i++){
      x[i] = Array(100).fill(0);
    }
    let startY = 19;
    let startX = 40;
    let endY = 19;
    let endX = 75;
    x[startY][startX] = 3; //set Default starting point
    x[endY][endX] = 4; //set Default starting point
    this.state = {
      squares: x,
      isMouseDown: false,
      algoChoice: "",
      defaultStartY: startY,
      defaultStartX: startX,
      defaultEndY: endY,
      defaultEndX: endX,
      startY: startY,
      startX: startX,
      endY: endY,
      endX: endX,
      defaultWayPointY: 15,
      defaultWayPointX: 25,
      wayPointY: 15,
      wayPointX: 25,
      wayPointAdded: false,
      height: 40,
      width: 100,
      firstDidMount: false,
      speed: 25,
      speedName: "Fast",
      dragStart: false,
      dragEnd: false,
      dragWayPoint: false,
      optimalPath:[],
      spaceSearched: [],
      prevNodesPoint: [],
      algorithmRunning: false, //set true if algorithm has ran without clearing: I.E clear board, clear walls and weights, clear path. Algorithm will update optimal path and search space when start, waypoint, or end is moved
      //mazeChoice: "",
    };
  }
  componentDidMount(){
    this.updatePredicate();
    window.addEventListener("resize", this.updatePredicate);
  }
  componentWillUnmount(){
    window.removeEventListener("resize", this.updatePredicate);
  }

  updatePredicate(){
  let firstDidMount = this.state.firstDidMount;
  const widthPx = window.innerWidth; //returns width of the viewport
  const heightPx = window.screen.height; //returns height of the screen
  const aspectRatio = (widthPx / heightPx);
  let endX = this.state.endX;
  let startX = this.state.startX;
  let width = 100; //number of squares rendered in columns across the screen
  if(!firstDidMount){
    let squares = this.state.squares.slice();
    if (aspectRatio <= 1){ //aspect ratio 8/8
      width = 50;
      endX = Math.floor((endX / 2));
      startX = Math.floor((startX / 2));
      let squares = this.state.squares.slice();
      squares[this.state.startY][startX] = 3; //set start to new place
      squares[this.state.startY][this.state.startX] = 0; //set old start to 0
      squares[this.state.endY][endX] = 4; //set destination to new place
      squares[this.state.endY][this.state.endX] = 0; //set old destination to 0
      this.setState({
        width: width,
        firstDidMount: firstDidMount,
        endX: endX,
        startX: startX,
        defaultStartX: startX,
        defaultEndX: endX,
        squares: squares,
      });
    }
    if (aspectRatio > 1){ //aspect ration 16/8
        width = 100;
      }

      firstDidMount = true;
  //aspect ratio is width/ height i.e 1920/1080 = 16:9 aspect ratio
    this.setState({
      firstDidMount: firstDidMount, // component mounted for the first time, set to true
    });
    //this.createMazeBorder(width);
  }
}
  createMazeBorder(width){
  const yStart = this.state.startY;
  const xStart = this.state.startX;
  const endY = this.state.endY;
  const endX = this.state.endX;
  const wayPointY = this.state.wayPointY;
  const wayPointX = this.state.wayPointX;
  //const width = this.state.width;
  const height = this.state.height;
  let squares = this.state.squares.slice();
  for (let x = 0; x < width; x++){
  if((squares[0][x] !== 3) || (squares[0][x] !== 4)){
  squares[0][x] = 1;
}

  this.setState({squares: squares,});
}

  for (let x = 0; x < height; x++){
    if(squares[x][0] !== 3 || squares[x][0] !== 4){
      squares[x][0] = 1;
    }
}
  for (let x = 0; x < width; x++){
    if(squares[height - 1][x] !== 3 || squares[height - 1][x] !== 4){
      squares[height - 1][x] = 1;
    }
}
  for (let x = 0; x < height; x++){
    if(squares[x][(width - 1)] !== 3 || squares[x][(width - 1)] !== 4){
      squares[x][(width - 1)] = 1;
    }
}
if(this.state.wayPointAdded){
  squares[wayPointY][wayPointX] = 8;
}
squares[yStart][xStart] = 3;
squares[endY][endX] = 4;
this.setState({
  squares: squares,
});
}
  recursiveDivision(grid, x, y, width, height, isHoriz,prevLine, count){
  const yStart = this.state.startY;
  const xStart = this.state.startX;
  const endY = this.state.endY;
  const endX = this.state.endX;

  const speed = Math.floor(this.state.speed / 3); //wait a third of the time before drawing next square

  grid[yStart][xStart] = 3;
  grid[endY][endX] = 4;

  if(width < 4 || height < 4){
    return count;
  }


var wy = y + Math.floor(Math.random() * (height - 4));
var wx = x + Math.floor(Math.random() * (width - 4));
var py = y + Math.floor(Math.random() * (height - 2)) + 1;
var px = x + Math.floor(Math.random() * (width - 2)) + 1;
let choice = Math.floor((Math.random() * 2)); //random number 0 or 1
let val = 1;

if(width < 6){
  wy = y + 1;
}
if(height < 6){
  wx = x + 1;
}
/*Openings are on  even cells only*/
if((px % 2) == 1){
  if(choice === 1){
  px +=1;
}
else {
  px -=1;
}
if(px === 0){
  px += 2;
}
if(px === (width - 1)){
  px -= 2;
}
}
if((py % 2) == 1){
  if(choice === 1){
  py +=1;
  }
  else{
    py -=1;
  }
  if(py === (height - 1)){
    py -= 2;
  }
  if(py === 0){
    py +=2;
  }
}
/* Walls are on odd cells only*/
if((wx % 2) == 0){
  wx +=1;
}
if((wy % 2) == 0){
  wy +=1;
}
if(wy == 1){
  wy = 0;
}
if(wx == 1){
  wx = 0;
}



if(isHoriz){

  for(let j = x; j < (width + x); j++){
    if(j !== px && grid[wy][j] !== 3 && grid[wy][j] !== 4 && grid[wy][j] !== 8){
    //grid[wy][j] = 1;
    setTimeout(this.timeoutTrigger.bind(this), speed * count,grid,j,wy,val); //val is 1 i.e maze wall
    count += 1;
    }
  }
  if(wy !== 0 && wy !== (height - 1)){
    setTimeout(this.timeoutTrigger.bind(this), speed * count,grid,px,wy,0); //val is 1 i.e maze wall
  }
  //|| wy === 0 || wy === (height - 1)
  this.setState({
    squares: grid,
  });

  isHoriz = !isHoriz;
  var height1 = wy - y + 1;
  count = this.recursiveDivision(grid,x,y,width,height1, isHoriz, py, count); //Upper quadrant to be divided by vert line
  count = this.recursiveDivision(grid,x,wy + 1,width,(height - height1), isHoriz, py, count); //lower quadrant to be divided by vert line
}else{

  for(let j = y; j < (height + y); j++){
    if((j !== py) && grid[j][wx] !== 3 && grid[j][wx] !== 4 && grid[wy][j] !== 8){
    //grid[j][wx] = 1;
    setTimeout(this.timeoutTrigger.bind(this), speed * count,grid,wx,j,val); //val is 1 i.e maze wall
    count += 1;
    }
  }
  if(wx !== 0 || wx !== (width - 1)){
    setTimeout(this.timeoutTrigger.bind(this), speed * count,grid,wx,py,0); //val is 1 i.e maze wall
  }
  this.setState({
    squares: grid,
  });

  isHoriz = !isHoriz;
  var width1 = wx - x + 1;
  count = this.recursiveDivision(grid,x,y,width1,height, isHoriz, px, count); //Left quadrant to be divided by horizontal line
  count = this.recursiveDivision(grid,wx + 1,y,(width - width1),height, isHoriz, px, count); //Right quadrant to be divided by horizontal line
}
return count;

}
  recursiveDivisionVertSkew(grid, x, y, width, height, isHoriz,timesCalled){
  const yStart = this.state.startY;
  const xStart = this.state.startX;
  const endY = this.state.endY;
  const endX = this.state.endX;
  const wayPointX = this.state.wayPointX;
  const wayPointY = this.state.wayPointY;

  let count = 0;
  let wx = (width === 50) ? (width / 5) - 1 : (width / 10) - 1; //if width is 50 or 100
  let py = 0;
  let width1 = 10;
  while(wx < (width - 1)){

  py = y + Math.floor(Math.random() * (height - 2)) + 1;
  if((py % 2) == 1){
    py +=1;
    if(py == (height - 1)){
      py -= 2;
    }
  }
  for(let j = y; j < (height + y); j++){ //draw vertical lines that divide the total grid by 5 or 10 depending on the width
    grid[j][wx] = 1;
  }
  grid[py][wx] = 0;
  grid[yStart][xStart] = 3;
  grid[endY][endX] = 4;
  isHoriz = true;
  width1 = wx - x + 1;
  wx += 10;
  if(this.state.wayPointAdded){
    grid[wayPointY][wayPointX] = 8;
  }
  this.setState({
    squares: grid,
  });
  count = this.recursiveDivision(grid,x,y,width1,height, isHoriz, count); //Left quadrant to be divided by horizontal line

  x += 10;
}
this.recursiveDivision(grid,x,y,width1,height, isHoriz, count); //Left quadrant to be divided by horizontal line
}
  recursiveDivisionHorizSkew(grid, x, y, width, height, isHoriz,timesCalled){
  const yStart = this.state.startY;
  const xStart = this.state.startX;
  const endY = this.state.endY;
  const endX = this.state.endX;
  const wayPointX = this.state.wayPointX;
  const wayPointY = this.state.wayPointY;

  let count = 0;
  let wy = Math.ceil((height / 4) - 1); //Height is now equal to 10
  let px = 0;
  let height1 = 10;
  while(wy < (height - 1)){ // will divide total quadrants evenly
  px = x + Math.floor(Math.random() * (height - 2)) + 1; //Choose a random opening
  if((px % 2) == 1){ //opening must be even, so a wall cannot accidently block the opening
    px +=1;
  }
  for(let j = x; j < (width + x); j++){ //Iterate through creating horizontal walls
    grid[wy][j] = 1;
  }
  grid[wy][px] = 0;
  isHoriz = false;
  wy += 10;
  grid[yStart][xStart] = 3; //The start does not change
  grid[endY][endX] = 4; //The destination does not chnage
  if(this.state.wayPointAdded){
    grid[wayPointY][wayPointX] = 8;
  }
  this.setState({
    squares: grid,
  });
  count = this.recursiveDivision(grid,x,y,width,height1, isHoriz, count); //Upper quadrant to be divided by vert line, A horizontal section to be made into a maze

  y+=10;
}
  y -= 1; // decrement by 1 since qudrants are not evenly divided.
  this.recursiveDivision(grid,x,y,width,height1, isHoriz, count); //Last horizontal quadrant to be made into a maze
}
  basicRandMaze(squares,width,height){
  let temp = 0;
  for(let x = 0; x < height; x++){
    for(let i = 0; i < width; i++){
      temp = Math.floor(Math.random() * 7);
      if(temp === 1 || temp === 5){
      squares[x][i] = 1; // set some percentage of the grid to be a wall
    }
  }
}
const yStart = this.state.startY;
const xStart = this.state.startX;
const endY = this.state.endY;
const endX = this.state.endX;
const wayPointAdded = this.state.wayPointAdded;
const wayPointY = this.state.wayPointY;
const wayPointX = this.state.wayPointX;
if(wayPointAdded){
  squares[wayPointY][wayPointX] = 8; //reset middle point if it got deleted.
}
squares[yStart][xStart] = 3; //make sure start point did not get deleted
squares[endY][endX] = 4; //make sure end point did not get deleted
this.setState({
  squares: squares,
});
}
  basicWeightMaze(squares,width,height){
  let temp = 0;
  for(let x = 1; x < height - 1; x++){
    for(let i = 1; i < width - 1; i++){
      temp = Math.floor(Math.random() * 7);
      if(temp === 1 || temp === 5){
      squares[x][i] = 2; //Set some percentage of the maze to be equal to a bomb
    }
  }
}
const yStart = this.state.startY;
const xStart = this.state.startX;
const endY = this.state.endY;
const endX = this.state.endX;
const wayPointAdded = this.state.wayPointAdded;
const wayPointY = this.state.wayPointY;
const wayPointX = this.state.wayPointX;
if(wayPointAdded){
  squares[wayPointY][wayPointX] = 8; //reset middle point if it got deleted.
}
squares[yStart][xStart] = 3;
squares[endY][endX] = 4;
this.setState({
  squares: squares,
});
}
  simpleStairPattern(grid, width,height){
let x = 0
let y = height - 1; // start off at the bottom left corner of the grid
let flag = -1; //Whether we should increment or decrement the rows
  while(x < width - 2){
    grid[y][x] = 1; //if value is visited, set its value to 1

    if(y === 2 && flag === -1){ // it has reached the top, change directions
      flag = 1;
    }
    if(y === (height - 3) && flag === 1){ // it has reached the bottom, change directions
      flag = -1;
    }
    x += 1;
    y += flag;
  }
  const yStart = this.state.startY;
  const xStart = this.state.startX;
  const endY = this.state.endY;
  const endX = this.state.endX;
  const wayPointY = this.state.wayPointY;
  const wayPointX = this.state.wayPointX;
  const wayPointAdded = this.state.wayPointAdded;
  if(wayPointAdded){
    grid[wayPointY][wayPointX] = 8; //reset middle point if it got deleted.
  }
  grid[yStart][xStart] = 3;
  grid[endY][endX] = 4;
this.setState({
  squares: grid,
});
}
  timeoutTrigger(tempGrid,currentX,currentY,val){
    const wayPointAdded = this.state.wayPointAdded;
    if(val === 0 && currentX === 0){
      return; //do not create an opening on the border
    }
    if(tempGrid[currentY][currentX] === 3){
      return;
    }
    const squares = this.state.squares.slice();
    if(val === 1 && wayPointAdded && squares[currentY][currentX] === 8){ // do not draw over waypoint with a maze wall
      return;
    }

  if(squares[currentY][currentX] !== 7){
  tempGrid[currentY][currentX] = val;
  this.setState({
      squares: tempGrid,
    });
    }
  }
  handleClick(i,j) {
    var squares = this.state.squares.slice();

    squares[i][j] = squares[i][j] ? 0 : 1;


    this.setState({
      squares: squares,
    });
  }
  handleMouseDownSquare(i,j){
  const startY = this.state.startY;
  const startX = this.state.startX;
  const endY = this.state.endY;
  const endX = this.state.endX;
  const wayPointAdded = this.state.wayPointAdded;
  const wayPointX = this.state.wayPointX;
  const wayPointY = this.state.wayPointY;
  let prevNodesPoint = [i, j, 0]; //If you are about to drag an icon set prevNodesPoint to its first location
  this.setState({
    prevNodesPoint: prevNodesPoint
  });


  if(i === startY && j === startX){
    this.setState({
      dragStart: true,
    });
  }
  else if(i === endY && j === endX){
    let prevNodesPoint = [i,j,0]
    this.setState({
      dragEnd: true
    });
  }
  else if(wayPointAdded && i === wayPointY && j === wayPointX){
    this.setState({
      dragWayPoint: true
    });
  }
}
  handleMouseUpSquare(i,j){}
  handleMouseDown(){
  let isMouseDown = this.state.isMouseDown;
  if(!isMouseDown){
    isMouseDown = true;
    this.setState({
      isMouseDown: isMouseDown,
    });
  }
  }
  handleMouseUp(){
  let isMouseDown = this.state.isMouseDown;
  if(isMouseDown){
    isMouseDown = false;
    this.setState({
      isMouseDown: isMouseDown,
    });
  }
  }
  handleMouseEnter(i,j){

  const isMouseDown = this.state.isMouseDown;
  if(!isMouseDown){
    if(this.state.dragStart || this.state.dragEnd || this.state.dragWayPoint){
      this.setState({
        dragStart: false,
        dragEnd: false,
        dragWayPoint: false,
        prevNodesPoint: []
        });
      }
    return;
  }
  let yStart = this.state.startY;
  let xStart = this.state.startX;
  let endY = this.state.endY;
  let endX = this.state.endX;
  const wayPointY = this.state.wayPointY;
  const wayPointX = this.state.wayPointX;
  const isWayPointAdded = this.state.wayPointAdded;
  const algorithmRunning = this.state.algorithmRunning;
  var squares = this.state.squares.slice();
  let prevNodesPoint = this.state.prevNodesPoint.slice() //if you are dragging an icon, this is the previous spot it was in
    if(!this.state.dragStart && !this.state.dragEnd && !this.state.dragWayPoint){ //if mouse dragged in empty square or maze wall
      if(squares[i][j] !== 3 && squares[i][j] !== 4 && squares[i][j] !== 8){
        squares[i][j] = (squares[i][j] === 1) ? 0 : 1;
        //console.log("X,Y coordinates: ", i," ",j);
        this.setState({
          squares: squares,
        });
      }
    }
    else if(this.state.dragStart && !this.state.dragEnd && !this.state.dragWayPoint){
      if(squares[i][j] !== 4 && squares[i][j] !== 8){ //if mouse is dragging start
        let arr = [i,j,squares[i][j]];
        squares[i][j] = 3; //set new start point
        squares[yStart][xStart] = 0; //set old start point to zero
        this.setState({
          squares: squares,
          startY: i,
          startX: j,
          prevNodesPoint: arr,
          });

        if(algorithmRunning){//udpate the searchSpace and optimal path found when start,waypoint, or end is dragged and moved
          this.handleClearPathClick(algorithmRunning);
          if(isWayPointAdded){
            this.aStarAlgorithm(squares, i, j, wayPointY, wayPointX, 0); //parameter Algochoice changes subfunction to Dijikstra's Algorithm. cost = pathCost instead of cost= distance from goal + pathCost
            i = wayPointY;
            j = wayPointX;
            }
          this.aStarAlgorithm(squares, i, j, endY, endX, 0); //parameter Algochoice changes subfunction to Dijikstra's Algorithm. cost = pathCost instead of cost= distance from goal + pathCost
          }
        }
      }
      else if(!this.state.dragStart && this.state.dragEnd && !this.state.dragWayPoint){
        if(squares[i][j] != 3 && squares[i][j] !== 8){ //if mouse is dragging end point
          let arr = [i,j,squares[i][j]];
          squares[i][j] = 4; //set new ending point
          squares[endY][endX] = 0; //set old ending point back to zero
          this.setState({
            squares: squares,
            endY: i,
            endX: j,
            prevNodesPoint: arr,
            });

            if(algorithmRunning){//udpate the searchSpace and optimal path found when start,waypoint, or end is dragged and moved
              this.handleClearPathClick(algorithmRunning);
              if(isWayPointAdded){
                this.aStarAlgorithm(squares, yStart, xStart, wayPointY, wayPointX, 0); //parameter Algochoice changes subfunction to Dijikstra's Algorithm. cost = pathCost instead of cost= distance from goal + pathCost
                yStart = wayPointY;
                xStart = wayPointX;
                }
              this.aStarAlgorithm(squares, yStart, xStart, i, j, 0); //parameter Algochoice changes subfunction to Dijikstra's Algorithm. cost = pathCost instead of cost= distance from goal + pathCost
              }
        }
      }
      else if(!this.state.dragStart && !this.state.dragEnd && this.state.dragWayPoint){
        if(squares[i][j] != 3 && squares[i][j] !== 4){
          let arr = [i,j,squares[i][j]];
          squares[i][j] = 8; //set new waypoint
          squares[wayPointY][wayPointX] = 0; //set old ending point back to zero
          this.setState({
            squares: squares,
            wayPointY: i,
            wayPointX: j,
            prevNodesPoint: arr,
            });

            if(algorithmRunning){ //udpate the searchSpace and optimal path found when start,waypoint, or end is dragged and moved
              this.handleClearPathClick(algorithmRunning);
              if(isWayPointAdded){
                this.aStarAlgorithm(squares, yStart, xStart, i, j, 0); //parameter Algochoice changes subfunction to Dijikstra's Algorithm. cost = pathCost instead of cost= distance from goal + pathCost
                //yStart = wayPointY;
                //xStart = wayPointX;
                }
              this.aStarAlgorithm(squares, i, j, endY, endX, 0); //parameter Algochoice changes subfunction to Dijikstra's Algorithm. cost = pathCost instead of cost= distance from goal + pathCost
              }
        }
      }
      if(prevNodesPoint.length !== 0){
        squares[prevNodesPoint[0]][prevNodesPoint[1]] = prevNodesPoint[2]; //reset the previous place the icon was at to the value it was originally. I.E empty square or maze wall, or fire icon, etc
        this.setState({squares:squares});
      }

  }
  handleAlgorithmClick(i){
    let algoChoice = this.state.algoChoice;
    switch(i){
      case "A* Search":
        algoChoice = "A*";
        break;

      case "Dijikstra's Algorithm":
        algoChoice = "Dijikstra's";
        break;

      case "Greedy Best-first Search":
        algoChoice = "Greedy";
        break;

      case "Swarm Algorithm":
        algoChoice = "Swarm";
        break;

      case "Convergent Swarm Algorithm":
        algoChoice = "Convergent Swarm";
        break;

      case "Bidirectional Swarm Algorithm":
      algoChoice = "Bidirectional Swarm";
      break;

      case "Breadth-first Search":
      algoChoice = "BFS";
      break;

      case "Depth-first Search":
      algoChoice = "DFS";
      break;
    }
    this.setState({
      algoChoice: algoChoice,
    });



  }
  handleMazes_PatternsClick(i){
    let squares = this.state.squares.slice();
    const width = this.state.width;
    const height = this.state.height;
    var orientation = false;
    this.setState({algorithmRunning: false});
    //let mazeChoice = ""
    for(let x = 0; x < height; x++){
      for(let i = 0; i < width; i++){
      squares[x][i] = 0; //Reset the maze to be empty before calling recursiveDivision function
    }
  }
    switch(i){
      case "Recursive Division":
      this.createMazeBorder(width);
      squares = this.state.squares.slice();

        orientation = false;
        this.recursiveDivision(squares,0,0,width,height,orientation,0,0);

        //mazeChoice = "Recursive Division";
        break;

      case "Recursive Division (vertical skew)":
        this.createMazeBorder(width);
        squares = this.state.squares.slice();
        this.recursiveDivisionVertSkew(squares,0,0,width,height,orientation,0);

        //mazeChoice = "Recursive Division (vertical skew)";
        break;

      case "Recursive Division (horizontal skew)":
        this.createMazeBorder(width);
        squares = this.state.squares.slice();
        this.recursiveDivisionHorizSkew(squares,0,0,width,height,orientation,0);

        //mazeChoice = "Recursive Division (horizontal skew)";
        break;

      case "Basic Random Maze":
        this.createMazeBorder(width);
        squares = this.state.squares.slice();
        this.basicRandMaze(squares,width,height);
        //mazeChoice = "Basic Random Maze";
        break;

      case "Basic Weight Maze":
        this.createMazeBorder(width);
        squares = this.state.squares.slice();
        this.basicWeightMaze(squares,width,height);
        //mazeChoice = "Basic Weight Maze";
        break;

      case "Simple Stair Pattern":
      this.createMazeBorder(width);
      squares = this.state.squares.slice();
      this.simpleStairPattern(squares, width,height);
      //mazeChoice = "Simple Stair Pattern";
      break;
      case "Create Border":
      this.createMazeBorder(width);
      break;

  }
}
  handleAddBombClick(){
    let squares = this.state.squares.slice();
    let wayPointX = this.state.wayPointX;
    let wayPointY = this.state.wayPointY;
    let wayPointAdded = true;
    squares[wayPointY][wayPointX] = 8;
    this.setState({
      squares:squares,
      wayPointAdded: wayPointAdded
    });
  }
  visualizeAlgorithmsAnimation(grid,optimalPath, searchSpace, val, count){
    //let count = 0;
    let currentX;
    let currentY;
    let coords = [];
    const algorithmRunning = this.state.algorithmRunning;
    const width = this.state.width;
    const height = this.state.height;
    const speed = this.state.speed;
    const squares = this.state.squares.slice();
    this.setState({
      spaceSearched: searchSpace,
      optimalPath: optimalPath
      });

    for(let i = 1; i < searchSpace.length; i++){
      currentY = searchSpace[i][0];
      currentX = searchSpace[i][1];
      count += 1;
      if(algorithmRunning){
        if(grid[currentY][currentX] !== 7){
        grid[currentY][currentX] = val; //set search space all at one time
        }
      }
      else{
        setTimeout(this.timeoutTrigger.bind(this), speed * count,grid,currentX,currentY,val); //delay css animation
      } //val is 6 i.e space searched

    }
    val = 7; //Val is 7 for highlighting optimal path found

    if(optimalPath !== 0){
      let i = (this.state.wayPointAdded) ? 0 : 1; //if middle point added start optimal path from very beginning, else start offset by 1
      //this.setState({optimalPath: optimalPath});
      val = 7; //Val is 7 for highlighting optimal path found
      for(i; i < optimalPath.length - 1; i++){
        coords = getX_Y(optimalPath[i],width,height);
        count += 1;
        currentY = coords[0];
        currentX = coords[1];
        if(algorithmRunning){

          grid[currentY][currentX] = val; //set path all at one time
        }
        else{
        setTimeout(this.timeoutTrigger.bind(this), speed * count,grid,currentX,currentY,val); //delay css animation
        }
      }
    if(algorithmRunning){
      this.setState({squares: grid});
      }

    return count;
    }
  }
  aStarAlgorithm(grid,startY,startX,endY, endX, count){
    const algoChoice = this.state.algoChoice;
    const speed = this.state.speed;
    let width = this.state.width;
    let height = this.state.height;
    let wayPointX = this.state.wayPointX;
    let wayPointY = this.state.wayPointY;
    let wayPointAdded = this.state.wayPointAdded;
    const algorithmRunning = this.state.algorithmRunning;
    let tempEndX = endX;
    let tempEndY = endY;
    let currentX = startX; //current node x coord to be explored
    let currentY = startY; //current node y coord to be explored
    let pathCost = 1; //number of nodes traversed
    let minCost = 999999; // set to high minimum cost
    let costNorth = 0, costEast = 0, costSouth = 0, costWest = 0;
    let visitedNodes = new Map([]); //if node has been visited
    let expandNodes = new Map([]); // key will be cost of node, when collisions add to end of array at that key, value will be key of visitedNodes
    let tempCost = Math.abs(endY - startY) + Math.abs(endX - startX); //Heuristic + 0, where 0 is cost of path
    let expandNodesCost = [tempCost]; //expandNodesCost.sort(compare()); A list of of all nodes costs sorted
    let foundGoal = false;
    let moreNodesToExpand = true;
    let tempKey = getKey(startY,startX,width,height);// Parameters: row, column, width, height
    let tempPath = [tempKey]; //list of nodes that form a path
    let fireCost = 0;
    let tempValue = [tempCost,tempPath,fireCost]
    let currentValue = [tempCost,tempPath];
    let goalKey = getKey(endY,endX,width,height); // where the goal is located
    visitedNodes.set(tempKey,tempValue);
    let returnCurrentCoords = [];
    let listOfKeys = [tempKey];
    expandNodes.set(tempCost,listOfKeys); //set key to be the cost, and the value to be the key of the next node to be deciphered. Use key to get X, Y coords.
    let smallestCost = 9999;
    let val = 6;
    let optimalPath = []; //Optimal path to destination
    let coords = []; //coords in optimal path
    let searchSpace = [];
    let totalOptimalPath = [];
    let pastWayPoint = (wayPointAdded) ? false: true; //if made it past way point
    let fireIcon = false;
    var iterateExpandNodes = [];
    var space = new Map();
    while(!foundGoal && moreNodesToExpand){
      fireIcon = false;
      //Here we choose which node to expand
      //console.log("Array: ", expandNodesCost);
      if(algoChoice === "DFS" ){
        smallestCost = expandNodesCost.pop(); //simultaneously removes and returns the last index of the array for Depth First Search

      }
      else{
        smallestCost = expandNodesCost.shift(); //simultaneously removes and returns the first index of the array
      }

      listOfKeys = expandNodes.get(smallestCost);// get nodes with the smallest cost
      tempKey = listOfKeys.shift();
      if(space.has(tempKey)){
        continue; //if the value has been visited already go ahead and skip it
      }
      else{
        space.set(tempKey,0); //add the key to visited list
      }
      returnCurrentCoords = getX_Y(tempKey,width,height);
      currentY = returnCurrentCoords[0];
      currentX = returnCurrentCoords[1];
      searchSpace.push(returnCurrentCoords.slice()); //list of space searched

      currentValue = visitedNodes.get(tempKey).slice(); // return the current cost and value

      pathCost = currentValue[1].length + (currentValue[2] * 14); // If there are fire icons the cost is added
      //pathCost = currentValue[0];
      //console.log("Path cost: ", pathCost);
      //console.log("Fire cost: ", currentValue[2]);
      if((currentX + 1 === endX && currentY === endY) ||(currentX - 1 === endX && currentY === endY) || (currentX === endX && currentY - 1 === endY) || (currentX === endX && currentY + 1 === endY)){

          foundGoal = true;
          optimalPath = visitedNodes.get(tempKey).slice();
          optimalPath[1].push(goalKey);
          if(wayPointAdded){
            optimalPath[1].shift(); //remove the start index from the optimal path, so it does not become obscured by css animations and colors
          }
          totalOptimalPath.push.apply(totalOptimalPath,optimalPath[1]);

      }


      if(currentX + 1 < width && (grid[currentY][currentX + 1] === 0 || grid[currentY][currentX + 1] === 2 || grid[currentY][currentX + 1] === 7 || (algorithmRunning && grid[currentY][currentX + 1] === 6) ) ) {
        /*TURN EVERYTHING INSIDE THIS IF/ELSE STATEMENT INTO A FUNCTION.*/
        if(grid[currentY][currentX + 1] === 2){
          pathCost += 14;
          fireIcon = true;
        }
        else{
          fireIcon = false;
        }
        frontierNodes(currentY,currentX,endY,endX,pathCost,width,height,tempKey,visitedNodes,foundGoal,tempValue,currentValue,expandNodesCost,expandNodes,1,0,algoChoice,startY,startX,fireIcon);
      }
      if(currentX - 1 >= 0 && (grid[currentY][currentX - 1] === 0 || grid[currentY][currentX - 1] === 2  || grid[currentY][currentX - 1] === 7  || (algorithmRunning && grid[currentY][currentX - 1] === 6))){
        if(grid[currentY][currentX - 1] === 2){
          pathCost += 14;
          fireIcon = true;
        }
        else{
          fireIcon = false;
        }
        frontierNodes(currentY,currentX,endY,endX,pathCost,width,height,tempKey,visitedNodes,foundGoal,tempValue,currentValue,expandNodesCost,expandNodes,-1,0,algoChoice,startY,startX,fireIcon);
      }
      if(currentY - 1 >= 0 && (grid[currentY - 1][currentX] === 0 || grid[currentY - 1][currentX] === 2 || grid[currentY - 1][currentX] === 7 || (algorithmRunning && grid[currentY - 1][currentX] === 6))){
        if(grid[currentY - 1][currentX] === 2){
          pathCost += 14;
          fireIcon = true;
        }
        else{
          fireIcon = false;
        }
        frontierNodes(currentY,currentX,endY,endX,pathCost,width,height,tempKey,visitedNodes,foundGoal,tempValue,currentValue,expandNodesCost,expandNodes,0,-1,algoChoice,startY,startX,fireIcon);
      }
      if(currentY + 1 < height && (grid[currentY + 1][currentX] === 0 || grid[currentY + 1][currentX] === 2 || grid[currentY + 1][currentX] === 7 || (algorithmRunning && grid[currentY + 1][currentX] === 6))){
        if(grid[currentY + 1][currentX] === 2){
          pathCost += 14;
          fireIcon = true;
        }
        else{
          fireIcon = false;
        }
        frontierNodes(currentY,currentX,endY,endX,pathCost,width,height,tempKey,visitedNodes,foundGoal,tempValue,currentValue,expandNodesCost,expandNodes,0,1,algoChoice,startY,startX,fireIcon);
      }

      //At the end remove currentX and currentY from expandNodes, expandNodesCost. Update foundGoal and mroeNodesToExpand booleans.
      tempKey = getKey(currentY,currentX, width, height);
      tempValue = visitedNodes.get(tempKey).slice();

      moreNodesToExpand = (expandNodesCost.length === 0) ? false: true; //if list is empty then the algorithm has searched everything

    }

  if(foundGoal){
    count = this.visualizeAlgorithmsAnimation(grid,totalOptimalPath,searchSpace, 6, count); //6 is for settting the search space squares to blue
  } else{
    count = this.visualizeAlgorithmsAnimation(grid,0, searchSpace, 6, count); //No path to goal is found, so optimalPath is equal to zero
  }
  return count;
}
  handleVisualizeAlgorithmClick(){
    let startY = this.state.startY;
    let startX = this.state.startX;
    let endY = this.state.endY;
    let endX = this.state.endX;
    let wayPointX = this.state.wayPointX;
    let wayPointY = this.state.wayPointY;
    let wayPointAdded = this.state.wayPointAdded;
    let algoChoice = this.state.algoChoice;
    let grid = this.state.squares.slice();
    let count = 0;

    switch(algoChoice){
      case "A*":
        if(wayPointAdded){
        count = this.aStarAlgorithm(grid, startY, startX, wayPointY, wayPointX, count); //parameter Algochoice changes subfunction to Dijikstra's Algorithm. cost = pathCost instead of cost= distance from goal + pathCost
        startY = wayPointY;
        startX = wayPointX;
      }
        this.aStarAlgorithm(grid, startY, startX, endY, endX, count); //parameter Algochoice changes subfunction to Dijikstra's Algorithm. cost = pathCost instead of cost= distance from goal + pathCost
        break;

      case "Dijikstra's":
        if(wayPointAdded){
          count = this.aStarAlgorithm(grid, startY, startX, wayPointY, wayPointX, count);
          startY = wayPointY;
          startX = wayPointX;
        }
        this.aStarAlgorithm(grid, startY, startX, endY, endX, count); //parameter Algochoice changes subfunction to Dijikstra's Algorithm. cost = pathCost instead of cost= distance from goal + pathCost
        break;

      case "Greedy":
        if(wayPointAdded){
          count = this.aStarAlgorithm(grid, startY, startX, wayPointY, wayPointX, count);
          startY = wayPointY;
          startX = wayPointX;
        }
        this.aStarAlgorithm(grid, startY, startX, endY, endX, count); //parameter Algochoice changes subfunction to Greedy Best Algorithm. cost = distance from goal
        break;

      case "Swarm":

        break;

      case "Convergent Swarm":

        break;

      case "Bidirectional Swarm":

      break;

      case "BFS":
        if(wayPointAdded){
          count = this.aStarAlgorithm(grid, startY, startX, wayPointY, wayPointX, count);
          startY = wayPointY;
          startX = wayPointX;
        }
        this.aStarAlgorithm(grid, startY, startX, endY, endX, count); //parameter Algochoice changes subfunction to BFS. Cost Function is always zero.
      break;

      case "DFS":
        if(wayPointAdded){
          count = this.aStarAlgorithm(grid, startY, startX, wayPointY, wayPointX, count);
          startY = wayPointY;
          startX = wayPointX;
        }
        this.aStarAlgorithm(grid, startY, startX, endY, endX, count); //parameter Algochoice changes subfunction to BFS. Cost Function is always zero.
      break;
    }
    this.setState({algorithmRunning: true});
  }
  handleClearBoardClick(){
    const width = this.state.width;
    const height = this.state.height;
    const startX = this.state.defaultStartX;
    const startY = this.state.defaultStartY;
    const endX = this.state.defaultEndX;
    const endY = this.state.defaultEndY;
    const wayPointX = this.state.defaultWayPointX;
    const wayPointY = this.state.defaultWayPointY;
    let x = Array(height).fill(null);
    for(let i = 0; i < height; i++){
      x[i] = Array(width).fill(0);
    }
    x[startY][startX] = 3;
    x[endY][endX] = 4;
    this.setState({
      squares: x,
      startY: startY,
      startX: startX,
      endY: endY,
      endX: endX,
      wayPointX: wayPointX,
      wayPointY: wayPointY,
      wayPointAdded: false,
      algorithmRunning: false
    });
  }
  handleClearWalls_WeightsClick(){
    const width = this.state.width;
    const height = this.state.height;
    const startX = this.state.startX;
    const startY = this.state.startY;
    const endX = this.state.endX;
    const endY = this.state.endY;
    const wayPointY = this.state.wayPointY;
    const wayPointX = this.state.wayPointX;
    let x = Array(height).fill(null);
    for(let i = 0; i < height; i++){ //initiliaze an empty array
      x[i] = Array(width).fill(0);
    }
    if(this.state.wayPointAdded){
      x[wayPointY][wayPointX] = 8;
    }
    x[startY][startX] = 3;
    x[endY][endX] = 4;
    this.setState({
      squares: x,
      algorithmRunning: false
    });
  }
  handleClearPathClick(isAlgorithmRunning){
    //let spaceSearched = this.state.spaceSearched.slice();
  //  let optimalPath = this.state.optimalPath.slice();
    let grid = this.state.squares.slice();
    let startY = this.state.startY;
    let startX = this.state.startX;
    let endY = this.state.endY;
    let endX = this.state.endX;
    const width = this.state.width;
    const height = this.state.height;
    for(let i = 0; i < height; i++){
      for(let j = 0; j < width; j++){
        if(grid[i][j] === 6 || grid[i][j] === 7){
            grid[i][j] = 0; //reset search routes and path to empty squares
            }
          }
        }

    grid[startY][startX] = 3;
    grid[endY][endX] = 4;
    this.setState({
      squares: grid,
    });
    if(!isAlgorithmRunning){
      this.setState({algorithmRunning: false})
    }

  }
  handleSpeedClick(i){
    let speed = this.state.speed;
    let speedName = this.state.speedName;
    if(i === "Fast"){
      speed = 25;
      speedName = "Fast";
    }
    if(i === "Average"){
      speed = 50;
      speedName = "Average";
    }
    if(i === "Slow"){
      speed = 100;
      speedName = "Slow";
    }
    this.setState({
      speed: speed,
      speedName: speedName,
    });
  }


  render() {
    const squares = this.state.squares;
    const algoChoice = this.state.algoChoice;
    const width = this.state.width;
    const height = this.state.height;
    const speedName = this.state.speedName;
    return (


        <div>
        <ul>
          <h4 className ="title">Pathfinding Visualizer</h4>
          <Algorithms
            onClick = {this.handleAlgorithmClick}
            />
          <Mazes_Patterns
            onClick = {this.handleMazes_PatternsClick}/>
          <Bombs
            onClick = {this.handleAddBombClick}/>
          <VisualizeAlgorithm
            onClick = {this.handleVisualizeAlgorithmClick}
            algoChoice = {algoChoice}/>
          <ClearBoard
            onClick = {this.handleClearBoardClick}/>
          <ClearWalls_Weights
            onClick = {this.handleClearWalls_WeightsClick}/>
          <ClearPath
            onClick = {this.handleClearPathClick}/>
          <SpeedOfAlgorithm
            speedName = {speedName}
            onClick = {this.handleSpeedClick}/>
          <Tutorial/>
        </ul>
          <div>

            <div className = "flex-container">
            <div >Starting Point <FontAwesomeIcon className = "leftPadding fa-2x blackIcon"icon={faRocket} /> </div>
            <div>Waypoint  <FontAwesomeIcon className = "leftPadding fa-2x greenMoney"icon={faMoneyBill} /> </div>
            <div>Destination  <FontAwesomeIcon className = "leftPadding fa-2x blackIcon"icon={faGlobeAmericas} /> </div>
            <div>Maze wall<div className = "blueVis visualSquare"></div></div>
            <div>Space Searched<div className = "searchVis visualSquare"></div></div>
            <div>Path to destination <div className = "orangeVis visualSquare"></div></div>
            <div>+15 Path cost<FontAwesomeIcon  className = "leftPadding iconsFire fa-2x" icon={faFire} /></div>
            </div>

            </div>
          <div className = "fill-height" onMouseDown = {this.handleMouseDown} onMouseUp = {this.handleMouseUp}>
          <Board
            width = {width}
            height = {height}
            squares = {squares}
            onClick = {this.handleClick}
            onMouseEnter = {this.handleMouseEnter}
            onMouseDown = {this.handleMouseDownSquare}
          />
          </div>
        </div>

    );
  }
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
function compare(a, b) {
  return a > b ? 1 : b > a ? -1 : 0; //sort in ascending order
}
function getKey(row,column,width,height){
  let key = (row * width) + column;
  return key;
}
function getX_Y(key,width,height){
  let tempY = 0;
  let tempX = 0;
  tempY = Math.floor(key / width); //gives the column
  tempX = key % width;
  let coords = [tempY,tempX];
  return coords;

}
function binaryInsert(x, array) {
  if(array.length === 0){
    array.push(x);
    return;
  }
var l = 0,
r = array.length - 1,
m;
while (l <= r) {
m = (l + r) / 2 | 0;
if (array[m] > x) {
r = m - 1;
continue;
}
l = m + 1;
if (array[m] === x) {
break; // replace with return if no duplicates are desired
}
}
array.splice(l, 0, x);
}

function frontierNodes(currentY,currentX,endY,endX,pathCost,width,height,tempKey,visitedNodes,foundGoal,tempValue,currentValue,expandNodesCost,expandNodes,xFlag,yFlag,algoChoice,startY,startX,fireIcon){
  //let costEast = (Math.abs(endY - currentY + yFlag)) + (Math.abs(endX - currentX + xFlag)) + pathCost; //Current straight line distance of the node from the goal node plus the number of nodes traversed to get to the current node i.e +1
  let yVal = endY - (currentY + yFlag);
  let xVal = endX - (currentX + xFlag);
  let costEast = Math.abs(xVal) + Math.abs(yVal);
  if(algoChoice === "A*"){
  costEast += pathCost; //choice for A* Algorithm
  //console.log(pathCost);
}
else if(algoChoice === "Dijikstra's" || algoChoice === "DFS" ){
  costEast = pathCost; //choice for dijikstra's Algorithm
}
else if(algoChoice === "Greedy"){
  costEast = costEast; //choice for Greedy. setting it equal to itself is redundant, but is there to illustrate the heuristic choice.
}
else if(algoChoice === "BFS"){
  yVal = startY - (currentY + yFlag);
  xVal = startX - (currentX + xFlag);
  costEast = Math.abs(xVal) + Math.abs(yVal);
}
  tempKey = getKey((currentY + yFlag), (currentX + xFlag), width, height);
  if(visitedNodes.has(tempKey)){ //check to see if it is in visited nodes already
      let oldCost_Path = visitedNodes.get(tempKey).slice(); //get the old cost and path to that node, only update the cost and path if new cost and path is cheaper
      if(oldCost_Path[0] > costEast && (algoChoice === "A*" || algoChoice === "Dijikstra's")){
        //First update expandNodesCost Array
      //  for(let i = 0; i < expandNodesCost.length; i++){
      //    if(expandNodesCost[i] === oldCost_Path[0]){
        //    expandNodesCost.splice(i,1); //remove the old cost from list of costs
        //    break; //break from the for loop
        //  }
      //  }
        binaryInsert(costEast,expandNodesCost); //insert new cost sorted into list of costs. DO Not update this.

        //Second update expandNode Map(costOfNode,[list of keys])
        //first remove old Node from expandNodes
        let listOfKeys = expandNodes.get(oldCost_Path[0]).slice();
        for(let i = 0; i < listOfKeys.length; i++){
          if(listOfKeys[i] === tempKey){
            listOfKeys.splice(i,1); //remove the element from the array
            break; //exit the for loop
          }
        }
        //update expandNodes
        if(expandNodes.has(costEast)){
        listOfKeys = expandNodes.get(costEast).slice(); //get the listOfkeys for that cost.
        listOfKeys.unshift(tempKey); //insert the key into the front of the list.
        expandNodes.set(costEast, listOfKeys.slice()); //insert the new updated list back into the map
          }
          else{
            let tempArr = [tempKey];
            expandNodes.set(costEast, tempArr.slice());
          }
        //update vistedNodes
        let oldTempKey = getKey(currentY, currentX, width, height);
        let oldVisitedValues = visitedNodes.get(oldTempKey).slice();
        let newVisitedValues = [];
        newVisitedValues.push(costEast); //update with the new cost
        let temp = (Array.isArray(oldVisitedValues[1])) ? oldVisitedValues[1].slice() : [oldVisitedValues[1]]; //if it is an array get a deep copy of it, else make it an array, path list
        temp.push(tempKey);
        newVisitedValues.push(temp.slice()); //add a deep copy of the array into the new array
        newVisitedValues.push(oldVisitedValues[2]); //add in fire path costs
          if(fireIcon){
            newVisitedValues[2] += 1;
          }
        visitedNodes.set(tempKey,newVisitedValues.slice());
      }
  }
  else{ //add node to visited list, add node to expandNodes aray and expandNodesCost map.
    tempKey = getKey(currentY,currentX,width,height);
    tempValue = visitedNodes.get(tempKey).slice();
    let valPassed = [costEast]; //create value to be passed into visitedNodes map
    let temp1 = (Array.isArray(tempValue[1])) ? tempValue[1].slice() : [tempValue[1]];
    valPassed.push(temp1);
    if(fireIcon){
      tempValue[2] += 1;
    }
    valPassed.push(tempValue[2]);
    //currentValue[1] = tempValue[1].slice();

    tempKey = getKey(currentY + yFlag, currentX + xFlag, width, height);
    valPassed[1].push(tempKey);
    visitedNodes.set(tempKey,valPassed.slice());
    binaryInsert(costEast,expandNodesCost); //sort the array with the added element
  //  expandNodesCost.push(costEast);
    //console.log("list of cost of each node: ",expandNodesCost);
    //console.log(expandNodesCost);
    if(expandNodes.has(costEast)){ //if there is already node with the same cost, add that node to the end of values array.
      tempValue = expandNodes.get(costEast).slice();
      tempValue.unshift(tempKey); //add to the front of the list
      //tempValue.push(tempKey); //add to the end of the list
      expandNodes.set(costEast,tempValue.slice());
    }
    else{
      tempValue = [tempKey];
      expandNodes.set(costEast,tempValue.slice());
    }
  }
}
