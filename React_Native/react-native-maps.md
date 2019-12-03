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

## android

`android/build.gradle`에 아래 코드 삽입

```java
buildscript {
    ext {
        buildToolsVersion = "28.0.3"
        minSdkVersion = 16
        compileSdkVersion = 28
        targetSdkVersion = 28
        // 아래 코드 삽입
        supportLibVersion = "28.0.0"
        googlePlayServicesVersion = "16.1.0"
        androidMapsUtilsVersion = "0.5+"
    }
    ...
}
```

`android/app/src/main/AndroidManifest.xml` 파일 수정
package 항목의 번들네임을 구글 API키에 등록하자

```
<application>
   <!-- You will only need to add this meta-data tag, but make sure it's a child of application -->
   <meta-data
     android:name="com.google.android.geo.API_KEY"
     android:value="Your Google maps API Key Here"/>
</application>
```
