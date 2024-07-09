import { FC, ReactElement, ReactNode } from "react";
import { ScrollView, StyleProp, View, ViewStyle } from "react-native";
import useIndex from "./useIndex";
import Tag from "../../../../components/Tag";
import { BASE_SIZE } from "../../../../utils/constants";
import { useThemeStore } from "../../../../zustand/theme";

interface Props {
  data: string[];
  style?: StyleProp<ViewStyle>;
}

const HMasonryList: FC<Props> = ({ data, style }) => {
  const { styles } = useIndex();
  const { colors } = useThemeStore();
  const firstRow = data.filter((value, index) => index % 2 == 0);
  const secondRow = data.filter((value, index) => index % 2 == 1);
  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      style={style}
      contentContainerStyle={styles.tagList}
      horizontal>
      <View>
        <View style={styles.row}>
          <View style={{ width: 10 * BASE_SIZE }}></View>

          {firstRow.map((item, index) => (
            <Tag
              text={item}
              key={index}
              style={{ marginEnd: 4 * BASE_SIZE, backgroundColor: colors.tag }}
              toggle
            />
          ))}
        </View>
        <View style={[styles.row, { marginVertical: 3 * BASE_SIZE }]}>
          <View style={{ width: 10 * BASE_SIZE }}></View>

          {secondRow.map((item, index) => (
            <Tag
              text={item}
              key={index}
              style={{ marginEnd: 4 * BASE_SIZE, backgroundColor: colors.tag }}
              toggle
            />
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default HMasonryList;
