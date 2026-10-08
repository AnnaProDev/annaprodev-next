import Image from "next/image";
import photo from "../../public/photo-contacts.png"

export default function Home() {
    return (
        <div>
            <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
                <h2>Service</h2>
                <Image src={photo} alt="photo" priority/>
            </main>
        </div>
    );
}