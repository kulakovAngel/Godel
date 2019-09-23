import React from 'react';

class Cell extends React.Component {
  constructor(props) {
    super(props);
    this.onTryMove = this.onTryMove.bind(this);
  }
  
  onTryMove() {
    if (this.props.num !== 16) {
      this.props.onMove(this.props.num);
    }
  }
  
  render() {
    return (
      <div onClick={this.onTryMove}
           className={(this.props.num !== 16) ? '' : 'empty'}>
           
           {(this.props.num !== 16) ? this.props.num : '+'}
      </div>
    );
  }
}

export default Cell;
