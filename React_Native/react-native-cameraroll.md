# react-native-cameraroll

<https://github.com/react-native-community/react-native-cameraroll>

```sh
yarn add @react-native-community/cameraroll -E
```

## ios

```sh
cd ios

pod install
```

## android

권한설정 필요

<https://github.com/react-native-community/react-native-cameraroll/issues/19>

```js
import { PermissionsAndroid, Platform } from 'react-native';
import CameraRoll from '@react-native-community/cameraroll';

const checkAndroidPermission = async () => {
  try {
    const permission = PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE;
    await PermissionsAndroid.request(permission);
    Promise.resolve();
  } catch (error) {
    Promise.reject(error);
  }
};

// const requestExternalStoragePermission = async () => {
//     try {
//       const granted = await PermissionsAndroid.request(
//         PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
//         {
//           title: 'My App Storage Permission',
//           message: 'My App needs access to your storage ' +
//             'so you can save your photos',
//         },
//       );
//       return granted;
//     } catch (err) {
//       console.error('Failed to request permission ', err);
//       return null;
//     }
//   };

const savePicture = async () => {
  if (Platform.OS === 'android') {
    await checkAndroidPermission();
  }
  CameraRoll.saveToCameraRoll(tag, [type]);
};
```
