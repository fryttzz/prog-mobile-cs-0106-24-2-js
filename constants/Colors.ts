/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = '#0a7ea4';
const tintColorDark = '#fff';

export const Colors = {
  light: {
    text: '#11181C',
    tint: tintColorLight,
    icon: '#687076',
    tabIconDefault: '#687076',
    tabIconSelected: tintColorLight,

    background: "#FDFBFF",
    primary: "#245EA7",
    secondary: "#555F71",
    tertiary: "#6F5675",
    error: "#BA1B1B",
    textPrimary: "#FFFFFF",
    textSecondary: "#FFFFFF",
    textTertiary: "#FFFFFF",
    textError: "#FFFFFF",
    shape: "#252836",
    note: "#4E4E5D",
    defaultText: "#000000",
    statusbar: "dark",
    line: "#c4c4c4",
    darkText: "#323232"
  },
  dark: {
    text: '#ECEDEE',
    tint: tintColorDark,
    icon: '#9BA1A6',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: tintColorDark,

    background: "#245EA7",
    primary: "#A7C8FF",
    secondary: "#BDC7DC",
    tertiary: "#DBBCE1",
    error: "#FFEDE9",
    textPrimary: "#003064",
    textSecondary: "#273141",
    textTertiary: "#3E2845",
    textSuffix: "#7BACFB",
    textError: "#DD3730",
    shape: "#252836",
    note: "#4E4E5D",
    defaultText: "#FFFFFF",
    statusbar: "light",
    line: "#c4c4c4",
    screenTitle: "#1B1B1D",
    linearPrimary: "#5F92DE",
    linearSecondary: "#245EA7",
    cardBackground: "#EBF1FF",
    buttonBackground: "#F1F0F4",
    listBorder: "#D9E3F9",
  },
  paddingHorizantal: 20,
};
