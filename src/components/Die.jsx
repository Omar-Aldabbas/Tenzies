import { cn } from "./cn"


export const Die = (props) => {


    return (
        <button className={cn("die"
            , 
        )}>{props.value}</button>
    )
}