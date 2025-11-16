import { SafeAreaView } from "react-native-safe-area-context";
import { ListingsStyle } from "./ListingsStyle";
import ApartmentsList from "./ListingComponent/ApartmentsList";

export default function Listings() {
  return (
    <SafeAreaView style={ListingsStyle.container} edges={['top']}>
           
           <ApartmentsList/>
          
     
    </SafeAreaView>
  );
}

