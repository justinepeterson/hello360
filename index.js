import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} from 'react-360';



export default class Hello360 extends React.Component {
  
  // Our component will keep track of this state
state = {
  count: 0
};

// This method increments our count, triggering a re-render
_incrementCount = () => {
  this.setState({count: this.state.count + 1});
};

// Once the component mounts, run the increment method every second
componentDidMount() {
  setInterval(this._incrementCount, 1000);
}

render() {
  let time = new Date().toLocaleString();

  // Reference the count in our UI
  console.log(this.state.date)
  return (
    <View style={styles.panel}>
      <View style={styles.greetingBox}>
        <Text>Hello world!</Text>
        <Text style={styles.greeting}>
           {`Time is: ${time}`}
        </Text>
        <Text style={styles.greeting}>
           @justinelimtz
        </Text>
      </View>
    </View>
  );
}
};

const styles = StyleSheet.create({
  panel: {
    // Fill the entire surface
    width: 1000,
    height: 600,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  greetingBox: {
    padding: 20,
    backgroundColor: '#000000',
    borderColor: '#639dda',
    borderWidth: 2,
  },
  greeting: {
    fontSize: 30,
  },
});

AppRegistry.registerComponent('Hello360', () => Hello360);
