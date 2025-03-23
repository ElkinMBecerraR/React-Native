import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { Link, router } from 'expo-router'
import CustomButton from '@/components/shared/CustomButton'

const HomeScream = () => {
    return (
        <SafeAreaView >
            <View className='px-10 mt-5 bg-orange-200'>
                <CustomButton
                    onPress={() => router.push('/profile')}
                >Perfil
                </CustomButton>

                <CustomButton color='secondary'
                    onPress={() => router.push('/products')}
                >Productos
                </CustomButton>

                <CustomButton color='tertiary'
                    onPress={() => router.push('/settings')}
                >Ajustes
                </CustomButton>

                <CustomButton variante='text-only'
                    onPress={() => router.push('/products')
                    }
                >Productos
                </CustomButton>
                {/* <Link className='mb-5' href='/profile'>Perfil</Link>
                <Link className='mb-5' href='/products'>Productos</Link>
                <Link className='mb-5' href='/settings'>Ajustes</Link> */}
            </View>
        </SafeAreaView>
    )
}

export default HomeScream