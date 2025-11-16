import { Text, View, Modal, Pressable, ScrollView } from 'react-native'
import React from 'react'
import { HostListingFormStyles } from '../HostListingFormStyles';
import { AntDesign, MaterialIcons } from '@expo/vector-icons';
import { Colors } from '../../../../../Constants';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { apartmentAmenitiesType } from '../HostListingFormTypes/apartmentAmenitiesTypes';
import { AmenityState } from '../PlaceAmenities';

type ShowMoreAmenitiesModalType = {
    showFullAmenitiesModal:  apartmentAmenitiesType,
    setShowFullAmenitiesModal: React.Dispatch<React.SetStateAction<apartmentAmenitiesType | null>>,
    amenityState: AmenityState,
    toggleAmenity: (category: string, amenity: string) => void,
}

export default function ShowMoreAmenitiesModal({showFullAmenitiesModal, setShowFullAmenitiesModal, amenityState, toggleAmenity}: ShowMoreAmenitiesModalType) {
  const insets = useSafeAreaInsets();

     const closeModal = () => {
    setShowFullAmenitiesModal(null);
  };

  return (
    <Modal
          visible={true}
          onRequestClose={closeModal}
          presentationStyle="overFullScreen"
          transparent={true}
          animationType="slide"
        >
          <View
            style={[{ paddingTop: insets.top}, HostListingFormStyles.seeMoreAmenitiesModal]}
          >
            <View
              style={HostListingFormStyles.moreAmenitiesModalCont}
            >
              <ScrollView showsVerticalScrollIndicator={false}>
                <View
                  style={HostListingFormStyles.moreAmenitiesHeaderCont}
                >
                  <Text
                    style={HostListingFormStyles.moreAmenitiesHeaderText}
                  >
                    {showFullAmenitiesModal.category}
                  </Text>
                  <Pressable
                    onPress={closeModal}
                    style={HostListingFormStyles.closeMoreAmenitiesModalBtn}
                  >
                    <AntDesign name="close" size={12} color={Colors.black} />
                  </Pressable>
                </View>

                <View>
                  {showFullAmenitiesModal.amenities.map((item, index) => {
                    const checked =
                      amenityState[showFullAmenitiesModal.category][item];
                    return (
                      <Pressable
                        onPress={() =>
                          toggleAmenity(showFullAmenitiesModal.category, item)
                        }
                        key={`amenities-${index}`}
                        style={HostListingFormStyles.amenitiesText}
                      >
                        <MaterialIcons
                          name={
                            checked ? "check-box" : "check-box-outline-blank"
                          }
                          size={30}
                          color={checked ? Colors.purpleLight : Colors.gray}
                        />
                        <Text style={HostListingFormStyles.TopTextStyle}>
                          {item}
                        </Text>
                      </Pressable>
                    );
                  })}
                </View>
              </ScrollView>
            </View>
          </View>
        </Modal>
  )
}
