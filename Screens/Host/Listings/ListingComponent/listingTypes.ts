export type apartmentDataTypes =  {
    id: string,
    title: string,
    description: string,
    type: string,
    subtype: string,
    location:  {
    address: string,
    city: string,
    state: string,
    latitude: number,
    longitude: number
},
    images: string[],
    rooms: {
      bedrooms: number,
      bathrooms: number,
      livingRooms: number,
      kitchen: number,
      balcony: boolean
    },
    amenities: string[],
    rental: {
      price: number,
      currency: string,
      durationType: string,
      minStayMonths: number,
      maxStayMonths: number
    },
    availability: {
      status: string,
      isAvailable: boolean,
      availableFrom: string
    },
    host: {
      id: string,
      name: string,
      profileImage: string,
      verificationStatus: string,
      rating: number,
      totalReviews: number
    },
    contact: {
      phone: string,
      email: string
    },
    createdAt: string,
    updatedAt: string,
    tags: string[],
    views: number,
    favorites: number
  }
