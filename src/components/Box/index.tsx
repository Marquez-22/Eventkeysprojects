import { ReactNode } from "react"

type BoxType="box"


interface BoxProps {
    type?:BoxType
    children?:ReactNode

}


export const Box =({children, type="box"}:BoxProps)=>{
    return(<>
    <div className={`box ${type}`}>
        {children}


    </div>
    
    
    
    
    </>)
}