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
    },
    {
        name: "Galaxy Apartment",
        image: "https://res.cloudinary.com/nakulsharma15/image/upload/v1666075260/Rent%20A%20Property/Delhi/download_rjlqw3_1_io6fzg.png",
        rent: 9000,
        location: locationData.delhi,
        address: "106 Signature Road, " + locationData.delhi,
        availability: availabilityData.within1month,
        type: propertyTypeData.apartment,
    },
    {
        name: "Delight Height",
        image: "https://res.cloudinary.com/nakulsharma15/image/upload/v1666082413/Rent%20A%20Property/Delhi/download_ztcoda_1_dswjbu.png",
        rent: 18000,
        location: locationData.delhi,
        address: "108 Silver lane, " + locationData.delhi,
        availability: availabilityData.within3months,
        type: propertyTypeData.floor,
    },
    {
        name: "Matrix Home",
        image: "https://res.cloudinary.com/nakulsharma15/image/upload/v1666082592/Rent%20A%20Property/Delhi/download_d2mzcq_g5af3i.png",
        rent: 29000,
        location: locationData.delhi,
        address: "813 Ring Road, " + locationData.delhi,
        availability: availabilityData.after3months,
        type: propertyTypeData.house,
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
    },
    {
        name: "Golden Heights",
        image: "https://res.cloudinary.com/nakulsharma15/image/upload/v1666082750/Rent%20A%20Property/Mumbai/pexels-photo-259962_didu7i_fgz9a5.png",
        rent: 30000,
        location: locationData.mumbai,
        address: "816 Golden Heights Road, " + locationData.mumbai,
        availability: availabilityData.within1month,
        type: propertyTypeData.floor,
    },
    {
        name: "Sunnyside Apartments",
        image: "https://res.cloudinary.com/nakulsharma15/image/upload/v1666082852/Rent%20A%20Property/Mumbai/pexels-photo-2079234_a5jprg_bf0osb.png",
        rent: 9000,
        location: locationData.mumbai,
        address: "182 Gentle Rain Drive, " + locationData.mumbai,
        availability: availabilityData.within3months,
        type: propertyTypeData.apartment,
    },
    {
        name: "Rose Studio",
        image: "https://res.cloudinary.com/nakulsharma15/image/upload/v1666082905/Rent%20A%20Property/Mumbai/pexels-photo-2089698_xtfi3d_bknzht.png",
        rent: 2800,
        location: locationData.mumbai,
        address: "125 Second Street, " + locationData.mumbai,
        availability: availabilityData.after3months,
        type: propertyTypeData.studio,
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
    },
    {
        name: "Palm Groove",
        image: "https://res.cloudinary.com/nakulsharma15/image/upload/v1666083126/Rent%20A%20Property/Bangalore/pexels-photo-2724748_wifmlo_ghch45.png",
        rent: 9000,
        location: locationData.bangalore,
        address: "883 Palm Groove Road, " + locationData.bangalore,
        availability: availabilityData.within1month,
        type: propertyTypeData.apartment,
    },
    {
        name: "Cleo County",
        image: "https://res.cloudinary.com/nakulsharma15/image/upload/v1666083054/Rent%20A%20Property/Bangalore/pexels-photo-323776_dlstxn_bgopic.png",
        rent: 19000,
        location: locationData.bangalore,
        address: "847 Earthen Area, " + locationData.bangalore,
        availability: availabilityData.within3months,
        type: propertyTypeData.floor,
    },
    {
        name: "Orion House",
        image: "https://res.cloudinary.com/nakulsharma15/image/upload/v1666083163/Rent%20A%20Property/Bangalore/pexels-photo-323772_lkliw7_es4kwb.png",
        rent: 40000,
        location: locationData.bangalore,
        address: "100 Golf Course Road, " + locationData.bangalore,
        availability: availabilityData.after3months,
        type: propertyTypeData.house,
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
    },
    {
        name: "Exotica Towers",
        image: "https://res.cloudinary.com/nakulsharma15/image/upload/v1666083353/Rent%20A%20Property/Hyderabad/pexels-photo-276554_jgyrcp_spl1ze.png",
        rent: 20000,
        location: locationData.hyderabad,
        address: "125EXT Second Street, " + locationData.hyderabad,
        availability: availabilityData.within1month,
        type: propertyTypeData.floor,
    },
    {
        name: "Nilgiri Apartments",
        image: "https://res.cloudinary.com/nakulsharma15/image/upload/v1666083436/Rent%20A%20Property/Hyderabad/pexels-photo-271624_sfoymt_f2dwha.png",
        rent: 4000,
        location: locationData.hyderabad,
        address: "813A Apartment Road, " + locationData.hyderabad,
        availability: availabilityData.within3months,
        type: propertyTypeData.apartment,
    },
    {
        name: "Golfshire Studio",
        image: "https://res.cloudinary.com/nakulsharma15/image/upload/v1666083422/Rent%20A%20Property/Hyderabad/pexels-photo-2988860_usu6ni_hknfvz.png",
        rent: 9000,
        location: locationData.hyderabad,
        address: "141 Golf Course Road, " + locationData.hyderabad,
        availability: availabilityData.after3months,
        type: propertyTypeData.studio,
    },
];

export default propertiesData;
