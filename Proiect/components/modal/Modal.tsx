import React from 'react'
import { Button, SafeAreaView, Text, View } from 'react-native'
import styles from './Modal.style'

const BookModal = () => {

    return (
        <SafeAreaView style={styles.container}>

            <Text>Thanks for the interest in the DeCoded project. Would you be interested in purchasing the DeCoded book?</Text>
            <View style={styles.buttonContainer}>
                <Button
                    title="Link to Shop"
                />
                <Button
                    title="No thanks"
                />
            </View>
        </SafeAreaView>
    )
}

export default BookModal;