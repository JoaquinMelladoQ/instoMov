import React, { PureComponent } from 'react';
import { Text, Button } from 'react-native';


export default class TestRender extends PureComponent {
  constructor(props) {
    super(props);
  
    this.state = {
      number: 0,
    }
  }

  /*
   *shouldComponentUpdate(nextProps, nextState) {
   *  const { number } = this.state
   *  const { number: newNumber } = nextState
   *  console.log({ nextState, number }); 
   *  
   *  if ( number !== newNumber ) {
   *    return true
   *  }
   *  return false
   *}
   */

  onChangeNumber = (number) => this.setState({ number })
  
  render() {
    const { number } = this.state
    console.log('render');
    return (
      <>
        <Text>{number}</Text>
        <Button onPress={() => this.onChangeNumber(1)}  title="Button1" />
        <Button onPress={() => this.onChangeNumber(2)}  title="Button2" color="orange" />
      </>
    );
  };
};
