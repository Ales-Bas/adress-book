import Link from "next/link";
import Image from 'next/image';

export function Logo() {
    return (
        < >
            <Link className="flex items-center space-x-2 " href="/">
                <div className="printlogo flex flex-col justify-center items-center mt-1">
                    <Image
                        src="/attachment.jpeg"
                        width={200}
                        height={22}
                        className=" hidden md:block"
                        alt="logoLine"
                    />
                    <Image
                        src="/attachment.png"
                        width={198}
                        height={37}
                        className=" -mt-2 z-10 hidden md:block"
                        alt="logoBN"
                    />
                </div>
            </Link>
        </>
    );
}