const rent = ({rent},array) => {
    const temp = [...array];

    let lowerBound = rent/2;
    let upperBound = rent;

    console.log(rent);

    if(rent > 20000) {
        return rent===0 ? temp : temp.filter((prod) => Number(prod.rent) > Number(rent));
    }

    else {
        return rent===0 ? temp : temp.filter((prod) => prod.rent >= lowerBound && prod.rent <= upperBound); 
    }

  
}


const applyFilters = (state,...args)=>(ProductList)=>{
    return args.reduce((acc,curr)=>{
        return curr(state,acc)
    },ProductList)
}

export const getFilteredProductList = (state,ProductList)=> applyFilters(state,rent)(ProductList)

