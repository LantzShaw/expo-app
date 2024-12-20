import { Stack } from 'expo-router'
import { FC } from 'react'

type HomeLayoutProps = {}

const HomeLayout: FC<HomeLayoutProps> = () => {
  return (
    <Stack>
      <Stack.Screen name="index" />
    </Stack>
  )
}

export default HomeLayout
