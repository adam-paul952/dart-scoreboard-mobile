import { AntDesign } from '@expo/vector-icons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack, useRouter } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { Pressable } from 'react-native';

import { IconButton } from '@/components/ButtonIcons';
import Colors from '@/constants/Colors';
import { PlayerListProvider } from '@/context/Player';
import { useColorScheme } from '@/hooks/useColorScheme';

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(tabs)',
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const colorScheme = useColorScheme() as 'light' | 'dark';
  const navigation = useRouter();

  return (
    <PlayerListProvider>
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <Stack>
          <Stack.Screen name='(tabs)' options={{ headerShown: false }} />
          <Stack.Screen name='modal' options={{ presentation: 'modal' }} />
          <Stack.Screen
            name='manage-players'
            options={{
              title: 'Manage Players',
              headerRight: () => (
                <Pressable
                  onPress={() => navigation.navigate('create-player')}
                  style={({ pressed }) => ({
                    opacity: pressed ? 0.5 : 1,
                  })}
                  accessibilityHint='add-player'
                >
                  <IconButton
                    IconComponent={AntDesign}
                    name='adduser'
                    size={25}
                    color={Colors[colorScheme].text}
                  />
                </Pressable>
              ),
            }}
            // options={({navigation}) => ({
            //   title: 'Manage Players',
            //   headerRight: () => (
            //     <Pressable
            //       onPress={() => navigation.navigate("create-player")}
            //       style={({ pressed }) => ({
            //         opacity: pressed ? 0.5 : 1,
            //       })}
            //       accessibilityHint="add-player"
            //     >
            //       <AntDesignIcon
            //         name="adduser"
            //         size={25}
            //         color={Colors[colorScheme].text}
            //       />
            //     </Pressable>
            //   ),
            // })}
          />
          <Stack.Screen name='baseball' options={{ title: 'Baseball' }} />
          <Stack.Screen name='cricket' options={{ title: 'Cricket' }} />
          <Stack.Screen name='x01' options={{ title: 'X01' }} />
          <Stack.Screen name='elimination' options={{ title: 'Elimination' }} />
          <Stack.Screen name='killer' options={{ title: 'Killer' }} />
          <Stack.Screen
            name='create-player'
            options={{ title: 'Create Player' }}
          />
          <Stack.Screen
            name='create-match'
            options={{ title: 'Create Match' }}
          />
        </Stack>
      </ThemeProvider>
    </PlayerListProvider>
  );
}
