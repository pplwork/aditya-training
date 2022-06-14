import React from "react";
import {View, Text} from 'react-native';

const NewStory: React.FC = (): JSX.Element => {
  return (
    <View>
      <Text>NewStory</Text>
    </View>
  )
}

export default React.memo(NewStory);