<https://stackoverflow.com/questions/53385790/react-native-camera-going-blank-on-navigation>

```js
import { withNavigationFocus } from 'react-navigation'

render() {
const { isFocused } = this.props
return (

{ isFocused && <Camera ... /> }
</View
)
}

export default withNavigationFocus(Component)
```
