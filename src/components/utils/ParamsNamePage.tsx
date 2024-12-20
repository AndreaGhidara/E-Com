'use client'

import { usePathname } from "next/navigation";

export default function ParamsNamePage() {
    const url = usePathname();

    const namePage = url.split("/").filter(Boolean).toString()

    return (
        <h1 className='text-lg'>{namePage || "n/A"}</h1>
    )
}
