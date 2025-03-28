import React from 'react'
import { Stack } from 'expo-router'

const StackLayout = () => {
    return (
        <Stack
            screenOptions={{
                headerShadowVisible: false,
                contentStyle: {
                    //backgroundColor: 'gray'
                }


            }}>
            <Stack.Screen name="home/index"
                options={{
                    title: 'Inicio',

                }} />

            <Stack.Screen name="profile/index"
                options={{ title: 'Perfil Screen', animation: 'simple_push' }} />

            <Stack.Screen name="products/index"
                options={{ title: 'Productos Screen' }} />



            <Stack.Screen name="settings/index"
                options={{ title: 'Ajustes Screen' }} />

        </Stack>
    )
}

export default StackLayout