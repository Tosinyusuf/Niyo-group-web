import StyledOurNumbers from "../styled/OurNumbers.styled";
import orangeRectangle from "../assets/orange-rectangle.svg";

const OurNumbers = () => {
    return (
        <>
        <StyledOurNumbers>
            <div className="numbers-text-container">
                <div className="numbers-headings">
                    <p className="numbers-description"><img src={orangeRectangle} className="numbers-rectangle" alt="symbol" />Our Numbers</p>
                    <h1 className="numbers-title">Niyo in numbers</h1>
                </div>

                <div className="tally-container">
                    <div className="numbers-tally">
                        <h4 className="tally-title"><span>10,000</span>+</h4>
                        <p className="tally-text">Partners we work with</p>
                    </div>
                    <div className="numbers-tally">
                        <h4 className="tally-title"><span>30,000</span>+ </h4>
                        <p className="tally-text">Community Members</p>
                    </div>
                    <div className="numbers-tally">
                        <h4 className="tally-title"><span>100,000</span>+ </h4>
                        <p className="tally-text">Upskilled through Niyo Group</p>
                    </div>
                </div>
            </div>




        </StyledOurNumbers>
        </>
    )
}

export default OurNumbers;