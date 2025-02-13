import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { LinearGradient } from 'expo-linear-gradient'
import { Ionicons } from '@expo/vector-icons'

const HomeScreen = () => {
  return (
      <ScrollView>
          <LinearGradient colors={["#fff", "#fff"]}>
              <View>
                  <View style={styles}>
                      <View>
                          <Text>Daily Progress</Text>
                      </View>
                      <TouchableOpacity>
                          <Ionicons name='notifications-outline' size={24} color="white" />
                      </TouchableOpacity>
                  </View>

              {/* Circular progress */}
              </View>
          </LinearGradient>
    </ScrollView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})