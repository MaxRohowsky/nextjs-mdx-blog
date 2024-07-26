/* 

export default function ClickToCopy() {
    return (
        <div className="">

                <div>
                    <img src="/misc/x-font-editor.png" alt="description" className="" />
                </div>
                <div>
                    <div className="">
                        <h1 className="">Twitter (X) Font Editor</h1>
                        <img src="/misc/icon-x-font-editor.png" className="" />
                    </div>
                    <p className="">Enables 𝗕𝗼𝗹𝗱, 𝐼𝑡𝑎𝑙𝑖𝑐, and <u>Underlined</u> Fonts on Twitter (X) Posts.</p>
                    <ul>
                        <li>
                            <p>Install the Extension from the Chrome Webstore</p>
                        </li>
                        <li>
                            <p>Make your Twitter (X) Posts stand out!</p>
                        </li>
                    </ul>
                    <p>Code and Documentation <a href="https://github.com/maxontech/twitter-font-editor" className="">linked here.</a></p>
                    <p className="">Made by <a href="https://maxontech.io" className=""> maxontech</a></p>
                </div>

        </div>
    );
}
 */




import Image from 'next/image';

export default function XFontEditor() {
    return (
        <>
            <div className="flex justify-center items-center my-4 pb-8">
                <h1 className="text-4xl font-bold">X Font Editor</h1>
                <Image src="/projects/x-font-editor/icon.png" alt={"Linkedin font editor icon"} width={50} height={50} className="ml-2" />
            </div>

            <div className="flex justify-center items-center gap-20">
                <div>
                    <p className="">Enables 𝗕𝗼𝗹𝗱, 𝐼𝑡𝑎𝑙𝑖𝑐, and <u>Underlined</u> Fonts on X Posts.</p>
                    <ul className="list-disc pl-5">
                        <li>
                            <p>Install the Extension from the Chrome Webstore</p>
                        </li>
                        <li>
                            <p>Make your LinkedIn Posts stand out!</p>
                        </li>
                    </ul>
                    <p>Code and Documentation <a href="https://github.com/maxontech/twitter-font-editor" className="text-blue-500 hover:text-blue-700">linked here.</a></p>
                    <p className="mt-4">Made by <a href="https://maxontech.io" className="text-blue-500 hover:text-blue-700"> max</a></p>
                </div>

                <div className="flex flex-col items-center">
                    <Image src="/projects/x-font-editor/x-font-editor.png" width={400} height={400} alt="Explanation how Linkedin Font Editor works" className="shadow" />
                </div>
            </div>
        </>
    );
}