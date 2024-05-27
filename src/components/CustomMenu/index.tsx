import {StyleSheet, ViewStyle} from 'react-native';
import React, {ReactNode, useState} from 'react';
import {TCustomMenuProps} from '../../utils/data';
import {Button, Menu} from 'react-native-paper';

interface IProps {
  actionable: ReactNode;
  menuData: TCustomMenuProps;
  styles: ViewStyle;
}

const CustomMenu = ({actionable, menuData, styles}: IProps) => {
  const [isVisible, setIsVisible] = useState(false);

  const openMenu = () => {
    setIsVisible(true);
  };

  const closeMenu = () => {
    setIsVisible(false);
  };

  return (
    <Menu
      contentStyle={styles}
      visible={isVisible}
      onDismiss={closeMenu}
      anchor={
        <Button style={{padding: 0, margin: 0}} onPress={openMenu}>
          {actionable}
        </Button>
      }>
      {menuData?.map(item => (
        <Menu.Item key={item?.value} title={item?.label} />
      ))}
    </Menu>
  );
};

export default CustomMenu;

const styles = StyleSheet.create({});
