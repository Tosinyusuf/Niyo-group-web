import StyledMission from "../styled/Mission.styled";

const Mission = () => {
    return (
        <>
        <StyledMission>
            <h1>Styled Mission</h1>

            ////// CHANGE ALL THIS TO

            <div className="mission-image-container">
                <img src={classroomImage2} alt="our mission" className="mission-image"/>
            </div>  


            <div className="mission-right-container">
                <div className="mission-text-container">
                    <p className="mission-description"><img src={orangeRectangle} alt="symbol" className="rectangle" />Our Vision</p>
                    <h1 className="mission-title">#1 Destination for Black DisruptHers Globally!</h1>
                    <p className="mission-text">A nation of brands where ambitious black women build and create products that shape the face of culture</p>
                    <button className="mission-button">Learn More <span><img src={Arrow} alt="symbol" className="arrow" /></span></button>
                </div>
            </div>





        </StyledMission>
        </>
    )
}

export default Mission;