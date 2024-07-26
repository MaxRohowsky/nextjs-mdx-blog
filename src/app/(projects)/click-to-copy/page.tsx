import Image from 'next/image';

export default function ClickToCopy() {
    return (
        <>
            <div className="flex justify-center items-center my-4 pb-8">
                <h1 className="text-4xl font-bold">Click to Copy</h1>
                <Image src="/projects/click-to-copy/icon.png" alt={"click to copy icon"} width={50} height={50} className="ml-2" />
            </div>

            <div className="flex justify-center gap-20 ">
                <div className="">
                    <p className="text-xl my-2">Get started in two simple steps:</p>
                    <ol className="list-decimal">
                        <li>
                            <p>Pin "Click to Copy" to the Chrome toolbar:</p>
                            <p>Click on the puzzle icon, then the pin button.</p>
                        </li>
                        <li>
                            <p>Open "Click to Copy" in any page by clicking the icon!</p>
                        </li>
                    </ol>
                    <p>Code and Documentation <a href="https://github.com/maxontech/click-to-copy" className="text-blue-500 hover:text-blue-700">linked here.</a></p>
                    <p className="mt-4">Made by <a href="https://maxontech.io" className="text-blue-500 hover:text-blue-700"> max</a></p>
                </div>

                <div className="flex flex-col items-center">
                    <Image src="/projects/click-to-copy/add-to-chrome.gif" width={300} height={300} alt="description" className="shadow" />
                </div>
            </div>
        </>
    );
}