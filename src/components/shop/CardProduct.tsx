import { Rate } from 'antd'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface CardProductsProsp {
    id: string,
    name: string,
    typeClothing: string,
    colors: string[],
    price: string,
    discount: string,
    size: string,
    img: string,
    review: number,
    storeQuantity: string,
    isNewProduct: string,
    createDate: string,
    sex: string
}

export default function CardProduct({ product }: { product: CardProductsProsp }) {

    function calcDiscount(price: string, discount: string) {

        const numberPriceInEur = Number(price.replace("€", "").trim());
        const discountValue = Number(discount);
        if (isNaN(numberPriceInEur) || isNaN(discountValue)) {
            throw new Error("Price or discount is not a valid number");
        }
        const totalDiscount = (numberPriceInEur * discountValue) / 100;
        const finalPrice = numberPriceInEur - totalDiscount
        return finalPrice.toFixed(2);
    }

    return (
        <div>
            <Link href={`/products/${product.name}`} className='text-black'>
                <picture className="w-full h-full rounded-xl">
                    <Image
                        src="/images/t-shirt.png"
                        width={0}
                        height={0}
                        sizes="100vw"
                        className="rounded-2xl aspect-square"
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        alt="Picture"
                        priority
                    />
                </picture>
                <div className='flex flex-col gap-2 pt-2'>
                    <h1>{product.name}</h1>
                    <Rate style={{ fontSize: 15 }} disabled defaultValue={product.review} />
                    <p>{product.discount ? `${calcDiscount(product.price, product.discount)}€` : product.price} </p>
                </div>
            </Link>
        </div>
    )
}
