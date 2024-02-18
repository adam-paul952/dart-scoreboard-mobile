import { Entypo, Foundation, Ionicons } from '@expo/vector-icons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import React from 'react';
import { Pressable } from 'react-native';

import { ButtonIcon } from '@/components/ButtonIcon';
import Colors from '@/constants/Colors';
import { useClientOnlyValue } from '@/hooks/useClientOnlyValue';
import { useColorScheme } from '@/hooks/useColorScheme';

const tabButtonProps = {
  size: 28,
  style: { marginBottom: -3 },
};

export default function TabLayout() {
  const colorScheme = useColorScheme() ?? 'light';

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
        // Disable the static render of the header on web
        // to prevent a hydration error in React Navigation v6.
        headerShown: useClientOnlyValue(false, true),
      }}
    >
      <Tabs.Screen
        name='index'
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => (
            <ButtonIcon
              IconComponent={Foundation}
              name='target'
              color={color}
              {...tabButtonProps}
            />
          ),
          headerShown: false,
          // headerRight: () => (
          //   <Link href='/modal' asChild>
          //     <Pressable>
          //       {({ pressed }) => (
          //         <FontAwesome
          //           name='info-circle'
          //           size={25}
          //           color={Colors[colorScheme].text}
          //           style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
          //         />
          //       )}
          //     </Pressable>
          //   </Link>
          // ),
        }}
      />
      <Tabs.Screen
        name='rules'
        options={{
          title: 'Rules',
          tabBarIcon: ({ color }) => (
            <ButtonIcon
              IconComponent={Entypo}
              name='text-document'
              color={color}
              {...tabButtonProps}
            />
          ),
        }}
      />
      <Tabs.Screen
        name='four'
        options={{
          title: 'Settings',
          tabBarIcon: ({ color }) => (
            <ButtonIcon
              IconComponent={Ionicons}
              name='settings-outline'
              color={color}
              {...tabButtonProps}
            />
          ),
        }}
      />
    </Tabs>
  );
}
