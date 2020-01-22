# flatlist 유용한 링크

### 선택된 아이템 효과주기, 멀티 셀렉트 기능

<https://snack.expo.io/@tejas1991/35caa9>

```js
import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity
} from 'react-native';
import Constants from 'expo-constants';

const Data = [
  {
    id: 1,
    first_name: 'Sile'
  },
  {
    id: 2,
    first_name: 'Clementia'
  },
  {
    id: 3,
    first_name: 'Brita'
  },
  {
    id: 4,
    first_name: 'Duke'
  },
  {
    id: 5,
    first_name: 'Hedvig'
  },
  {
    id: 6,
    first_name: 'Paulie'
  },
  {
    id: 7,
    first_name: 'Munmro'
  },
  {
    id: 8,
    first_name: 'Dyanna'
  },
  {
    id: 9,
    first_name: 'Shanta'
  },
  {
    id: 10,
    first_name: 'Bambi'
  }
];

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedItem: null,
      renderData: Data
    };
  }

  onPressHandler(id) {
    let renderData = [...this.state.renderData];
    for (let data of renderData) {
      if (data.id == id) {
        data.selected = data.selected == null ? true : !data.selected;
        break;
      }
    }
    this.setState({ renderData });
  }

  render() {
    return (
      <View>
        <FlatList
          //horizontal={true}
          data={this.state.renderData}
          keyExtractor={item => item.id.toString()}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => this.onPressHandler(item.id)}>
              <Card
                style={
                  item.selected == true
                    ? {
                        padding: 10,
                        borderRadius: 5,
                        backgroundColor: '#000000'
                      }
                    : {
                        padding: 10,
                        borderRadius: 5,
                        backgroundColor: '#a1a1a1'
                      }
                }
              >
                <Text>{item.first_name}</Text>
              </Card>
            </TouchableOpacity>
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({});
```

### 현재 보고 있는 속성값 가져오기

<https://stackoverflow.com/questions/48045696/flatlist-scrollview-error-on-any-state-change-invariant-violation-changing-on>

useRef를 이용해야 오류가 안나타난다.
