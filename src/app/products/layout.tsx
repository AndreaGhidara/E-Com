import type { Metadata } from "next";


export const metadata: Metadata = {
    title: "Products",
    description: "Products e-commerce",
};

export default function ProductsLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <section>
            {children}
        </section>
    )
}
