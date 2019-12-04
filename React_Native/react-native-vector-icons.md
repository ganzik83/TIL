# react-native-vector-icons

<https://github.com/GeekyAnts/NativeBase/issues/72>

## ios

```pod
# Podfile에 코드 추가

pod 'RNVectorIcons', :path => '../node_modules/react-native-vector-icons'
```

`Info.plist` 파일에 추가

```
<key>UIAppFonts</key>
<array>
  <string>AntDesign.ttf</string>
  <string>Entypo.ttf</string>
  <string>EvilIcons.ttf</string>
  <string>Feather.ttf</string>
  <string>FontAwesome.ttf</string>
  <string>FontAwesome5_Brands.ttf</string>
  <string>FontAwesome5_Regular.ttf</string>
  <string>FontAwesome5_Solid.ttf</string>
  <string>Foundation.ttf</string>
  <string>Ionicons.ttf</string>
  <string>MaterialIcons.ttf</string>
  <string>MaterialCommunityIcons.ttf</string>
  <string>SimpleLineIcons.ttf</string>
  <string>Octicons.ttf</string>
  <string>Zocial.ttf</string>
</array>
```

## android

`android/app/build.gradle`

```java
apply from: "../../node_modules/react-native-vector-icons/fonts.gradle"
```
