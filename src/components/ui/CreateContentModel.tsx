import { useRef, useState } from "react";
import { CrossIcon } from "../../icons/CrossIcon";
import { Button } from "./Button";
import { Input } from "./Input";
import axios from "axios";
import { BACKEND_URL } from "../../Config";

//@ts-ignore
enum ContentType{
    Youtube="youtube",
    Twitter="twitter"
}
export function CreateContentModel({open,onClose}){
    const titleref=useRef<HTMLInputElement>(null);
    const linkref= useRef<HTMLInputElement>(null);
    const [type,setType] = useState(ContentType.Youtube)
    async function addcontent(){
        const title=titleref.current?.value;
        const link= linkref.current?.value;
        await axios.post(`${BACKEND_URL}`+"api/v1/content",{
    link,title,type
},{
    headers:{
        "Authorization" : localStorage.getItem("token")
    }
})
    }
    return(
        <div>
            {open && <div className="w-screen h-screen bg-slate-500 fixed top-0 left-0 opacity-60 flex justify-center">
                <div className="flex flex-col justify-center">
                    <span className="bg-white p-4 rounded">
                        <div className=" flex justify-end">
                            <div onClick={onClose} className="cursor-pointer ">
                                <CrossIcon />
                            </div>
                            
                        </div>
                        <div>
                            <Input reference={titleref} placeholder={"Title"}/>
                            <Input reference={linkref} placeholder={"Link"} />
                        </div>
                        <div>
                            <h1>Type</h1>
                            <div className="flex gap-2 p-4">
                                <Button text="Youtube" variant={type === ContentType.Youtube ? "primary":"secondary"} onClick={()=>{
                                    setType(ContentType.Youtube)
                                }}></Button>
                                <Button text="Twitter" variant={type === ContentType.Twitter ? "primary":"secondary"} onClick={()=>{
                                    setType(ContentType.Twitter)}}></Button>
                                
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <Button onClick={addcontent} variant="primary" text="Submit" />
                        </div>
                </span>

                </div>
                
            </div>}
        </div>
    )
}
