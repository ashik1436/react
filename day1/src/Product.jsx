import "./Product.css";
import Price from "./Price.jsx";
function Product({title,idx}){
    let oldPrices=["12500","12000","1600","599"]
    let newPrices=["8999","9199","899","278"]
    let description=[["8,000 DPI","5 Programmabuttons"],
    ["intitutive surface","designed for ipad pro"],
    ["designed for ipad pro","intitutive surface"],["wireless","optical orientation"]]
    return (
        <div className="Product">
            <h4>{title}</h4>
            <p>{description[idx][0]}</p>
            <p>{description[idx][1]}</p>
            <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]}/>
        </div>
    )

}

export default Product;