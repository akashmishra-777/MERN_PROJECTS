import { useRef, useState } from 'react'


function App() {
  const [inp1,setInp1] = useState()
  const [inp2,setInp2] = useState(0)
  let [operator,setOperator] = useState()
  const inperef1 = useRef()
  const inperef2 = useRef()

  function InputHandler(e){
    setInp2(e.target.value)
  }


  function ClearAll(){
    setInp1(" ")
    setInp2(" ")
    setOperator(" ")
  }

  
  function add(){
    setInp1(inp2)
    setInp2(" ")
    inperef2.current.focus()
    setOperator("+")
    console.log(typeof(operator[0]));
  }

  
  

  function substract(){
    setInp1(inp2)
    setInp2(" ")
    inperef2.current.focus()
    setOperator("-")
  }


  function multiply(){
    setInp1(inp2)
    setInp2(" ")
    inperef2.current.focus()
    setOperator("×")
  }


  function divide(){
    setInp1(inp2)
    setInp2(" ")
    inperef2.current.focus()
    setOperator("/")
  }

  function modulo(){
    setInp1(inp2)
    setInp2(" ")
    inperef2.current.focus()
    setOperator("-");
  }


  function final(){
   
    switch(operator){
      case "+":{
      setInp1(Number(inp1)+Number(inp2))
      setInp2(" ") 
      inperef2.current.focus()
        break;
      }
      case "-":{
        setInp1(Number(inp1)-Number(inp2))
      setInp2(" ") 
      inperef2.current.focus()
        break;
      }
      case "×":{
        setInp1(Number(inp1)*Number(inp2))
      setInp2(" ") 
      inperef2.current.focus()
        break;
      }
      case "/":{
        setInp1(Number(inp1)/Number(inp2))
      setInp2(" ") 
      inperef2.current.focus()
        break;
      }
      case "%":{
        setInp1(Number(inp1)%Number(inp2))
      setInp2(" ") 
      inperef2.current.focus()
        break;
      }
      default:{
        alert("Invalid Operation")
        break;
      }
    }
  }
   

  return (
    <>
   <div className='bg-black text-white border-l-[0px]  border-r-[0px] flex justify-center items-center h-screen p-2 '>
    <div className='h-[500px] w-[350px] md:bg-black border sm:border-grey-400 sm:border-t-gray-700 sm:border-l-gray-700 border-t-[2px] sm:border-l-[2px] sm:border-b-[3px] sm:border-r-[3px] rounded-lg overflow-hidden flex flex-col md:shadow-[0px_0px_5px_white] select-none font-bold text-[18px] '>

    <div className='bg-black h-[30%] flex flex-col justify-end mb-2 '>
   
    <input type="number" ref={inperef1} value={inp1}  autoFocus={false} className='text-end bg-black outline-none caret-transparent select-none selection:bg-transparent  text-white text-[35px] -pr-3 ml-3' readOnly={true} />
    
   <div className='flex flex-row'>
   <input type="text" ref={inperef2} value={operator} autoFocus={true} className='p-[0px] text-end bg-black outline-none ml-3 text-white selection:bg-transparent text-[20px]  w-[5%]' readOnly={true}/>
   <input type="text" ref={inperef2} value={inp2}  onChange={InputHandler}  autoFocus={true} className=' text-end bg-black outline-none ml-3 text-white selection:bg-transparent text-[35px] pr-3 w-[95%]'/>
   </div>
    </div>

    <div className='bg-[#22252D] rounded-tl-[10px] rounded-tr-[10px] h-[75%] flex flex-col pb-2 pl-1 pr-1 pt-0.5'>
    <div className='flex flex-row justify-evenly  '>
        <div onClick={ClearAll} className="bg-black w-[23%] h-[62.5px] mt-2.5 ml-2 text-center flex justify-center items-center mr-2 cursor-pointer hover:bg-slate-800 rounded-[10px] shadow-[0px_0px_2px_black] transition-all border-r-[1px] border-b-[1px] border-gray-700"><span className='scale-[.9]'>AC</span></div>
        <div onClick={divide} className="bg-black w-[23%] h-[62.5px] mt-2.5 ml-2 text-center flex justify-center items-center mr-2 cursor-pointer hover:bg-slate-800 rounded-[10px] shadow-[0px_0px_2px_black] transition-all border-r-[1px] border-b-[1px] border-gray-700">/</div>
        <div onClick={modulo}  className="bg-black w-[23%] h-[62.5px] mt-2.5 ml-2 text-center flex justify-center items-center mr-2 cursor-pointer hover:bg-slate-800 rounded-[10px] shadow-[0px_0px_2px_black] transition-all border-r-[1px] border-b-[1px] border-gray-700">%</div>
        <div onClick={modulo}  className="bg-black w-[23%] h-[62.5px] mt-2.5 ml-2 text-center flex justify-center items-center mr-2 cursor-pointer hover:bg-slate-800 rounded-[10px] shadow-[0px_0px_2px_black] transition-all border-r-[1px] border-b-[1px] border-gray-700"><span className='scale-[1.3]'>÷</span></div>
      </div>

      <div className='flex flex-row justify-evenly  '>
        <div onClick={()=>setInp2(inp2+"7")} className="bg-black w-[23%] h-[62.5px] mt-2.5 ml-2 text-center flex justify-center items-center mr-2 cursor-pointer hover:bg-slate-800 rounded-[10px] shadow-[0px_0px_2px_black] transition-all border-r-[1px] border-b-[1px] border-gray-700">7</div>
        <div onClick={()=>setInp2(inp2+"8")} className="bg-black w-[23%] h-[62.5px] mt-2.5 ml-2 text-center flex justify-center items-center mr-2 cursor-pointer hover:bg-slate-800 rounded-[10px] shadow-[0px_0px_2px_black] transition-all border-r-[1px] border-b-[1px] border-gray-700">8</div>
        <div onClick={()=>setInp2(inp2+"9")} className="bg-black w-[23%] h-[62.5px] mt-2.5 ml-2 text-center flex justify-center items-center mr-2 cursor-pointer hover:bg-slate-800 rounded-[10px] shadow-[0px_0px_2px_black] transition-all border-r-[1px] border-b-[1px] border-gray-700">9</div>
        <div onClick={multiply}  className="bg-black w-[23%] h-[62.5px] mt-2.5 ml-2 text-center flex justify-center items-center mr-2 cursor-pointer hover:bg-slate-800 rounded-[10px] shadow-[0px_0px_2px_black] transition-all border-r-[1px] border-b-[1px] border-gray-700"><span className='scale-[1.1]'>×</span></div>
      </div>

      <div className='flex flex-row justify-evenly'>
        <div onClick={()=>setInp2(inp2+"4")} className="bg-black w-[23%] h-[62.5px] mt-2.5 ml-2 text-center flex justify-center items-center mr-2 cursor-pointer hover:bg-slate-800 rounded-[10px] shadow-[0px_0px_2px_black] transition-all border-r-[1px] border-b-[1px] border-gray-700">4</div>
        <div onClick={()=>setInp2(inp2+"5")} className="bg-black w-[23%] h-[62.5px] mt-2.5 ml-2 text-center flex justify-center items-center mr-2 cursor-pointer hover:bg-slate-800 rounded-[10px] shadow-[0px_0px_2px_black] transition-all border-r-[1px] border-b-[1px] border-gray-700">5</div>
        <div onClick={()=>setInp2(inp2+"6")} className="bg-black w-[23%] h-[62.5px] mt-2.5 ml-2 text-center flex justify-center items-center mr-2 cursor-pointer hover:bg-slate-800 rounded-[10px] shadow-[0px_0px_2px_black] transition-all border-r-[1px] border-b-[1px] border-gray-700">6</div>
        <div onClick={substract}  className="bg-black w-[23%] h-[62.5px] mt-2.5 ml-2 text-center flex justify-center items-center mr-2 cursor-pointer hover:bg-slate-800 rounded-[10px] shadow-[0px_0px_2px_black] transition-all border-r-[1px] border-b-[1px] border-gray-700"><span className='scale-[1.5]'>-</span></div>
      </div>


      <div className='flex flex-row justify-evenly  '>
        <div onClick={()=>setInp2(inp2+"3")} className="bg-black w-[23%] h-[62.5px] mt-2.5 ml-2 text-center flex justify-center items-center mr-2 cursor-pointer hover:bg-slate-800 rounded-[10px] shadow-[0px_0px_2px_black] transition-all border-r-[1px] border-b-[1px] border-gray-700">3</div>
        <div onClick={()=>setInp2(inp2+"2")} className="bg-black w-[23%] h-[62.5px] mt-2.5 ml-2 text-center flex justify-center items-center mr-2 cursor-pointer hover:bg-slate-800 rounded-[10px] shadow-[0px_0px_2px_black] transition-all border-r-[1px] border-b-[1px] border-gray-700">2</div>
        <div onClick={()=>setInp2(inp2+"1")} className="bg-black w-[23%] h-[62.5px] mt-2.5 ml-2 text-center flex justify-center items-center mr-2 cursor-pointer hover:bg-slate-800 rounded-[10px] shadow-[0px_0px_2px_black] transition-all border-r-[1px] border-b-[1px] border-gray-700">1</div>
        <div  onClick={add} className="bg-black w-[23%] h-[62.5px] mt-2.5 ml-2 text-center flex justify-center items-center mr-2 cursor-pointer hover:bg-slate-800 rounded-[10px] shadow-[0px_0px_2px_black] transition-all border-r-[1px] border-b-[1px] border-gray-700"><span className='scale-[1.1]'>+</span></div>
      </div>

      <div className='flex flex-row justify-evenly  '>
        <div className="bg-black w-[23%] h-[62.5px] mt-2.5 ml-2 text-center flex justify-center items-center mr-2 cursor-pointer hover:bg-slate-800 rounded-[10px] shadow-[0px_0px_2px_black] transition-all border-r-[1px] border-b-[1px] border-gray-700"><span className='scale-[.9]'>↺</span></div>
        <div onClick={()=>setInp2(inp2+"00")}  className="bg-black w-[23%] h-[62.5px] mt-2.5 ml-2 text-center flex justify-center items-center mr-2 cursor-pointer hover:bg-slate-800 rounded-[10px] shadow-[0px_0px_2px_black] transition-all border-r-[1px] border-b-[1px] border-gray-700">00</div>
        <div onClick={()=>setInp2(inp2+".")} className="bg-black w-[23%] h-[62.5px] mt-2.5 ml-2 text-center flex justify-center items-center mr-2 cursor-pointer hover:bg-slate-800 rounded-[10px] shadow-[0px_0px_2px_black] transition-all border-r-[1px] border-b-[1px] border-gray-700">.</div>
        <div onClick={final} className="bg-black w-[23%] h-[62.5px] mt-2.5 ml-2 text-center flex justify-center items-center mr-2 cursor-pointer hover:bg-slate-800 rounded-[10px] shadow-[0px_0px_2px_black] transition-all border-r-[1px] border-b-[1px] border-gray-700"><span className='scale-[1.1]'>=</span></div>
      </div>

      

     
    </div>
     

    </div>

   </div>
    </>
  )
}

export default App
