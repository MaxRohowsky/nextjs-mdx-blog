

import Image from 'next/image';

export default function LinkedinFontEditor() {
    return (
        <>
            <div className="flex justify-center items-center my-4 pb-8">
                <h1 className="text-4xl font-bold">Linkedin Font Editor</h1>
                <Image src="/projects/linkedin-font-editor/icon.png" alt={"Linkedin font editor icon"} width={50} height={50} className="ml-2" />
            </div>

            <div className="flex justify-center items-center gap-20">
                <div>
                    <p className="">Enables 𝗕𝗼𝗹𝗱, 𝐼𝑡𝑎𝑙𝑖𝑐, and <u>Underlined</u> Fonts on LinkedIn Posts.</p>
                    <ul className="list-disc pl-5">
                        <li>
                            <p>Install the Extension from the Chrome Webstore</p>
                        </li>
                        <li>
                            <p>Make your LinkedIn Posts stand out!</p>
                        </li>
                    </ul>
                    <p>Code and Documentation <a href="https://github.com/maxontech/click-to-copy" className="text-blue-500 hover:text-blue-700">linked here.</a></p>
                    <p className="mt-4">Made by <a href="https://maxontech.io" className="text-blue-500 hover:text-blue-700"> max</a></p>
                </div>

                <div className="flex flex-col items-center">
                    <Image src="/projects/linkedin-font-editor/explainer-img.png" width={400} height={400} alt="Explanation how Linkedin Font Editor works" className="shadow" />
                </div>
            </div>
        </>
    );
}