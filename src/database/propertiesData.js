const availabilityData = {
    immediately: "Immediately",
    within1month: "Within 1 Month",
    within3months: "Within 3 Months",
    after3months: "After 3 Months",
}

const locationData = {
    delhi: "Delhi, India",
    mumbai: "Mumbai, India",
    bangalore: "Bangalore, India",
    hyderabad: "Hyderabad, India"
}

const propertyTypeData = {
    studio: "Studio",
    apartment: "Apartment",
    floor: "Independent Floor",
    house: "Independent House"
}

const propertiesData = [
    {
        name: "Aurora Studio",
        image: "https://res.cloudinary.com/nakulsharma15/image/upload/v1666009311/Rent%20A%20Property/Delhi/home-design_scxw98.jpg",
        rent: 4000,
        location: locationData.delhi,
        address: "131 Green Valley, " + locationData.delhi,
        availability: availabilityData.immediately,
        type: propertyTypeData.studio,
    },
    {
        name: "Galaxy Apartment",
        image: "https://res.cloudinary.com/nakulsharma15/image/upload/v1666009176/Rent%20A%20Property/Delhi/download_rjlqw3.jpg",
        rent: 9000,
        location: locationData.delhi,
        address: "106 Signature Road, " + locationData.delhi,
        availability: availabilityData.within1month,
        type: propertyTypeData.apartment,
    },
    {
        name: "Delight Height",
        image: "https://res.cloudinary.com/nakulsharma15/image/upload/v1666009176/Rent%20A%20Property/Delhi/download_rjlqw3.jpg",
        rent: 18000,
        location: locationData.delhi,
        address: "108 Silver lane, " + locationData.delhi,
        availability: availabilityData.within3months,
        type: propertyTypeData.floor,
    },
    {
        name: "Matrix Home",
        image: "https://res.cloudinary.com/nakulsharma15/image/upload/v1666009097/Rent%20A%20Property/Delhi/download_d2mzcq.jpg",
        rent: 29000,
        location: locationData.delhi,
        address: "813 Ring Road, " + locationData.delhi,
        availability: availabilityData.after3months,
        type: propertyTypeData.house,
    },
    {
        name: "Springfield Homes ",
        image: "https://res.cloudinary.com/nakulsharma15/image/upload/v1666069828/Rent%20A%20Property/Mumbai/pexels-photo-1370704_kr34j6.jpg",
        rent: 40000,
        location: locationData.mumbai,
        address: "234 Melody Lane, " + locationData.mumbai,
        availability: availabilityData.immediately,
        type: propertyTypeData.house,
    },
    {
        name: "Golden Heights",
        image: "https://res.cloudinary.com/nakulsharma15/image/upload/v1666069843/Rent%20A%20Property/Mumbai/pexels-photo-259962_didu7i.jpg",
        rent: 30000,
        location: locationData.mumbai,
        address: "816 Golden Heights Road, " + locationData.mumbai,
        availability: availabilityData.within1month,
        type: propertyTypeData.floor,
    },
    {
        name: "Sunnyside Apartments",
        image: "https://res.cloudinary.com/nakulsharma15/image/upload/v1666069821/Rent%20A%20Property/Mumbai/pexels-photo-2079234_a5jprg.jpg",
        rent: 9000,
        location: locationData.mumbai,
        address: "182 Gentle Rain Drive, " + locationData.mumbai,
        availability: availabilityData.within3months,
        type: propertyTypeData.apartment,
    },
    {
        name: "Rose Studio",
        image: "https://res.cloudinary.com/nakulsharma15/image/upload/v1666069807/Rent%20A%20Property/Mumbai/pexels-photo-2089698_xtfi3d.jpg",
        rent: 2800,
        location: locationData.mumbai,
        address: "125 Second Street, " + locationData.mumbai,
        availability: availabilityData.after3months,
        type: propertyTypeData.studio,
    },
    {
        name: "Greens Kosmos",
        image: "https://res.cloudinary.com/nakulsharma15/image/upload/v1666070949/Rent%20A%20Property/Bangalore/pexels-photo-2251247_mpddis.jpg",
        rent: 5000,
        location: locationData.bangalore,
        address: "126 Asphalt Roads, " + locationData.bangalore,
        availability: availabilityData.immediately,
        type: propertyTypeData.studio,
    },
    {
        name: "Palm Groove Apartments",
        image: "https://res.cloudinary.com/nakulsharma15/image/upload/v1666070942/Rent%20A%20Property/Bangalore/pexels-photo-2724748_wifmlo.webp",
        rent: 9000,
        location: locationData.bangalore,
        address: "883 Palm Groove Road, " + locationData.bangalore,
        availability: availabilityData.within1month,
        type: propertyTypeData.apartment,
    },
    {
        name: "Cleo County",
        image: "https://res.cloudinary.com/nakulsharma15/image/upload/v1666070962/Rent%20A%20Property/Bangalore/pexels-photo-323776_dlstxn.webp",
        rent: 19000,
        location: locationData.bangalore,
        address: "847 Earthen Area, " + locationData.bangalore,
        availability: availabilityData.within3months,
        type: propertyTypeData.floor,
    },
    {
        name: "Orion House",
        image: "https://res.cloudinary.com/nakulsharma15/image/upload/v1666070934/Rent%20A%20Property/Bangalore/pexels-photo-323772_lkliw7.webp",
        rent: 40000,
        location: locationData.bangalore,
        address: "100 Golf Course Road, " + locationData.bangalore,
        availability: availabilityData.after3months,
        type: propertyTypeData.house,
    },
    {
        name: "The Golden Palm",
        image: "https://res.cloudinary.com/nakulsharma15/image/upload/v1666071967/Rent%20A%20Property/Hyderabad/pexels-photo-1475938_riskz6.jpg",
        rent: 35000,
        location: locationData.hyderabad,
        address: "182A Palm Street Road, " + locationData.hyderabad,
        availability: availabilityData.immediately,
        type: propertyTypeData.house,
    },
    {
        name: "Exotica Towers",
        image: "https://res.cloudinary.com/nakulsharma15/image/upload/v1666072123/Rent%20A%20Property/Hyderabad/pexels-photo-276554_jgyrcp.jpg",
        rent: 20000,
        location: locationData.hyderabad,
        address: "125EXT Second Street, " + locationData.hyderabad,
        availability: availabilityData.within1month,
        type: propertyTypeData.floor,
    },
    {
        name: "Nilgiri Apartments",
        image: "https://res.cloudinary.com/nakulsharma15/image/upload/v1666071974/Rent%20A%20Property/Hyderabad/pexels-photo-271624_sfoymt.webp",
        rent: 4000,
        location: locationData.hyderabad,
        address: "813A Apartment Road, " + locationData.hyderabad,
        availability: availabilityData.within3months,
        type: propertyTypeData.apartment,
    },
    {
        name: "Golfshire Studio",
        image: "https://res.cloudinary.com/nakulsharma15/image/upload/v1666071989/Rent%20A%20Property/Hyderabad/pexels-photo-2988860_usu6ni.jpg",
        rent: 9000,
        location: locationData.hyderabad,
        address: "141 Golf Course Road, " + locationData.hyderabad,
        availability: availabilityData.after3months,
        type: propertyTypeData.studio,
    },
];

export default propertiesData;
