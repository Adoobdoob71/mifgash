import { FC } from "react";
import { Text, View } from "react-native";
import useIndex from "./useIndex";
import Plan from "../../../../components/Plan";
import { BASE_SIZE } from "../../../../utils/constants";

interface Props {
  shortDescription: string;
  plan?: string[];
}

const Description: FC<Props> = ({ shortDescription, plan }) => {
  const { colors, styles } = useIndex();

  return (
    <View style={styles.descWrapper}>
      <Text style={styles.secondaryTitle}>What're we gonna do?</Text>
      <Text style={styles.shortDescText}>{shortDescription}</Text>
      <View style={styles.planWrapper}>
        <Text style={styles.secondaryTitle}>So what's the plan?</Text>
        <Plan
          stages={[
            {
              title: "Meeting",
              description:
                "Gathering together at Sarona Market, also an opportunity to communicate and bluh bluh bluh more talking bluh lorem ipsum something bluh",
              time: "19:00",
            },
            {
              title: "Burger Time 🍔",
              description:
                "We'll walk to Vitrina together and eat yummy burgers and bluh bluh bluh bluh more talking bluh lorem ipsum something bluh",
              time: "19:30",
            },
            {
              title: "Goodbyes",
              description:
                "All that eating sure is tiring, that's when everyone goes home!",
              time: "20:30",
            },
          ]}
          style={{ marginTop: 8 * BASE_SIZE }}
        />
      </View>
    </View>
  );
};

export default Description;
