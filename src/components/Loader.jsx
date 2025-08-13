
import { useState ,useEffect} from "react"


export default function Loader({onComplete}) {

    const [text, setText] = useState("")
    const fullText = '<> LNDev </>'
       useEffect(() => {
        let index  = 0
        const interval = setInterval(() => {
            setText(fullText.substring(0, index))
            index++
            if (index > fullText.length) {
                clearInterval(interval)

                setTimeout(() => {
                    onComplete()
                }, 1000)
            }
        },100)

        return () => clearInterval(interval)
    },[])


  return (
    <div className='fixed inset-0 z-50 bg-purple-100 text-gray-900 flex flex-col items-center justify-center'>

        <div className='text-3xl mb-4 md:text-4xl font-mono font-bold'>
           {text}<span className='animate-blink ml-1'>|</span>
        </div>

        <div className='w-[200px] h-[2px] bg-gray-800 rounded relative overflow-hidden'>
            <div className='w-[40%] h-full bg-primary shadow[0_0_15px_#3b82f6 animate-loading-bar'>
                {" "}
            </div>
        </div>
    </div>
  )
}
