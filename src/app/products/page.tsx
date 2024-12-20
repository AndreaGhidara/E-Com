import { getAllProducts } from "@/actions/products/productAction";
import FilterSide from "@/components/FilterSide";
import ProductsList from "@/components/ProductsList";
import BreadcrumbTracking from "@/components/utils/BreadcrumbTracking";



export default async function Products() {

    const allDataProducts = await getAllProducts();

    return (
        <section className="container containerSpace mx-auto">
            <div className="border-t-2 pt-2">
                <BreadcrumbTracking />
            </div>
            <div className=" pt-5 grid grid-cols-3 gap-x-5">
                <div className="min-h-[30vh] col-span-1 hidden lg:block ">
                    <div className="h-full">
                        <FilterSide />
                    </div>
                </div>
                <div className="col-span-3 lg:col-span-2">
                    <ProductsList prducts={allDataProducts} />
                </div>
            </div>
        </section>
    )
}
