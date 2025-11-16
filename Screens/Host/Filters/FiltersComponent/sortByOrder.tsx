import { StyleSheet, Text, View, Modal, Pressable } from "react-native";
import React, { memo } from "react";
import { Colors, FONT_FAMILY, FONT_SIZE } from "../../../../Constants";
import { AntDesign, Fontisto } from "@expo/vector-icons";

type SortOrderTypes = {
  setOpenSortByOrderModal: React.Dispatch<React.SetStateAction<boolean>>;
};

function SortByOrder({ setOpenSortByOrderModal }: SortOrderTypes) {
  const closeModal = () => {
    setOpenSortByOrderModal(false);
  };

  return (
    <Modal
      visible={true}
      animationType="slide"
      transparent={true}
      presentationStyle="overFullScreen"
      onRequestClose={closeModal}
    >
      <View style={styles.modalContainer}>
        <View style={styles.sortByContainer}>
          <View style={styles.headerViewCont}>
            <Text style={styles.headerLabel}>Sort by</Text>
            <Pressable onPress={closeModal} style={styles.closeModalBox}>
              <AntDesign name="close" size={12} color={Colors.black} />
            </Pressable>
          </View>

          <View style={styles.sortOptions}>
            <Text
              style={{ fontSize: FONT_SIZE.sm, fontFamily: FONT_FAMILY.medium }}
            >
              Newest
            </Text>
            <Fontisto
              name="radio-btn-passive"
              size={24}
              color={Colors.grayBorder}
            />
          </View>

          <View style={styles.sortOptions}>
            <Text
              style={{ fontSize: FONT_SIZE.sm, fontFamily: FONT_FAMILY.medium }}
            >
              Oldest
            </Text>
            <Fontisto
              name="radio-btn-passive"
              size={24}
              color={Colors.grayBorder}
            />
          </View>

          <View style={styles.sortOptions}>
            <Text
              style={{ fontSize: FONT_SIZE.sm, fontFamily: FONT_FAMILY.medium }}
            >
              Recently Updated
            </Text>
            <Fontisto
              name="radio-btn-passive"
              size={24}
              color={Colors.grayBorder}
            />
          </View>

          <Pressable style={styles.DoneBtn}>
            <Text style={styles.DoneBtnText}>Done</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
}

export default memo(SortByOrder);

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: Colors.blackTransparent,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  sortByContainer: {
    width: "100%",
    backgroundColor: Colors.white,
    padding: 15,
    borderRadius: 20,
  },
  headerViewCont: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerLabel: {
    fontSize: FONT_SIZE.md,
    fontFamily: FONT_FAMILY.medium,
  },
  closeModalBox: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.grayBorder,
    width: 24,
    height: 24,
    borderRadius: 24,
  },
  sortOptions: {
    marginVertical: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  DoneBtn: {
    backgroundColor: Colors.purpleLight,
    borderRadius: 10,
    height: 45,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
  },
  DoneBtnText: {
    fontSize: FONT_SIZE.md,
    fontFamily: FONT_FAMILY.semiBold,
    color: Colors.white,
  },
});
