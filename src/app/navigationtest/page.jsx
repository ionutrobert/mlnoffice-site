"use client"
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const NavigationTestPage = () => {

    // CLIENT SIDE NAVIGATION
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const q = searchParams.get('q');

    pathname && console.log (pathname)
    q && console.log (q)

    const handleRedirect = () => {
        console.log('clicked redirect')
        router.replace('/') // Redirect to the home page with no back history
        // router.push('/') // Redirect with history
    }
    const handleRefresh = () => {
        console.log('clicked refresh')
        router.refresh() 
    }
    const handleBack = () => {
        console.log('clicked back')
        router.back() 
    }

    return (
        <div>
            <Link href="/" prefetch ={false}>Home</Link>
            <button onClick={handleRedirect}>Redirect</button>
            <button onClick={handleRefresh}>Refresh</button>
            <button onClick={handleBack}>Go back</button>
        </div>
    )
}

export default NavigationTestPage;