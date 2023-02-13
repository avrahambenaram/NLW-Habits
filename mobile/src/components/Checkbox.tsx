import { TouchableOpacity as TO, View, Text, TouchableOpacityProps } from 'react-native';
import { Feather } from '@expo/vector-icons';
import colors from 'tailwindcss/colors';
import Animated, { RotateInUpLeft, RotateOutDownRight } from 'react-native-reanimated';

interface Props extends TouchableOpacityProps {
    title: string
    checked?: boolean
}

export function Checkbox({ title, checked = false, ...props }: Props) {
    return (
        <TO
            activeOpacity={0.7}
            className='flex-row mb-2 items-center'
            {...props}
        >
            {
                checked ?
                <Animated.View
                    className='w-8 h-8 bg-green-500 rounded-lg items-center justify-center'
                    entering={RotateInUpLeft}
                    exiting={RotateOutDownRight}
                >
                    <Feather
                        name='check'
                        size={20}
                        color={colors.white}
                    />
                </Animated.View>
                :
                <View className='w-8 h-8 bg-zinc-900 rounded-lg'/>
            }

            <Text className='text-white text-base ml-3 font-semibold'>
                {title}
            </Text>
        </TO>
    )
}