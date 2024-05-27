import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CustomMenu from '../../../components/CustomMenu';
import {menuConfig} from '../utils/config/menuConfig';

interface IProps {
  isOpen: boolean;
  onClose: () => void;
}

const ArticleCardMenu = ({isOpen, onClose}: IProps) => {
  return (
    <CustomMenu isOpen={isOpen} onClose={onClose}>
      <View style={styles.menuDataContainer}>
        {menuConfig.map(item => (
          <Text style={styles.menuItem} key={item?.value}>
            {item?.label}
          </Text>
        ))}
      </View>
    </CustomMenu>
  );
};

export default ArticleCardMenu;

const styles = StyleSheet.create({
  menuDataContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuItem: {},
});
