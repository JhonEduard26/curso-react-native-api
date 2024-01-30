import { SafeAreaView } from 'react-native-safe-area-context'
import { LoginForm, UserData } from '../components'

export const AccountScreen = () => {
  const auth = null

  return (
    <SafeAreaView>
      {
        auth ? ( <UserData /> ) : ( <LoginForm />)
      }
    </SafeAreaView>
  )
}