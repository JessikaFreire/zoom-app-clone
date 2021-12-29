import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'

const contactsMenuButtons = [
    {
        type: 'starred',
        name: 'starred',
    },
    {
        type: 'contact',
        name: 'Chloe',
        photo: require('../assets/chloe-beale.png'),
    },
    {
        type: 'contact',
        name: 'Amy',
        photo: require('../assets/amy.jpg'),
    },
    {
        type: 'contact',
        name: 'Stacie',
        photo: require('../assets/stacie-conrad.jpg'),
    },
    {
        type: 'contact',
        name: 'Emily',
        photo: require('../assets/emily-junk.jpg'),
    },
]

function ContactsMenu() {
    return (
        <View style={styles.container}>
            {/* Contact Container */}
            {contactsMenuButtons.map((contact, index) =>
                <View key={index} style={styles.row}>
                    {/* Image */}
                    {contact.type == 'starred' ?
                        (<View style={styles.starredIcon}>
                            <AntDesign name='star' size={30} color='#EFEFEF' />
                        </View>) :
                        (
                            <Image source={contact.photo} style={styles.image} />
                        )
                    }

                    {/* Text */}
                    <Text style={styles.text}>
                        {contact.name}
                    </Text>
                </View>
            )}
        </View>
    )
}

export default ContactsMenu

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        marginTop: 20,
        alignItems: 'center',
    },
    starredIcon: {
        backgroundColor: '#333333',
        width: 55,
        height: 55,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
    },
    text: {
        color: 'white',
        paddingLeft: 15,
        fontSize: 18,
    },
    image: {
        width: 55,
        height: 55,
        borderRadius: 20,
    },
})