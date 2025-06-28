import { useEffect, useState } from 'react'
import { useRouter } from 'next/router';
import Image from 'next/image';

const Logo = ({ theme, setToggle }) => {
    const [mounted, setMounted] = useState(false);
    const router = useRouter();
    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <button
            data-umami-event={`Click Logo`}
            onClick={() => { setToggle(false); router.push('/'); }}
            aria-label='go home'
            className="w-fit mt-2 "
        >
            <Image
                width={70}
                height={70}
                src="/favicon/musadaq.jpg"
                alt="Musadaq Hanif"
                className="rounded-full object-cover"
                loading="eager"
            />
        </button>
    )
}
export default Logo