const { View, Text } = require('react-native');

const Demo1 = props => {
  return (
    <View>
      <Text>{props.firstName}</Text>
      <Text>{props.secondName}</Text>
    </View>
  );
};
export default Demo1;
