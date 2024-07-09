import { FC, RefObject } from "react";
import { TextInput, View } from "react-native";
import useIndex from "./useIndex";
import { BottomSheetModalMethods } from "@gorhom/bottom-sheet/lib/typescript/types";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { BASE_SIZE } from "../../../../utils/constants";

interface Props {
  searchSheetRef: RefObject<BottomSheetModalMethods>;
  searchTextInputRef: RefObject<TextInput>;
}

const Header: FC<Props> = ({ searchSheetRef, searchTextInputRef }) => {
  const { styles, colors, onFocus } = useIndex(searchSheetRef);
  return (
    <View style={styles.searchBarWrapper}>
      <View style={styles.searchBar}>
        <FontAwesomeIcon
          icon="search"
          color={colors.secondaryText}
          size={6 * BASE_SIZE}
          style={{ marginEnd: 6 * BASE_SIZE }}
        />
        <TextInput
          style={styles.searchTextInput}
          placeholder="What do you wanna do?"
          onFocus={onFocus}
          ref={searchTextInputRef}
          placeholderTextColor={colors.secondaryText}
        />
      </View>
    </View>
  );
};

export default Header;
