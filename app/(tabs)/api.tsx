import {
  Text,
  View,
  StyleSheet,
  Image
} from 'react-native'
import { useGetPokemonByNameQuery } from '@/stores/services/pokemon.api'

export default function ApiScreen() {
  const { data, error, isLoading } = useGetPokemonByNameQuery('bulbasaur')

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Redux Toolkit Query API
      </Text>

      {error
        ? <Text style={styles.text}>Oh no, there was an error</Text>
        : isLoading
          ? <Text style={styles.text}>Loading...</Text>
          : data
            ? <>
                <Text style={styles.text}>{data.species.name}</Text>
                
                <Image
                  source={{ uri: data.sprites.front_default }}
                  style={{ width: 200, height: 200 }}
                />
              </>
            : null
      }

      <Text style={[styles.text, { color: '#fff' }]}>
        https://pokeapi.co/api/v2/pokemon/bulbasaur
      </Text>
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
  text: {
    color: '#ffd33d'
  }
})
