import { products } from '@/store/products.store';
import { Redirect, useLocalSearchParams } from 'expo-router'
import { View, Text } from 'react-native'

const ProductScreen = () => {
    const { id } = useLocalSearchParams();

    const producto = products.find(p => p.id == id)

    if (!producto) {
        return <Redirect href='/'></Redirect>
    }

    return (
        <View className='bg-orange-200 m-3'>
            <Text className='text-2xl font-work-black'> {producto.title}</Text>
            <Text className='font-work-medium'> {producto.description}</Text>
            <Text className='font-work-black'> {producto.price}</Text>
        </View>
    )
}

export default ProductScreen