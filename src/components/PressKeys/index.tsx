
import { Box } from '@/components/Box'
import { BoxTitle } from '@/components/BoxTitle'
import { ShowKeys } from '@/components/ShowKeys'
import { useEffect, useState } from 'react'

type PressKeysType = "PressKeys"


interface PressKeysProps {
    type?: PressKeysType


}


export const PressKeys = ({ type = "PressKeys" }: PressKeysProps) => {
    const [CurrentKey, setCurrentKey] = useState<{
        key_: string
        keyCode: string
        code: string
    } | undefined>(undefined)
    const FunctionLoadKeyDown = () => {
        window.addEventListener('keydown', (event) => {
            setCurrentKey({
                code: event.code,
                key_: event.key,
                keyCode: `${event.keyCode}`
            })
        })
    }
    useEffect(() => {
        FunctionLoadKeyDown()
    }, [])

    return (<>
        <div className={`PressKeys ${type}`}>
            {
                CurrentKey == undefined
                    ?
                    <>
                        <Box>Press any key to get the keyCode</Box>
                    </>
                    :
                    <>
                        <ShowKeys code={CurrentKey.code} keyCode={CurrentKey.keyCode} key_={CurrentKey.key_} />
                    </>
            }


        </div>




    </>)
}