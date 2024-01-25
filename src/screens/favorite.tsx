import { StatusBar } from 'expo-status-bar'
import { Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export const FavoriteScreen = () => {
  return (
    <SafeAreaView>
      <Text>Favorite</Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  )
}