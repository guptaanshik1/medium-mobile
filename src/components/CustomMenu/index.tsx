import {
  ScrollView,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React, {PropsWithChildren, useState} from 'react';
import {TCustomMenuProps} from '../../utils/data';

interface IProps {
  isOpen: boolean;
  onClose: () => void;
}

const CustomMenu = ({
  isOpen,
  onClose,
  children,
  ...props
}: IProps & PropsWithChildren) => {
  const [isVisible, setIsVisible] = useState(isOpen);

  const handleOutsidePress = () => {
    if (isVisible) {
      setIsVisible(false);
      onClose();
    }
  };

  return isVisible ? (
    <TouchableWithoutFeedback onPress={handleOutsidePress}>
      <View style={styles.overlay} {...props}>
        <ScrollView style={styles.menuContainer}>{children}</ScrollView>
      </View>
    </TouchableWithoutFeedback>
  ) : null;
};

export default CustomMenu;

const styles = StyleSheet.create({
  menuContainer: {
    maxHeight: 400,
    display: 'flex',
    backgroundColor: '#FFFFFF',
    padding: 24,
    borderRadius: 10,
  },
  overlay: {
    flex: 1,
    position: 'absolute',
    right: 0,
    zIndex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
