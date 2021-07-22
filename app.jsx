import React, { Component } from 'react';
import { render } from 'react-dom';

class App extends Component {
  constructor(){
    super();
  }
  render() {
    return (
      <div>
        <h1>See visit times</h1>
        <Websites />
      </div>
    );
  }
}

//check
class Websites extends Component {
  constructor() {
    super();
    this.state = {
      //state lists has to be array for for loop.
      objData = []
    };
  }

  componentDidMount() {
    // need to make a new object with key and value of website: visit numnber
    // the key and value need to save as object, and push to the array 
    // and set state with new array.
    newArr = [];
    // this.state.lists = [{fb: 2}, {utube: 3}] 
    for (const key in chrome.storage.local) {
      newArr.push({key: chrome.storage.local[key]})
    }
    this.setState({objData: newArr});
  }

  render () {    
    // if the visit number is added, we need to increase the statement. 
    // -> what event are we using? onchange? 
    // so if there is any visit number change or add new key and value, we can go to onchange.
    // and set statement with changes.

    chrome.storage.onChanged.addListener((e) => {
      newArr = [];
      // this.state.lists = [{fb: 2}, {utube: 3}] 
      for (const key in chrome.storage.local) {
        newArr.push({key: chrome.storage.local[key]})
      }
      this.setState({objData: newArr})
    })


    //get the existing arr from the state, and push the new obj, and set state with new array.

    const lists = [];
    for (let i = 0; i < this.state.objData.length; i++) {
      //{fb: 2}  keyArr[0]
      // keyArr = [fb]
      let keyArr = Object.Keys(this.state.objData[i]);
      let eachUrl = keyArr[0];
      let val = this.state.objData[i][eachUrl];
      // this.state.lists = [{fb: 2}, {utube: 3}]  // url = {fb: 2}
      lists.push(< List key={i} id={i} url={eachUrl} count={val} />)
    }

    return (
      <div className="websites">
        {lists}
      </div>
    )
  }
}

class List extends Component {
  render() {
    return(
      <div>
        <li>{this.props.url} <span> : </span> {this.props.count}</li>
      </div>
    )
  }
}

render(<App />, document.querySelector('#root'));

