'use client'

import { Breadcrumb } from 'antd'
import { usePathname } from 'next/navigation'
import React from 'react'

export default function BreadcrumbTracking() {

    const pathname = usePathname()

    const pagesInBreadcrumb = pathname.split('/')

    const historyNavigation = pagesInBreadcrumb.map((page, index) => {
        return {
            title: page ? page : 'Home',
            href: `/${pagesInBreadcrumb.slice(0, index + 1).join('/')}`,
        }
    })

    return (
        <Breadcrumb
            className='capitalize text-xs'
            separator=">"
            items={historyNavigation}
        />
    )
}
