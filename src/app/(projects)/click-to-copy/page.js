export default function ClickToCopy() {
    return (
        <div className="container mx-auto p-4">

            <div className="flex flex-col items-center">
                <img src="/misc/add-to-chrome.gif" alt="description" className="w-full md:w-1/2" />
            </div>
            <div className="text-center">
                <div className="flex flex-col items-center justify-center">
                    <h1 className="text-4xl font-bold my-4">Click to Copy</h1>
                    <img src="/misc/icon.png" className="w-12 h-12" />
                </div>
                <p className="text-xl my-2">Get started in two simple steps:</p>
                <ol className="list-decimal list-inside">
                    <li>
                        <p>Pin "Click to Copy" to the Chrome toolbar:</p>
                        <p>Click on the puzzle icon, then the pin button.</p>
                    </li>
                    <li>
                        <p>Open "Click to Copy" in any page by clicking the icon!</p>
                    </li>
                </ol>
                <p>Code and Documentation <a href="https://github.com/maxontech/click-to-copy" className="text-blue-500 hover:text-blue-700">linked here.</a></p>
                <p className="mt-4">Made by <a href="https://maxontech.io" className="text-blue-500 hover:text-blue-700"> maxontech</a></p>
            </div>

        </div>
    );
}