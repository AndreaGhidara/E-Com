import FilterSide from "@/components/FilterSide";
import ShowCase from "@/components/ShowCase";
import BreadcrumbTracking from "@/components/utils/BreadcrumbTracking";

export default function Categories() {
    return (
        <div className="container containerSpace ">
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
                    <ShowCase />
                </div>
            </div>
        </div>
    )
}
