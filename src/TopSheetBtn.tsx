import React from 'react';
import { StyleSheet, Pressable, View } from 'react-native';

interface TopSheetBtnProps {
    toggleHeight: () => void;
}

const TopSheetBtn: React.FC<TopSheetBtnProps> = ({toggleHeight}) => {
  return (
    <Pressable style = {styles.topSheetBtn} onPress={toggleHeight}>
        <View style = {styles.btnIcon}></View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
    topSheetBtn:{
        zIndex: 100,
        position: 'absolute',
        alignSelf: 'center',
        width : '95%',
        height : 20,
        bottom: 0,
        justifyContent :'center',
    },
    btnIcon:{
        width: 50,
        height: 5,
        backgroundColor: 'black',
        borderRadius: 10,
        alignSelf: 'center',
    }
 });
export default TopSheetBtn;