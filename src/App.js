import React from 'react';

const NUM_BOXES = 28;
const Box = ({color}) => {
  const style = {
    width: '180px',
    height: '180px',
    display: 'inline-block',
    backgroundColor: color,
  }
  return <div style={style}/>;
}
export default class App extends React.Component {
  constructor(props) {
    super(props);
    const boxes = Array(NUM_BOXES).fill().map(this.getRandomColor, this);
    this.state = {boxes};
    setInterval(() => {
      //make a copy of the state
      const boxes = this.state.boxes.slice();
      const randIndex = Math.floor(Math.random() * boxes.length);
      boxes[randIndex] = this.getRandomColor();
      this.setState({boxes})
    }, 300);

  }
  //function to get a random color
  getRandomColor() {
    let colorIndex = Math.floor(Math.random() * this.props.allColors.length);
    return this.props.allColors[colorIndex];
  }
  render() {
    const boxes = this.state.boxes.map((color, index) => (
      <Box key={index} color={color}/>
    ))
    return (
      <div className="App">
        {boxes}
      </div>
    );
  }
}

App.defaultProps = {
  allColors: ["red", "blue", "black", "green"]
}