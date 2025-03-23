import { View, Text, Pressable, PressableProps } from 'react-native'
import React from 'react'

interface Props extends PressableProps {
    children: string,
    color?: 'primary' | 'secondary' | 'tertiary',
    variante?: 'contain' | 'text-only'
}

const CustomButton = ({ children, color = 'primary', variante, onPress, onLongPress }: Props) => {
    const btnColor = {
        primary: 'bg-primary',
        secondary: 'bg-secondary',
        tertiary: 'bg-tertiary'
    }[color]

    const textColor = {
        primary: 'text-primary',
        secondary: 'text-secondary',
        tertiary: 'text-tertiary'
    }[color]


    if (variante === 'text-only') {
        return (
            <Pressable
                className={`p-3 `}
                onPress={onPress}
                onLongPress={onLongPress}
            >
                <Text className={`text-center ${textColor} font-work-medium`}>{children}</Text>
            </Pressable>
        )
    }

    return (
        <Pressable
            className={`p-3 rounded-md ${btnColor} active:opacity-90 m-2`}
            onPress={onPress}
            onLongPress={onLongPress}
        >
            <Text className={`text-center text-white font-work-medium`}>{children}</Text>
        </Pressable>
    )
}

export default CustomButton