const rent = ({ rent }, array) => {
    const temp = [...array];

    let lowerBound = rent === 5000 ? 0 : rent / 2;
    let upperBound = rent;

    if (rent === 0) {
        return temp;
    }

    else if (rent > 20000) {
        return rent === 0 ? temp : temp.filter((prod) => Number(prod.rent) > Number(rent));
    }
    else {
        return rent === 0 ? temp : temp.filter((prod) => prod.rent >= lowerBound && prod.rent <= upperBound);
    }

}

const location = ({ location }, array) => {

    if (location === "Any") {
        return array
    }

    else {
        const temp = [...array];
        return location === "" ? temp : temp.filter((prod) => prod.location === location);
    }

}

const propertyType = ({ propertyType }, array) => {

    if (propertyType === "Any") {
        return array
    }

    else {
        const temp = [...array];
        return propertyType === "" ? temp : temp.filter((prod) => prod.type === propertyType);
    }
}

const availability = ({ availability }, array) => {

    if (availability === "Any") {
        return array
    }

    else {
        const temp = [...array];
        return availability === "" ? temp : temp.filter((prod) => prod.availability === availability);
    }

}


const applyFilters = (state, ...args) => (ProductList) => {
    return args.reduce((acc, curr) => {
        return curr(state, acc)
    }, ProductList)
}

export const getFilteredProductList = (state, ProductList) => applyFilters(state, rent, location, propertyType, availability)(ProductList)

