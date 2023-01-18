import React from 'react';
import TrackPlayer, { useProgress } from 'react-native-track-player';
import { View, Text } from 'react-native';
import ProgressBar from 'react-native-progress/Bar'

const MyPlayerBar = () => {
    const progress = useProgress();
    const per = (progress.position * 100 / progress.duration) / 100
    console.log(per)
    return (
        <View>
            {
                per
                    ? <ProgressBar progress={per} />
                    : <ProgressBar progress={0} />}
        </View>


    )
}

export default MyPlayerBar;