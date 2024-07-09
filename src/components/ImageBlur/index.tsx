import { FC } from "react";
import {
  Image,
  ImageResizeMode,
  ImageStyle,
  StyleProp,
  ViewStyle,
} from "react-native";
import { BlurView } from "@react-native-community/blur";
import useIndex from "./useIndex";

interface Props {
  uri: string;
  style?: StyleProp<ImageStyle>;
  outerStyle?: StyleProp<ViewStyle>;
  resizeMode?: ImageResizeMode;
}

const ImageBlur: FC<Props> = ({ uri, style, outerStyle, resizeMode }) => {
  const { colors, styles, dark } = useIndex();

  return (
    <BlurView blurType={dark ? "dark" : "light"} style={[style, outerStyle]}>
      <Image
        source={{ uri: uri }}
        style={style}
        resizeMode={resizeMode ?? "cover"}
      />
    </BlurView>
  );
};

export default ImageBlur;
