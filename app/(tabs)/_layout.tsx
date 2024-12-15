import { Tabs } from 'expo-router'
import { FC } from 'react'

type TabLayoutProps = {}

const TabLayout: FC<TabLayoutProps> = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
        }}
      />
      <Tabs.Screen name="category" options={{ title: 'Category' }} />
      <Tabs.Screen name="cart" options={{ title: 'Cart' }} />
      <Tabs.Screen name="profile" options={{ title: 'Profile' }} />
    </Tabs>
  )
}

export default TabLayout
