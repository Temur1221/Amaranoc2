export default function DiscountCard({ item }) {
  return (
    <div style={{
    backgroundImage: `url(${item.img})`,
    backgroundRepeat:"no-repeat"
    }}className="flex w-[370px] h-[220px] rounded-[10px]">

      <div className="text-left flex flex-col justify-center ">

        <h1 className="text-white text-[50px]">{item.percent}</h1>

        <h3 className="text-white">{item.title}</h3>

        <p className="text-white">{item.desc}</p>

      </div>

    </div>
  )
}