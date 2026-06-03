import PatverCard from "./PatverCard.jsx"
export default function Patver() {
    const patverner = [
        {
            id: 1,
            title: "50,000֏",
            title2: "60,000֏",
            title3: "70,000֏",
            title4: "80,000֏",
            title5: "90,000֏",
            title6: "100,000֏",
                text: "Բաց մի թող մեր բացառիկ զեղչի քարտերը։ Եթե պլանավորում ես քո հաջորդ արձակուրդը՝ ընկերներիդ կամ ընտանիքիդ անդամների հետ, մեր զեղչային քարտերը առաջարկում են անգերազանցելի խնայողություններ ամառանոցների և ծառայությունների լայն տեսականիով: Ընտրիր զեղչի չափը քարտի վրա։"
        }
    ]
    return (
        <>
            {patverner.map((element) => (
                <PatverCard key={element.id || element.title || element.title2 } item={element} />
            ))}
        </>
    )
}