export default function PatverCard({ item }) {
  return (
    <>
  <div className="relative mt-24 w-full max-w-[1240px] mx-auto px-4">
      
      {/* flex-col-ը ստիպում է բլոկներին լինել իրար տակ (ներառյալ 1199px-ի վրա) */}
      {/* xl:flex-row-ը բերում է դրանք կողք կողքի միայն 1280px և ավելի մեծ էկրաններին */}
      <div className="flex flex-col xl:flex-row justify-center items-center gap-[20px] w-full">

        {/* Ձախ կողմի սպիտակ տեքստային բլոկը */}
        <div className="flex flex-col rounded-[15px] justify-center shadow-[0_4px_12px_rgba(108,108,108,0.3)] bg-white h-auto min-h-[300px] w-full xl:w-[550px] p-6 md:p-10">
          <div className="text-center xl:text-left">
            <h1 className="text-[25px] font-medium text-[#101623] leading-tight text-left">
              ՊԱՏՎԻՐԻ՛Ր <span className="text-orange-500 font-bold">ՆՎԵՐ ՔԱՐՏ</span><br />
              ՔՈ ԿԱՄ ԸՆԿԵՐՆԵՐԻԴ ՀԱՄԱՐ
            </h1>
            <div className="w-full max-w-[450px] border-b border-orange-500 my-4 mx-auto xl:mx-0"></div>
            <p className="text-[13px] text-gray-600 leading-relaxed max-w-[450px] mx-auto xl:mx-0">
              Բաց մի թող մեր բացառիկ զեղչի քարտերը։ Եթե պլանավորում ես քո հաջորդ արձակուրդը՝ ընկերներիդ կամ ընտանիքիդ անդամների հետ, մեր զեղչային քարտերը առաջարկում են անգերազանցելի խնայողություններ ամառանոցների և ծառայությունների լայն տեսականիով: Ընտրիր զեղչի չափը քարտի վրա։
            </p>
          </div>
        </div>

        {/* Աջ կողմի նարնջագույն քարտը */}
        <div className="flex rounded-[15px] justify-center items-center bg-orange-400 h-[300px] w-full xl:w-[500px] p-6 text-white">
          <div className="flex flex-col items-center w-full max-w-[360px]">
            <img className="mb-6 h-8" src="https://amaranoc.am/images/white-logo.svg" alt="logo"/>
            
            <div className="flex flex-col gap-3 w-full items-center">
              {/* Առաջին տողի գումարները */}
              <div className="flex gap-[8px] justify-center flex-wrap" >
                <button className="text-[14px] md:text-[16px] text-white border border-white/50 px-3 py-1 rounded-[19px] hover:bg-white/20 transition-colors">
                  {item?.title || "30,000 ֏"}
                </button>
                <button className="text-[14px] md:text-[16px] text-white border border-white/50 px-3 py-1 rounded-[19px] hover:bg-white/20 transition-colors">
                  {item?.title2 || "50,000 ֏"}
                </button >
                <button className="text-[14px] md:text-[16px] text-white border border-white/50 px-3 py-1 rounded-[19px] hover:bg-white/20 transition-colors">
                  {item?.title3 || "70,000 ֏"}
                </button>
              </div>
              
              {/* Երկրորդ տողի գումարները */}
              <div className="flex gap-[8px] justify-center flex-wrap">
                <button className="text-[14px] md:text-[16px] text-white border border-white/50 px-3 py-1 rounded-[19px] hover:bg-white/20 transition-colors">
                  {item?.title4 || "80,000 ֏"}
                </button>
                <button className="text-[14px] md:text-[16px] text-white border border-white/50 px-3 py-1 rounded-[19px] hover:bg-white/20 transition-colors">
                  {item?.title5 || "100,000 ֏"}
                </button>
                <button className="text-[14px] md:text-[16px] text-white border border-white/50 px-3 py-1 rounded-[19px] hover:bg-white/20 transition-colors">
                  {item?.title6 || "150,000 ֏"}
                </button>
              </div>
            </div>

            <button className="mt-6 px-8 py-2 text-[16px] font-bold text-white bg-yellow-500 rounded-[19px] hover:bg-yellow-600 transition-colors shadow-md">
              Պատվիրել
            </button>
          </div>
        </div>

      </div>
    </div>
    </>
  )
}
