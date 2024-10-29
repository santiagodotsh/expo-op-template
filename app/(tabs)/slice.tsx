import {
  Text,
  View,
  StyleSheet
} from 'react-native'
import { useAppSelector, useAppDispatch } from '@/hooks/redux'
import { decrement, increment } from '@/stores/features/counter.slice'
import { Button } from '@/components/button'

export default function CounterScreen() {
  const count = useAppSelector((state) => state.counter.value)

  const dispatch = useAppDispatch()

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Redux Slice Counter
      </Text>

      <Text style={styles.number}>
        {count}
      </Text>

      <View style={styles.buttonContainer}>
        <Button label='-' onPress={() => dispatch(decrement())} />
        <Button label='+' onPress={() => dispatch(increment())} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    color: '#fff',
    fontSize: 24
  },
  number: {
    color: '#ffd33d',
    fontSize: 64
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 20
  }
})
