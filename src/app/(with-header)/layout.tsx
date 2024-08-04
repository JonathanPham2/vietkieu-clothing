import Header from "@/components/header";

interface WithHeaderLayoutProps {
    children: React.ReactNode
}
export default function WithHeaderLayout({children}: WithHeaderLayoutProps) {
    return (<div>
        <Header />
        {children}
      </div>)
}