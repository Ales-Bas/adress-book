import Link from "next/link";
import Image from 'next/image';

export function Logo() {
    return (
        <Link className="flex items-center space-x-2 " href="/">
            <div className="flex flex-col justify-center items-center mt-1">
                <span className="z-10 font-bold inline-block">Адресная книга</span>
                <Image
                    src="/attachment.jpeg"
                    width={200}
                    height={22}
                    className="-mt-3.5 hidden md:block"
                    alt="logoLine"
                />
            </div>
            <Image
                src="/attachment.png"
                width={198}
                height={37}
                className=" hidden md:block"
                alt="logoBN"
            />
        </Link>
    );
}