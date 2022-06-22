import StyledBrands from "../styled/Brands.styled";
import orangeRectangle from "../assets/orange-rectangle.svg";
import cardImage1 from "../assets/card-image-1.svg";
import cardImage2 from "../assets/card-image-2.svg";
import cardImage3 from "../assets/card-image-3.svg";
import cardLogo1 from "../assets/card-logo-1.svg";
import cardLogo2 from "../assets/card-logo-2.svg";
import cardLogo3 from "../assets/card-logo-3.svg";


const Brands = () => {
    return (
        <>
        <StyledBrands>
            <div className="brands-container">
                <p className="brands-description"><img src={orangeRectangle} alt="symbol" className="rectangle" />Our Brands</p>
                <h1 className="brands-title">What we do</h1>
            </div>

            <div className="brand-cards">
                <div className="individual-card">
                    <div className="card-image">
                        <img src={cardImage1} alt="brand card"></img>
                        <img src={cardLogo1} alt="niyo logo"></img>
                    </div>
                    <div className="brand-text-container">
                        <h1 className="card-title">Niyo </h1>
                        <p className="cart-text">xxxxx</p>
                        <button className="card-button">xxxxxxx</button>
                    </div>
                </div>
                

                <div className="individual-card">
                    <div className="card-image">
                        <img src={cardImage2} alt="brand card"></img>
                        <img src={cardLogo2} alt="niyo logo"></img>
                    </div>
                    <div className="brand-text-container">
                        <h1 className="card-title">Niyo </h1>
                        <p className="cart-text">xxxxx</p>
                        <button className="card-button">xxxxxxx</button>
                    </div>
                </div>


                <div className="individual-card">
                    <div className="card-image">
                        <img src={cardImage3} alt="brand card"></img>
                        <img src={cardLogo3} alt="niyo logo"></img>
                    </div>
                    <div className="brand-text-container">
                        <h1 className="card-title">Niyo </h1>
                        <p className="cart-text">xxxxx</p>
                        <button className="card-button">xxxxxxx</button>
                    </div>
                </div>






            </div>
        </StyledBrands>
        </>
    )
}

export default Brands;

