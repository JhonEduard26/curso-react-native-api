import { StatusBar } from 'expo-status-bar'
import { Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export const AccountScreen = () => {
  return (
    <SafeAreaView>
      <Text>Account</Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  )
}