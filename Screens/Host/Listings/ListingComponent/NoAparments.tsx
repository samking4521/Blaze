import {  Text, View } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { Colors } from '../../../../Constants'
import { ListingsStyle } from '../ListingsStyle'

export default function NoAparments({ noApartmentsHeight }: {noApartmentsHeight: number }) {
    console.log("Final height: ", noApartmentsHeight)
  return (
    <View style={[{height: noApartmentsHeight}, ListingsStyle.noApartmentsContainer]}>
            <MaterialCommunityIcons name="home-plus" size={200} color={Colors.gray} style={ListingsStyle.homeIcon} />
            <View style={{gap: 5}}>
                 <Text style={ListingsStyle.noApartmentsLabelText}>You don&apos;t have any listings yet</Text>
                 <Text style={ListingsStyle.noApartmentsDescText}>Add your first property so renters can find and book it.</Text>
            </View>
            
    </View>
  )
}

