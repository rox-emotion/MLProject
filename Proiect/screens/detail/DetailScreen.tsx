import React from "react";
import { useRef } from 'react'
import { SafeAreaView, View, Text, Button, TouchableOpacity, Image, ScrollView, Modal, Alert } from 'react-native';
import { useState, useEffect } from "react";
import Header from "../../components/header/Header";
import styles from "./DetailScreen.style";
import TrackPlayer, { useProgress } from 'react-native-track-player';
import { State } from 'react-native-track-player';
import MyPlayerBar from "../../components/player/Player";


const DetailsScreen = ({ navigation, route }) => {

    const [showModal, setShowModal] = useState(false)


    const createPlayer = async () => {

        await TrackPlayer.setupPlayer()

        const state = await TrackPlayer.getState();

        if (state === State.Playing) {
            console.log('The player is playing');
        };


    }

    const setupPlayer = async () => {
        var track = {
            url: require('./../../assets/audio/1.m4a')

        };
        await TrackPlayer.add([track]);

        TrackPlayer.play();

    }

    const getPos = async () => {
        console.log('pula n gura')
        const position = await TrackPlayer.getPosition();
        console.log(position)
    }

    const scrollRef = useRef();

    const pageName = route.params.name;
    console.log(pageName)


    const onPressTouch = () => {
        scrollRef.current?.scrollTo({
            y: 0,
            animated: true,
        });
    }

   

    useEffect(() => {
        createPlayer()
        const timer = setTimeout(() => {
            setShowModal(true)
        }, 5000)


    }, [])

    useEffect(() => {
        setupPlayer()
        return () => {
            TrackPlayer.pause();
        }
    })

    useEffect(() => {
        const timer = setTimeout(() => {
            console.log('CE AI FRA?')
            getPos
        }, 1000)
        return () => {
            clearTimeout(timer)
        }
    })
    return (
        <SafeAreaView>
            <ScrollView ref={scrollRef}>
                <Header hasBackArrow={true} />
                <View style={styles.container}>
                    <Image source={require('./../../assets/icons/placeholder.png')} style={{ height: 300, width: 300 }} />
                    <Text style={styles.title}>Full Name</Text>
                    <Text style={styles.smallText}>Date of Birth</Text>
                    <Image source={require('./../../assets/icons/info.png')} />

                    {/* AICI PLAYER */}
                    {/* <View>
                        <ProgressBar
                            progress={progress.position}
                            buffered={progress.buffered}
                        />
                    </View> */}
                    <MyPlayerBar/>

                    <Text style={styles.smallText}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In malesuada arcu id arcu rutrum molestie. Donec suscipit vestibulum est sit amet imperdiet. Morbi non venenatis massa, a dictum sapien. Integer volutpat tempus interdum. In nec venenatis odio. Duis vitae ultrices tortor, in tempus nisl. Fusce vel urna finibus, vulputate ante eu, viverra sapien. Maecenas finibus, dolor quis maximus aliquet, quam orci auctor nunc, sed tincidunt leo nibh vitae lacus. Donec rutrum dolor ac aliquam gravida.

                        Aenean vitae mi quis neque ullamcorper semper id non sapien. Pellentesque sagittis lobortis viverra. Vestibulum sagittis eget metus non elementum. In sit amet turpis justo. Nulla dignissim urna eget molestie sagittis. Fusce feugiat purus sed urna dignissim aliquam. Ut dapibus aliquam sollicitudin. Aliquam vitae est commodo, tincidunt ipsum in, rutrum leo. Pellentesque varius libero et fermentum condimentum. Proin consequat, sem a auctor congue, sapien sem commodo nisi, ac euismod dui odio a diam. Vivamus ut consectetur arcu, non vestibulum odio. Aenean ultricies dolor et porta dictum. Maecenas feugiat, turpis ut consectetur euismod, urna magna suscipit felis, sagittis aliquet tellus turpis in nisi. Praesent malesuada id lectus eu sollicitudin. Cras ac purus vitae sapien porta dapibus in vehicula nisl.

                    </Text>

                    <TouchableOpacity onPress={onPressTouch}>
                        <Image source={require('./../../assets/icons/arrow.png')} style={{ height: 50, width: 50, alignSelf: 'center' }} />
                    </TouchableOpacity>

                    {/* <Modal
                        animationType="none"
                        transparent={true}
                        visible={showModal}
                        onRequestClose={() => {
                            Alert.alert("Modal has been closed.");
                            setShowModal(!showModal);
                        }}
                    >
                        <View style={styles.modal}>
                            <Text>Thank you for your interest in the DeCoded project. Would you be interested in purchasing the Decoded book?</Text>
                            <View style={styles.buttons}>
                                <Button
                                    title="Link to Shop"
                                />
                                <Button
                                    title="No Thanks"
                                    onPress={() => { setShowModal(!showModal) }}
                                />
                            </View>
                        </View>
                    </Modal> */}


                    {/* {showModal
                        ? <Modal />
                        : null} */}

                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default DetailsScreen;