export default function PatverCard({ item }) {
  return (
    <>
    <div className="relative inset-x-0 top-[100px]">
    <div className="flex justify-center items-center gap-[15px]">

    <div className="flex flex-col rounded-[15px] justify-center shadow-[0_4px_12px_rgba(108,108,108,0.5)] bg-white-100 h-[300px] w-[550px]">
      <div className="relative inset-x-0 left-[50px]">
      <h1 className="text-left text-[25px]">ՊԱՏՎԻՐԻ՛Ր <span className="text-orange-500 font-bold">ՆՎԵՐ ՔԱՐՏ</span><br />
      ՔՈ ԿԱՄ ԸՆԿԵՐՆԵՐԻԴ ՀԱՄԱՐ</h1>
      <div className="w-[450px] border border-orange-500 relative inset-x-0 top-[5px] "></div>
      <p className="text-[12px] relative inset-x-0 top-[10px]">Բաց մի թող մեր բացառիկ զեղչի քարտերը։ Եթե պլանավորում ես քո հաջորդ<br /> արձակուրդը՝ ընկերներիդ կամ ընտանիքիդ անդամների հետ, մեր զեղչային<br /> քարտերը առաջարկում են անգերազանցելի խնայողություններ<br /> ամառանոցների և ծառայությունների լայն տեսականիով: Ընտրիր զեղչի չափը<br /> քարտի վրա։</p>
      </div>
    </div>
    <div className="flex rounded-[15px] justify-center  items-center bg-orange-400 h-[300px] w-[500px]">
      <div >
        <img  src="https://amaranoc.am/images/white-logo.svg"/>
        <div className="relative inset-x-0 left-[20px]">
        <div className="flex gap-[5px]" >
        <button className="text-[20px] text-white border rounded-[19px]">
          {item.title}
        </button>
        <button className="text-[20px] text-white border rounded-[19px]">
          {item.title2}
        </button >
         <button className="text-[20px] text-white border rounded-[19px]">
          {item.title3}
        </button>
        </div>
        <div className="relative gap-[5px] inset-x-0 top-[10px]">
         <button className="text-[20px] text-white border rounded-[19px]">
          {item.title4}
        </button>
         <button className="text-[20px] text-white border rounded-[19px]">
          {item.title5}
        </button>
         <button className="text-[20px] text-white border rounded-[19px]">
          {item.title6}
        </button>

        </div>
        </div>
      <button className="relative inset-x-0 top-[20px] left-[90px] text-[20px] text-white bg-yellow-500 rounded-[19px]" >Պատվիրել</button>
      </div>
    </div>
    </div>
    </div>
    </>
  )
}
