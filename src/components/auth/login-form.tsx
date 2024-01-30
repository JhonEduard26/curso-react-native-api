import { Button, StyleSheet, Text, TextInput, View } from 'react-native'

export const LoginForm = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Iniciar sesión</Text>

      <Text style={styles.label}>Usuario: </Text>
      <TextInput
        placeholder="johndoe"
        cursorColor="darkgrey"
      />
      <Text style={styles.label}>Contraseña: </Text>
      <TextInput
        secureTextEntry
        placeholder="*********"
        cursorColor="darkgrey"
      />
      <Button
        title="Entrar"
        onPress={() => {}}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightskyblue'
  },
  title: {
    marginBottom: 12,
    fontSize: 24,
    fontWeight: 'bold'
  },
  label: {
    fontSize: 18,
    fontWeight: "600"
  },
})