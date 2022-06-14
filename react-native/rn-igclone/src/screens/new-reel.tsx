import React from "react";
import {View, Text} from 'react-native';

const NewReel: React.FC = (): JSX.Element => {
  return (
    <View>
      <Text>NewReel</Text>
    </View>
  )
}

export default React.memo(NewReel);