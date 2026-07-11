export default function DiscountCard({ item }) {
  return (
    <div style={{ backgroundImage: `url(${item.img})` }}className="flex justify-center  w-full xl:w-[370px] h-[220px] rounded-[10px] bg-cover bg-center p-5 relative overflow-hidden shrink-0">
      <div className="text-left flex flex-col justify-center w-full z-10">
        <h1 className="text-white text-[50px] font-black leading-none mb-2">
          {item.percent}
        </h1>
        <h3 className="text-white font-bold text-[16px] mb-2 line-clamp-2">
          {item.title}
        </h3>
        <p className="text-white text-sm opacity-90 line-clamp-3">
          {item.desc}
        </p>
      </div>
    </div>
  )
}