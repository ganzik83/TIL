# react-native-maps

## ios

```sh
react-native init ex_map

cd ex_map

# react-native-maps 모듈 설치
yarn add react-native-maps -E

# react-native 최신 버전에서는 링크를 따로 해주지 않아도 된다
# react-native link react-native-maps

cd ios

rm -rf build

pod install
```

`AppDelegate.m` 파일에 구글맵 API 삽입

```swift
+ #import <GoogleMaps/GoogleMaps.h>

@implementation AppDelegate
...

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
+  [GMSServices provideAPIKey:@"_YOUR_API_KEY_"]; // add this line using the api key obtained from Google Console
...
```

`Podfile`에 아래 코드 삽입

```pod
 # React Native Maps dependencies
  rn_maps_path = '../node_modules/react-native-maps'
  pod 'react-native-google-maps', :path => rn_maps_path
  pod 'GoogleMaps'
  pod 'Google-Maps-iOS-Utils'
```
