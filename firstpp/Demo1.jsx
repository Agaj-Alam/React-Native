import Demo2 from './Demo2';
const { View, Text } = require('react-native');

const Demo1 = props => {
  return (
    <View>
      <Text>{props.firstName}</Text>
      <Text>{props.secondName}</Text>
      <Demo2 inDemo="demo me"/>
    </View>
  );
};
export default Demo1;
