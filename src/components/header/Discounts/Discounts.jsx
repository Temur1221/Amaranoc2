import DiscountCard from "./DiscountCard"

export default function Discounts() {

  const discounts = [
    {
      id: 1,
      percent: "-15%",
      title: "Զեղչ կախված ամրագրման օրերի քանակից",
      desc: "Ստացիր 5-15% զեղչ կատարելով ամրագրում 3-ից մինչև 20 օր։",
      img: "https://amaranoc.am/images/raffle/special-discounts-image.jpg"
    },
    {
      id: 2,
      percent: "-10%",
      title: "Ամենահայտնի Reel-ը սոցիալական հարթակում",
      desc: "Վիդեո տարբերակով ներկայացրու քո լավագույն օրերից մեկը amaranoc.am ի առանձնատներից մեկում և ստացիր 15% զեղչ",
      img: "https://amaranoc.am/images/raffle/special-discounts-image.jpg"
    },
    {
      id: 3,
      percent: "-5%",
      title: "Ավելացրու 5% զեղչ քո յուրաքանչյուր 3-րդ այցի համար",
      desc: "Իրականացրու բազմաթիվ ամրագրումներ և յուրաքանչյուր 3-րդ ամրագրման համար ստացիր 5% զեղչ",
      img: "https://amaranoc.am/images/raffle/special-discounts-image.jpg",
    }
  ]

  return (
    <section className="discounts w-full max-w-[1240px] mx-auto px-4 mt-10">
      <h1 className="text-center text-[24px] md:text-[30px] font-bold mb-6 text-[#101623] uppercase tracking-wider">
        ՀԱՏՈՒԿ ԶԵՂՉԵՐ
      </h1>
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 w-full">
        {
          discounts.map((item) => (
            <DiscountCard
              key={item.id}
              item={item}
            />
          ))
        }
      </div>
    </section>
  )
}