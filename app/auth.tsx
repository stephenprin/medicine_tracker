import { Dimensions, StyleSheet, Text, View } from 'react-native'
import { useRouter } from 'expo-router'
import * as LocalAuthentication from 'expo-local-authentication'
import { Ionicons } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient'


const {width, height} = Dimensions.get('window')

const AuthScreen = () => {
  return (
    <View>
      <Text>auth</Text>
    </View>
  )
}

export default AuthScreen

const styles = StyleSheet.create({})