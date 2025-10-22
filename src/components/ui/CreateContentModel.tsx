import { CrossIcon } from "../../icons/CrossIcon";

export function CreateContentModel({open,onClose}){
    return(
        <div>
            {open && <div className="w-screen h-screen bg-slate-500 fixed top-0 left-0 opacity-60 flex justify-center">
                <div className="flex flex-col justify-center">
                    <span className="bg-white p-4 rounded">
                        <div>
                            <CrossIcon />
                        </div>
                </span>

                </div>
                
            </div>}
        </div>
    )
}