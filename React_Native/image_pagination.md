# 사진 페이지네이션 하는 방법

<https://snack.expo.io/H1CnjIeDb>
<https://stackoverflow.com/questions/43212931/react-native-horizontal-scroll-view-pagination-preview-next-page-card>

flatlist
<https://stackoverflow.com/questions/47871447/react-native-pagination-in-horizontal-flatlist-with-separators>

```js
<FlatList
  data={moments}
  renderItem={_renderItem}
  keyExtractor={item => item._id}
  onEndReached={() => getMyMoments(page, moments)}
  onEndReachedThreshold={1}
  refreshing={refreshing}
  onRefresh={getMyMoments}
  showsVerticalScrollIndicator={false}
  numColumns={columnCount}
  key={columnCount}
  pagingEnabled={columnCount === 1 ? true : false}
  horizontal={columnCount === 1 ? true : false}
/>
```

인덱스에 조건문
<https://stackoverflow.com/questions/46551378/how-to-have-different-style-for-items-at-certain-locations-in-a-list-in-react-na>
