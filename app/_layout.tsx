import { Stack } from 'expo-router'
import { FC } from 'react'
import { StatusBar, Text, View } from 'react-native'

const RootLayout: FC = () => {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="+not-found" />
    </Stack>
  )
}

export default RootLayout
