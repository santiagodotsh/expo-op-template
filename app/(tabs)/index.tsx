import {
  View,
  StyleSheet,
  Text,
  Image
} from 'react-native'

const DEFAULT_IMAGE = require('@/assets/images/adaptive-icon.png')

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        ONE PAY
      </Text>

      <Image source={DEFAULT_IMAGE} style={styles.image} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center'
  },
  title: {
    color: '#fff',
    fontSize: 24,
    marginTop: 64
  },
  image: {
    width: 128,
    height: 128,
    marginTop: 32
  }
})
