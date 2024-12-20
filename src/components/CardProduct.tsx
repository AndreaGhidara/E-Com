import Image from "next/image";

export default function CardProduct() {
    return (
        <div className="w-full h-full rounded-xl">
            <Image
                src="/images/t-shirt.png"
                width={0}
                height={0}
                sizes="100vw"
                className="rounded-2xl"
                style={{ width: '100%', height: '100%', objectFit: 'cover'}}
                alt="Picture"
            />
        </div>
    )
}
