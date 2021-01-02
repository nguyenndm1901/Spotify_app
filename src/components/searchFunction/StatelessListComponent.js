import React, { Component } from 'react';
import { FlatList, View, Text } from 'react-native';
import Item from "./item";
import Separator from "./separator";

export default ({ items, onEndReached }) => (
  <View style={{ backgroundColor: 'white' }}>
    <FlatList data={items}
      renderItem={(info) => <Item item={info.item} />}
      listEmptyComponent={f => f}
      ItemSeparatorComponent={() => <Separator />}
      keyExtractor={(item, index) => item.id.toString()}
      onEndReached={onEndReached}
    />
  </View>
);