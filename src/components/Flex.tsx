import {View} from 'react-native';
import React, {PropsWithChildren} from 'react';

const Flex = ({children, ...props}: PropsWithChildren & any) => {
  return (
    <View {...props} style={{display: 'flex', ...props.style}}>
      {children}
    </View>
  );
};

export default Flex;
