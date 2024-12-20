import ParamsNamePage from './utils/ParamsNamePage';
import CardProduct from './shop/CardProduct';
import { CardProductsPros } from '@/types/type';


export default function ProductsList({ prducts }: { prducts: CardProductsPros[] }) {

    console.log(prducts);


    // const [open, setOpen] = useState(false);

    // const showDrawer = () => {
    //     setOpen(true);
    // };

    // const onClose = () => {
    //     setOpen(false);
    // };

    // const itemRender: PaginationProps['itemRender'] = (_, type, originalElement) => {
    //     if (type === 'prev') {
    //         return <a>
    //             <Button size='small'>
    //                 Previous
    //             </Button>
    //         </a>;
    //     }
    //     if (type === 'next') {
    //         return <a>
    //             <Button size='small'>
    //                 Next
    //             </Button>
    //         </a>;
    //     }
    //     return originalElement;
    // };


    return (
        <section>
            {/* <div className="flex justify-between items-center">
                <h1 className='text-lg'>{params.categories || "N/A"}</h1>
                <p className='text-xs flex'>Showing 1-10 of 100 Products <span className='hidden lg:block ps-2'>Sort by: <span className='font-bold'>Most Popular</span></span></p>
                <div className='lg:hidden'>
                    <Button onClick={showDrawer} style={{ padding: 0 }} color="default" variant="link"> <SlidersOutlined style={{ fontSize: 20 }} /> </Button>
                </div>
            </div> */}
            <div>
                <ParamsNamePage />
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-5 ">
                {prducts && prducts.length > 0 ? (
                    <>
                        {prducts.map((product: CardProductsPros, index: number) => (
                            <div key={index}>
                                <CardProduct product={product} />
                            </div>
                        ))}
                    </>
                ) : (
                    <div>
                        <p>no product</p>
                    </div>
                )}


            </div>
            {/* <div className='pt-10'>
                <Pagination size="small" align="center" total={200} itemRender={itemRender} showSizeChanger={false} />
            </div>
            <Drawer
                height={"85vh"}
                style={{ borderRadius: "10px 10px 0px 0px" }}
                placement={"bottom"}
                closable={false}
                onClose={onClose}
                open={open}
            >
                <FilterSide />
            </Drawer> */}
        </section>
    )
}
