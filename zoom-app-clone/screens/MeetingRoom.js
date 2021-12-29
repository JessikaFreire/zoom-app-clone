import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import StartMeeting from '../components/StartMeeting'
import { io } from 'socket.io-client'

let socket

function MeetingRoom() {
    const [name, setName] = useState()
    const [roomId, setRoomId] = useState()

    const joinRoom = () => {
        socket.emit('joim-room', { roomId: roomId, userName: name})
    }

    useEffect(() => {
        socket = io('http://localhost:3001')
        socket.on('connection', () => console.log('connected'))
    }, [])

    return (
        <View style={styles.container}>
            {/* Start Meeting Section */}
            <StartMeeting
                name={name}
                setName={setName}
                roomId={roomId}
                setRoomId={setRoomId}
                joinRoom={joinRoom}
            />
        </View>
    )
}

export default MeetingRoom

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#1C1C1C',
        flex: 1,
    }
})