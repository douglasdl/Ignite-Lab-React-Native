# Ignite-Lab-React-Native
Ignite Lab React Native

[Expo]()

- Update or install the Expo CLI
```sh
#yarn global add expo-cli
npm install --location=global expo-cli
```

- Check the Expo CLI version (5.5.1)
```sh
expo --version
```

- Create app with Expo
```sh
expo init rockethelp
```
- Choose minimal (Then add TypeScript).

- Convert from JavaScript to TypeScript:
    1- Rename the 'App.js' to 'App.tsx'.
    2- Create a new file named 'tsconfig.json' on the root of your project.
    3- Run 'expo start' and it will automatically configure the 'tsconfig.json' file.

- Start the app
```sh
expo start
```

- [Native Base](https://nativebase.io/)

```sh
npm install native-base
expo install react-native-svg
expo install react-native-safe-area-context

```

## Install [Google Fonts with Expo GO](https://docs.expo.dev/guides/using-custom-fonts/)
```sh
expo install expo-font @expo-google-fonts/roboto
```

- [React Native SVG Transformer](https://github.com/kristerkari/react-native-svg-transformer)

Install React Native SVG Transformer development dependencies
```sh
npm i react-native-svg-transformer --save-dev
```

- [Layout](https://www.figma.com/file/6wmkfwDF7BasD7W2qNN0TP/Rocket-Help---Ignite-Lab-(Community)?node-id=37%3A6)

- [Phosphor Icons](https://phosphoricons.com/)
```sh
npm install --save phosphor-react-native
```

- [React Navigation](https://reactnavigation.org)
```sh
npm install @react-navigation/native
```

```sh
npm install react-native-screens
```

```
npm install @react-navigation/native-stack
```

- [Reference Files](https://efficient-sloth-d85.notion.site/Ignite-Lab-03-606aca4553fc4acc90505eae21521403)

VS Code Extensions:
- [R Component](https://marketplace.visualstudio.com/items?itemName=rodrigorgtic.rcomponent)

## Native Environment Settings

- [Rocketseat Documentation](https://react-native.rocketseat.dev/expo-managed/)

Check the cURL version or install it
```sh
curl --version
sudo apt-get install curl
```

Check the Node, npm and n versions or install them
```sh
node -v
npm -v
n --version

curl -L https://raw.githubusercontent.com/tj/n/master/bin/n -o n
bash n lts
npm install -g n
```

Check the Git version or install it
```sh
git --version
sudo apt-get install git
```

Check the Homebrew version or install it
```sh
brew -v
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

Check the Watchman version or install it
```sh
watchman -v
brew install watchman
```

Check the expo-cli version or install it
```sh
expo --version
npm install -g expo-cli
```

[React Native Firebase](https://rnfirebase.io/)

```sh
npm install --save @react-native-firebase/app
```
Add the plugin configuration on the file 'app.json'.
```json
{
  "expo": {
    "plugins": [
      "@react-native-firebase/app"
    ]
  }
}
```
Run the plugin
```sh
expo prebuild
```

Install the Firestore dependencies
```sh
npm i @react-native-firebase/firestore
cd ios/ && pod install
```

Execute on Device connected to USB:
```sh
expo run:ios
expo run:android
```

Install Authentication dependencies
```sh
npm i @react-native-firebase/auth
```