import { useState } from 'react'
import {
  StyleSheet,
  View,
  Pressable,
  Text
} from 'react-native'
import { clsx } from 'clsx'

type Props = {
  label: string
  onPress?: () => void
}

export function Button({ label, onPress }: Props) {
  const [isPressed, setIsPressed] = useState<boolean>(false)

  return (
    <View
      // style={[
      //   styles.buttonContainer,
      //   {
      //     borderWidth: 4,
      //     borderColor: isPressed ? '#ffd33d' : 'transparent',
      //     borderRadius: 18
      //   }
      // ]}
      className={clsx(
        'w-20 h-20 mx-5 p-1 border-4 rounded-2xl',
        isPressed ? ' border-yellow-400' : 'border-transparent'
      )}
    >
      <Pressable
        style={[styles.button, { backgroundColor: '#fff' }]}
        onPress={onPress}
        onPressIn={() => setIsPressed(true)}
        onPressOut={() => setIsPressed(false)}
      >
        <Text style={[styles.buttonLabel, { color: '#25292e' }]}>
          {label}
        </Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 7,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  buttonIcon: {
    paddingRight: 8
  },
  buttonLabel: {
    color: '#fff',
    fontSize: 28
  }
})
