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
      <Tabs.Screen name="category/index" options={{ title: 'Category' }} />
      <Tabs.Screen name="cart/index" options={{ title: 'Cart' }} />
      <Tabs.Screen name="profile/index" options={{ title: 'Profile' }} />
    </Tabs>
  )
}

export default TabLayout
