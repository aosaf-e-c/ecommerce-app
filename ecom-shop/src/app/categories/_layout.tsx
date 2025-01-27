import {Stack} from 'expo-router';

export default function CategoriesLayout() {
    return <Stack>
        <Stack.Screen name="[slug]" options={{headerShown: true, }} />
    </Stack>
}