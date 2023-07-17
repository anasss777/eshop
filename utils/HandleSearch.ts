import { Product } from "@/types/Product";

const handleSearch = (searchTerm:string, products:Product[]) => {
    const searchResult:Product[] = [];

    products.map(product => {
        if (product.name.toLowerCase().includes(searchTerm.toLowerCase())) {
            searchResult.push(product);
        }
        else if (product.category.name.toLowerCase().includes(searchTerm.toLowerCase())) {
            searchResult.push(product);
        }
        else if (product.subcategory.name.toLowerCase().includes(searchTerm.toLowerCase())) {
            searchResult.push(product);
        }
    })

    return searchResult;
}

export default handleSearch;