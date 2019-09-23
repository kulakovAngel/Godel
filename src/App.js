import React from 'react';
import './App.css';
import Cell from './Cell';

class App extends React.Component {
  constructor(props) {
    super(props);
    let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
    arr = shuffle(arr);
    const line1 = arr.slice(0, 4);
    const line2 = arr.slice(4, 8);
    const line3 = arr.slice(8, 12);
    const line4 = arr.slice(12, 16);
    arr = [line1,line2,line3,line4];
    this.state = {
      arr: arr
    }
    this.onMove = this.onMove.bind(this);
  }
  
  onMove(value) {
    console.log('move: ' + value);
    let arr = this.state.arr;
    outer:
    for (let i=0; i<arr.length; i++) {
      for (let j=0; j<arr[i].length; j++) {
        if (arr[i][j] === value) {
          if ((typeof(arr[i-1])!=='undefined') &&
              (arr[i-1][j] === 16)) {
                let temp = arr[i-1][j];
                arr[i-1][j] = arr[i][j];
                arr[i][j] = temp;
                this.setState({arr: arr});
                break outer;
          }
          else if ((typeof(arr[i+1])!=='undefined') &&
                   (arr[i+1][j] === 16)) {
                let temp = arr[i+1][j];
                arr[i+1][j] = arr[i][j];
                arr[i][j] = temp;
                this.setState({arr: arr});
                break outer;
          }
          else if ((typeof(arr[j+1])!=='undefined') &&
                   (arr[i][j+1] === 16)) {
                let temp = arr[i][j+1];
                arr[i][j+1] = arr[i][j];
                arr[i][j] = temp;
                this.setState({arr: arr});
                break outer;
          }
          else if ((typeof(arr[j-1])!=='undefined') &&
                   (arr[i][j-1] === 16)) {
                let temp = arr[i][j-1];
                arr[i][j-1] = arr[i][j];
                arr[i][j] = temp;
                this.setState({arr: arr});
                break outer;
          }
        }
      }
      
    }
  }
  
  render() {
    let arr = this.state.arr;
    console.log(arr);
    return (
      <>
        {arr.map( item => (
          item.map( val => <Cell num={val} key={val} onMove={this.onMove}/>)
         )
        )}
      </>
    );
  }
}

function shuffle(arr){
	var j, temp;
	for(var i = arr.length - 1; i > 0; i--){
		j = Math.floor(Math.random()*(i + 1));
		temp = arr[j];
		arr[j] = arr[i];
		arr[i] = temp;
	}
	return arr;
}

export default App;