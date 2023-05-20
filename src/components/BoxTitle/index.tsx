import { ReactNode } from "react"
import { Box } from "../Box"

type BoxTitleType = "BoxTitle"


interface BoxTitleProps {
    type?: BoxTitleType
    children?: ReactNode
    title?: string

}


export const BoxTitle = ({ title = "", children, type = "BoxTitle" }: BoxTitleProps) => {
    return (<>
        <div className={`BoxTitle ${type}`}>
            <h2 className="titulo"> {title}</h2>
            <Box>
                {children}
            </Box>
        </div>
    </>)
}