export default function Socials() {

    function CopyUrl() {
        var link = window.location.href;
        /*console.log(link)*/
        navigator.clipboard.writeText(link)
    }

    return (
        <>  
            <div className="post__socials">

                <a href={`https://twitter.com`} className="post__icon post__twitter">
                    <span><i className="fab fa-twitter" ></i></span>

                </a>

                <a href="https://github.com/codewmax" target="_blank" rel="noreferrer" className="post__icon post__github">
                    <span><i className="fab fa-github" ></i></span>
                </a>

                <a href="https://www.youtube.com/channel/UCB_IfFmew4M6kgeo6yp18Nw?sub_confirmation=1" target="_blank" rel="noreferrer"
                    className="post__icon post__youtube">
                    <span><i className="fab fa-youtube" ></i></span>
                </a>

                <button onClick={() => CopyUrl()} className="post__icon post__copy">
                    <span><i className="fas fa-link"></i></span>
                </button>

            </div>

        </>
    )
}