import React, { useEffect } from "react";
import { View, Text, TouchableOpacity } from 'react-native'
import { Camera, useCameraDevices } from 'react-native-vision-camera'
import { useRef } from "react";
import { useIsFocused } from '@react-navigation/native';

const ScanScreen = ({ navigation }) => {

    const camera = useRef(null)
    const devices = useCameraDevices()
    const device = devices.back!
    const isFocused = useIsFocused()

    const cameraProps = 
    {
        style : {height: 300},
        device : device,
        photo: true
    }
    const getPermission = async () => {

        var cameraPermission = await Camera.getCameraPermissionStatus()
    
        if (cameraPermission != 'authorized') {
          cameraPermission = await Camera.requestCameraPermission()
        }
      }

    useEffect(() => {
        getPermission()

        // return () => {
        //   cameraActive = false;
        // }
    },[])

    const takePhoto = async () => {
      // const photo = await camera.current.takeSnapshot()
        navigation.navigate('Details',{ name: 'pic1'})
    }

     if (device == null) return (<View><Text>No camera available</Text></View>)
  return (
    <View style={{ flex: 1 }}>
        <View style={{height:300}}>
      <Camera
        {...cameraProps}
        isActive={isFocused}
        ref={camera}
      />
      </View>
      <View>
        <TouchableOpacity
          onPress={takePhoto}
        >
          <Text>Take photo</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}


export default ScanScreen;