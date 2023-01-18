import { SafeAreaView, View, Text, Button } from 'react-native'
import React, { useState, useEffect } from 'react'
import styles
    from './HomeScreen.style'
const HomeScreen = ({ navigation }) => {
    const [showLogo, setShowLogo] = useState(false)

    useEffect(() => {
        const logoTimer = setTimeout(() => {
            setShowLogo(true)
        }, 1500)

        const navigationTimer = setTimeout(() => {
            navigation.navigate('Scan')
        }, 4000);

        return () => {clearTimeout(logoTimer), clearTimeout(navigationTimer)}

    }, [])
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.tagline}>DeCoded Logo</Text>
            <Text style={styles.logo}>Huge Logo</Text>
            <View>
                {showLogo
                    ?  <><Text style={styles.tagline}>DeCoded tagline</Text><Text style={styles.tagline}>Marcus Lyon</Text></>
                    : null
                }
            </View>


        </SafeAreaView>
    )
}

export default HomeScreen;