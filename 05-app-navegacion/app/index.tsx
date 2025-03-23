import { Redirect } from 'expo-router'
import React from 'react'


const App = () => {
    return <Redirect href='/(stack)/home'></Redirect>
    // return (
    //     <SafeAreaView>
    //         <View className='mt-10, mx-2.5'>
    //             <Text className='text-3xl font-work-black text-primary'>Hola Celeste</Text>
    //             <Text className='text-3xl font-work-black text-secondary'>Hola Celeste</Text>
    //             <Text className='text-3xl font-work-black text-secondary-200'>Hola Celeste</Text>

    //             <Link href='/products/index'>Productos</Link>
    //         </View>
    //     </SafeAreaView>
    // )
}

export default App