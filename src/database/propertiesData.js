import { availabilityData, locationData, propertyTypeData } from "../Constants/propertyHelperData";

const propertiesData = [

    //Delhi

    {
        name: "Aurora Studio",
        image: "https://res.cloudinary.com/nakulsharma15/image/upload/v1666009311/Rent%20A%20Property/Delhi/home-design_scxw98.jpg",
        rent: 4000,
        location: locationData.delhi,
        address: "131 Green Valley, " + locationData.delhi,
        availability: availabilityData.immediately,
        type: propertyTypeData.studio,
        isPopular: true
    },
    {
        name: "Galaxy Apartment",
        image: "https://res.cloudinary.com/nakulsharma15/image/upload/v1666075260/Rent%20A%20Property/Delhi/download_rjlqw3_1_io6fzg.png",
        rent: 9000,
        location: locationData.delhi,
        address: "106 Signature Road, " + locationData.delhi,
        availability: availabilityData.within1month,
        type: propertyTypeData.apartment,
        isPopular: false
    },
    {
        name: "Delight Height",
        image: "https://res.cloudinary.com/nakulsharma15/image/upload/v1666082413/Rent%20A%20Property/Delhi/download_ztcoda_1_dswjbu.png",
        rent: 18000,
        location: locationData.delhi,
        address: "108 Silver lane, " + locationData.delhi,
        availability: availabilityData.within3months,
        type: propertyTypeData.floor,
        isPopular: true
    },
    {
        name: "Matrix Home",
        image: "https://res.cloudinary.com/nakulsharma15/image/upload/v1666082592/Rent%20A%20Property/Delhi/download_d2mzcq_g5af3i.png",
        rent: 29000,
        location: locationData.delhi,
        address: "813 Ring Road, " + locationData.delhi,
        availability: availabilityData.after3months,
        type: propertyTypeData.house,
        isPopular: false
    },
    {
        name: "Parx Laureate",
        image: "https://res.cloudinary.com/nakulsharma15/image/upload/v1666083501/Rent%20A%20Property/Hyderabad/pexels-photo-1475938_riskz6_w2n1ya.png",
        rent: 9000,
        location: locationData.delhi,
        address: "148 Model Town, " + locationData.delhi,
        availability: availabilityData.immediately,
        type: propertyTypeData.house,
        isPopular: true
    },
    {
        name: "Lotus Apartments",
        image: "https://res.cloudinary.com/nakulsharma15/image/upload/v1666083436/Rent%20A%20Property/Hyderabad/pexels-photo-271624_sfoymt_f2dwha.png",
        rent: 4000,
        location: locationData.delhi,
        address: "172 Petal Road, " + locationData.delhi,
        availability: availabilityData.after3months,
        type: propertyTypeData.apartment,
        isPopular: false
    },
    {
        name: "Stylome Studios",
        image: "https://res.cloudinary.com/nakulsharma15/image/upload/v1666083436/Rent%20A%20Property/Hyderabad/pexels-photo-271624_sfoymt_f2dwha.png",
        rent: 35000,
        location: locationData.delhi,
        address: "181 Petal Road, " + locationData.delhi,
        availability: availabilityData.within1month,
        type: propertyTypeData.studio,
        isPopular: true
    },
    {
        name: "Lotus Boulevard",
        image: "https://res.cloudinary.com/nakulsharma15/image/upload/v1666083126/Rent%20A%20Property/Bangalore/pexels-photo-2724748_wifmlo_ghch45.png",
        rent: 9000,
        location: locationData.delhi,
        address: "236 Boulevard Street, " + locationData.delhi,
        availability: availabilityData.within1month,
        type: propertyTypeData.floor,
        isPopular: false
    },

    //Mumbai

    {
        name: "Springfield Homes ",
        image: "https://res.cloudinary.com/nakulsharma15/image/upload/v1666082797/Rent%20A%20Property/Mumbai/pexels-photo-1370704_kr34j6_uhxbtw.png",
        rent: 40000,
        location: locationData.mumbai,
        address: "234 Melody Lane, " + locationData.mumbai,
        availability: availabilityData.immediately,
        type: propertyTypeData.house,
        isPopular: false
    },
    {
        name: "Golden Heights",
        image: "https://res.cloudinary.com/nakulsharma15/image/upload/v1666082750/Rent%20A%20Property/Mumbai/pexels-photo-259962_didu7i_fgz9a5.png",
        rent: 30000,
        location: locationData.mumbai,
        address: "816 Golden Heights Road, " + locationData.mumbai,
        availability: availabilityData.within1month,
        type: propertyTypeData.floor,
        isPopular: true
    },
    {
        name: "Sunnyside Apartments",
        image: "https://res.cloudinary.com/nakulsharma15/image/upload/v1666082852/Rent%20A%20Property/Mumbai/pexels-photo-2079234_a5jprg_bf0osb.png",
        rent: 9000,
        location: locationData.mumbai,
        address: "182 Gentle Rain Drive, " + locationData.mumbai,
        availability: availabilityData.within3months,
        type: propertyTypeData.apartment,
        isPopular: false
    },
    {
        name: "Rose Studio",
        image: "https://res.cloudinary.com/nakulsharma15/image/upload/v1666082905/Rent%20A%20Property/Mumbai/pexels-photo-2089698_xtfi3d_bknzht.png",
        rent: 2800,
        location: locationData.mumbai,
        address: "125 Second Street, " + locationData.mumbai,
        availability: availabilityData.after3months,
        type: propertyTypeData.studio,
        isPopular: true
    },
    {
        name: "Dreamville Homes ",
        image: "https://res.cloudinary.com/nakulsharma15/image/upload/v1666083054/Rent%20A%20Property/Bangalore/pexels-photo-323776_dlstxn_bgopic.png",
        rent: 19000,
        location: locationData.mumbai,
        address: "17 Ville Lane, " + locationData.mumbai,
        availability: availabilityData.within1month,
        type: propertyTypeData.house,
        isPopular: false
    },
    {
        name: "Sylvan View",
        image: "https://res.cloudinary.com/nakulsharma15/image/upload/v1666083092/Rent%20A%20Property/Bangalore/pexels-photo-2251247_mpddis_qgwtwl.png",
        rent: 4000,
        location: locationData.mumbai,
        address: "114 Edelco Park, " + locationData.mumbai,
        availability: availabilityData.immediately,
        type: propertyTypeData.floor,
        isPopular: true
    },
    {
        name: "Exotica Apartments",
        image: "https://res.cloudinary.com/nakulsharma15/image/upload/v1666082413/Rent%20A%20Property/Delhi/download_ztcoda_1_dswjbu.png",
        rent: 19000,
        location: locationData.mumbai,
        address: "211 Fresco Street, " + locationData.mumbai,
        availability: availabilityData.after3months,
        type: propertyTypeData.apartment,
        isPopular: false
    },
    {
        name: "Wisteria Studio",
        image: "https://res.cloudinary.com/nakulsharma15/image/upload/v1666009311/Rent%20A%20Property/Delhi/home-design_scxw98.jpg",
        rent: 28000,
        location: locationData.mumbai,
        address: "221 Parkfield Area, " + locationData.mumbai,
        availability: availabilityData.immediately,
        type: propertyTypeData.studio,
        isPopular: true
    },

    //Bangalore

    {
        name: "Greens Kosmos",
        image: "https://res.cloudinary.com/nakulsharma15/image/upload/v1666083092/Rent%20A%20Property/Bangalore/pexels-photo-2251247_mpddis_qgwtwl.png",
        rent: 5000,
        location: locationData.bangalore,
        address: "126 Asphalt Roads, " + locationData.bangalore,
        availability: availabilityData.immediately,
        type: propertyTypeData.studio,
        isPopular: true
    },
    {
        name: "Palm Groove",
        image: "https://res.cloudinary.com/nakulsharma15/image/upload/v1666083126/Rent%20A%20Property/Bangalore/pexels-photo-2724748_wifmlo_ghch45.png",
        rent: 9000,
        location: locationData.bangalore,
        address: "883 Palm Groove Road, " + locationData.bangalore,
        availability: availabilityData.within1month,
        type: propertyTypeData.apartment,
        isPopular: true
    },
    {
        name: "Cleo County",
        image: "https://res.cloudinary.com/nakulsharma15/image/upload/v1666083054/Rent%20A%20Property/Bangalore/pexels-photo-323776_dlstxn_bgopic.png",
        rent: 19000,
        location: locationData.bangalore,
        address: "847 Earthen Area, " + locationData.bangalore,
        availability: availabilityData.within3months,
        type: propertyTypeData.floor,
        isPopular: false
    },
    {
        name: "Orion House",
        image: "https://res.cloudinary.com/nakulsharma15/image/upload/v1666083163/Rent%20A%20Property/Bangalore/pexels-photo-323772_lkliw7_es4kwb.png",
        rent: 40000,
        location: locationData.bangalore,
        address: "100 Golf Course Road, " + locationData.bangalore,
        availability: availabilityData.after3months,
        type: propertyTypeData.house,
        isPopular: false
    },
    {
        name: "Hamlet Studios",
        image: "https://res.cloudinary.com/nakulsharma15/image/upload/v1666082750/Rent%20A%20Property/Mumbai/pexels-photo-259962_didu7i_fgz9a5.png",
        rent: 18000,
        location: locationData.bangalore,
        address: "348 Peacock Street, " + locationData.bangalore,
        availability: availabilityData.after3months,
        type: propertyTypeData.studio,
        isPopular: true
    },
    {
        name: "Elite Apartments",
        image: "https://res.cloudinary.com/nakulsharma15/image/upload/v1666082852/Rent%20A%20Property/Mumbai/pexels-photo-2079234_a5jprg_bf0osb.png",
        rent: 4500,
        location: locationData.bangalore,
        address: "150 Homz Lane, " + locationData.bangalore,
        availability: availabilityData.immediately,
        type: propertyTypeData.apartment,
        isPopular: true
    },
    {
        name: "Zenith Greens",
        image: "https://res.cloudinary.com/nakulsharma15/image/upload/v1666082905/Rent%20A%20Property/Mumbai/pexels-photo-2089698_xtfi3d_bknzht.png",
        rent: 8000,
        location: locationData.bangalore,
        address: "883 Express Road, " + locationData.bangalore,
        availability: availabilityData.immediately,
        type: propertyTypeData.floor,
        isPopular: false
    },
    {
        name: "Matrott House",
        image: "https://res.cloudinary.com/nakulsharma15/image/upload/v1666082797/Rent%20A%20Property/Mumbai/pexels-photo-1370704_kr34j6_uhxbtw.png",
        rent: 15000,
        location: locationData.bangalore,
        address: "199 Skytech Area, " + locationData.bangalore,
        availability: availabilityData.within1month,
        type: propertyTypeData.house,
        isPopular: false
    },

    //Hyderabad

    {
        name: "The Golden Palm",
        image: "https://res.cloudinary.com/nakulsharma15/image/upload/v1666083501/Rent%20A%20Property/Hyderabad/pexels-photo-1475938_riskz6_w2n1ya.png",
        rent: 35000,
        location: locationData.hyderabad,
        address: "182A Palm Street Road, " + locationData.hyderabad,
        availability: availabilityData.immediately,
        type: propertyTypeData.house,
        isPopular: false
    },
    {
        name: "Exotica Towers",
        image: "https://res.cloudinary.com/nakulsharma15/image/upload/v1666083353/Rent%20A%20Property/Hyderabad/pexels-photo-276554_jgyrcp_spl1ze.png",
        rent: 20000,
        location: locationData.hyderabad,
        address: "125EXT Second Street, " + locationData.hyderabad,
        availability: availabilityData.within1month,
        type: propertyTypeData.floor,
        isPopular: false
    },
    {
        name: "Nilgiri Apartments",
        image: "https://res.cloudinary.com/nakulsharma15/image/upload/v1666083436/Rent%20A%20Property/Hyderabad/pexels-photo-271624_sfoymt_f2dwha.png",
        rent: 4000,
        location: locationData.hyderabad,
        address: "813A Apartment Road, " + locationData.hyderabad,
        availability: availabilityData.within3months,
        type: propertyTypeData.apartment,
        isPopular: true
    },
    {
        name: "Golfshire Studio",
        image: "https://res.cloudinary.com/nakulsharma15/image/upload/v1666083422/Rent%20A%20Property/Hyderabad/pexels-photo-2988860_usu6ni_hknfvz.png",
        rent: 9000,
        location: locationData.hyderabad,
        address: "141 Golf Course Road, " + locationData.hyderabad,
        availability: availabilityData.after3months,
        type: propertyTypeData.studio,
        isPopular: true
    },
    {
        name: "Fedora Houses",
        image: "https://res.cloudinary.com/nakulsharma15/image/upload/v1666083501/Rent%20A%20Property/Hyderabad/pexels-photo-1475938_riskz6_w2n1ya.png",
        rent: 15000,
        location: locationData.hyderabad,
        address: "115 Fedora Road, " + locationData.hyderabad,
        availability: availabilityData.after3months,
        type: propertyTypeData.house,
        isPopular: true
    },
    {
        name: "Carmic Towers",
        image: "https://res.cloudinary.com/nakulsharma15/image/upload/v1666082413/Rent%20A%20Property/Delhi/download_ztcoda_1_dswjbu.png",
        rent: 9000,
        location: locationData.hyderabad,
        address: "500 Omaxe Street, " + locationData.hyderabad,
        availability: availabilityData.after3months,
        type: propertyTypeData.floor,
        isPopular: true
    },
    {
        name: "Blossom Apartments",
        image: "https://res.cloudinary.com/nakulsharma15/image/upload/v1666075260/Rent%20A%20Property/Delhi/download_rjlqw3_1_io6fzg.png",
        rent: 15000,
        location: locationData.hyderabad,
        address: "738 Logix Lane, " + locationData.hyderabad,
        availability: availabilityData.within1month,
        type: propertyTypeData.apartment,
        isPopular: false
    },
    {
        name: "Civitech Studio",
        image: "https://res.cloudinary.com/nakulsharma15/image/upload/v1666083126/Rent%20A%20Property/Bangalore/pexels-photo-2724748_wifmlo_ghch45.png",
        rent: 19000,
        location: locationData.hyderabad,
        address: "160 Utopia Park, " + locationData.hyderabad,
        availability: availabilityData.immediately,
        type: propertyTypeData.studio,
        isPopular: false
    },
];

export default propertiesData;
