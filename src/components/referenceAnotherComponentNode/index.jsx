import React ,{useRef, forwardRef} from 'react'


export const MyInput = forwardRef((props,ref) => {
  return <input  ref={ref} />;
});
const RefComponent = () => {
  const inputRef = useRef(null)
  return (
    <>
        <form>
            <MyInput ref={inputRef}/>
            <button onClick={(e)=>{
                  e.preventDefault()
                  inputRef.current.focus()

            }}  >Focus</button>
        </form>
    </>
  )
}


export default RefComponent