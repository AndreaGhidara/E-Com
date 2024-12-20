import NewProductArrivals from '@/data/productNewArivals.json';
import TopSellingData from '@/data/productTopSelling.json';
import AllProducts from '@/data/ProductMock.json' assert {type: 'json'};



export async function getNewArivals() {

    const newProduct = NewProductArrivals

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(newProduct);
        }, 1000);
    });

};

export async function getTopSelling() {
    const topProductSelling = TopSellingData;

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(topProductSelling);
        }, 1000);
    });
};

export async function getAllProducts() {
    const allDataProducts = AllProducts;

    const allTenItems = allDataProducts.filter((product) => Number(product.id) < 9)


    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(allTenItems);
        }, 1000);
    });
}