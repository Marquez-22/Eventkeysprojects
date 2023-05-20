import { ReactNode } from "react"
import { BoxTitle } from "../BoxTitle"

type ShowKeysType = "ShowKeys"


interface ShowKeysProps {
    type?: ShowKeysType
    key_: string
    keyCode: string
    code: string


}


export const ShowKeys = ({ key_, code, keyCode, type = "ShowKeys" }: ShowKeysProps) => {
    return (<>
        <div className={`ShowKeys ${type}`}>
            <BoxTitle
                title="event.key"
            >
                {key_}
            </BoxTitle>
            <BoxTitle
                title="event.keyCode"
            >
                {keyCode}

            </BoxTitle>
            <BoxTitle
                title="event.code"
            >
                {code}
            </BoxTitle>



        </div>




    </>)
}