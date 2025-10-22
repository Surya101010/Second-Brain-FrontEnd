import { ShareIcon } from "../../icons/ShareIcon";

interface CardProps{
    title:string,
    link:string,
    type:"twitter" | "youtube"
}
export function Card(props:CardProps){
    // return <div className="bg-white rounded-lg shadow-md outline-slate-100 p-8 max-w-96 border min-h-48 min-w-8">
    //     <div className="flex justify-between ">
    //         <div className="flex items-center pr-2 ">
    //             <div className="pr-2 text-gray-500"><ShareIcon size="md" /></div>
    //             {props.title}
    //         </div>
    //         <div className="flex items-center">
    //             <div className="pr-2 text-gray-500"><ShareIcon size="md" /></div>
                
    //             <div className="text-gray-500"><ShareIcon size="md" /></div>
    //         </div>
    //     </div>
    //     <div className="pt-4">
    //         {props.type==="youtube" && <iframe  src={props.link.replace("watch","embed").replace("?v=","/")} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>}
    //         {props.type==="twitter" && 
    //         <blockquote className="twitter-tweet">
    //             <a href={props.link.replace("x.com","twitter.com")}></a></blockquote>}
    //     </div>
    // </div>
     return <div>
        <div className="p-4 bg-white rounded-md border-gray-200 border w-72 min-h-48 flex-none">
            <div className="flex justify-between">
                <div className="flex items-center text-md">
                    <div className="text-gray-500 pr-2">
                        <ShareIcon size="sm"/>
                    </div>
                    {props.title}
                </div>
                <div className="flex items-center">
                    <div className="pr-2 text-gray-500">
                        <a href={props.link} target="_blank">
                            <ShareIcon size="sm" />
                        </a>
                    </div>
                    <div className="text-gray-500">
                        <ShareIcon size="sm" />
                    </div>
                </div>
            </div>

            <div className="pt-4">
                {props.type === "youtube" && <iframe className="w-full" src={props.link.replace("watch", "embed").replace("?v=", "/")} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>}

                {props.type === "twitter" && <blockquote className="twitter-tweet">
                    <a href={props.link.replace("x.com", "twitter.com")}></a> 
                </blockquote>}
            </div>

        </div>
    </div>
}