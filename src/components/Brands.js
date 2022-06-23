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
                    <div className="card-images">
                        <img src={cardImage1} className="card-single-image" alt="brand card"></img>
                        <img src={cardLogo1} className="card-niyo-logo" alt="niyo logo"></img>
                    </div>
                    <div className="brand-text-container">
                        <h1 className="card-title">Niyo Network</h1>
                        <p className="card-text">The training ground for the best black women in tech and its intersections with other high impact industries. We run  bootcamps focused on tech careers, entrepreneurship, and hair and beauty.</p>
                        <button className="card-button button-1">Discover our Bootcamps</button>
                    </div>
                </div>
                

                <div className="individual-card">
                    <div className="card-images">
                        <img src={cardImage2} className="card-single-image" alt="brand card"></img>
                        <img src={cardLogo2} className="card-niyo-logo" alt="niyo logo"></img>
                    </div>
                    <div className="brand-text-container">
                        <h1 className="card-title">Niyo Hair & Beauty</h1>
                        <p className="card-text">Niyo Hair and beauty is the one stop shop for all healthy afro hair and beauty needs.</p>
                        <button className="card-button button-2">Innovative hair & beauty</button>
                    </div>
                </div>

                <div className="individual-card">
                    <div className="card-images">
                        <img src={cardImage3} className="card-single-image" alt="brand card"></img>
                        <img src={cardLogo3} className="card-niyo-logo" alt="niyo logo"></img>
                    </div>
                    <div className="brand-text-container">
                        <h1 className="card-title">Niyo Dapp</h1>
                        <p className="card-text">Niyo Dapp is  where creators, brands and users get rewarded in crypto for creating killer content through turning their content into NFTs and physical products.</p>
                        <button className="card-button button-3">NFT for Beauty & Fashion</button>
                    </div>
                </div>
            </div>
        </StyledBrands>
        </>
    )
}

export default Brands;

