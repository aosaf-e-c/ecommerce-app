import { StyleSheet, Text, View } from 'react-native'
import { Product } from '../../../assets/types/product';


export const ProductListItem = ({ product }: {product: Product}) => {
  return (
    <View>
      <Text>product-list-item</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    item: {
        width: '48%',
        backgroundColor: 'white',
        marginVertical: 8,
        borderRadius: 10,
        overflow: 'hidden',
    },
    itemImageContainer: {
        borderRadius: 10,
        width: '100%',
        height: 150,
    },
    itemImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    itemTextContainer: {
        padding: 0,
        alignItems: 'flex-start',
        gap: 4,
    }
})