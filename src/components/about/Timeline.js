import { timeLines } from "../../constants/data";
import StyledTimeline from "../../styled/Timeline.styled";
import line from "../../assets/timeline/2018.svg"

const Timeline = () => {
  return (
    <>
      <StyledTimeline>
        {timeLines.map((item, index) => {
          return(
            <>
             <div className="each-timeline" key={index}>
                <div className="text">
                  <h2>{item.year}</h2>
                <p>{item.description}</p>
                </div>
                <div className="divider">

                </div>
                <div className="timeline-image" style={{backgroundImage:`url(${item.img})`}}>
                    <img src={line} alt="" />
                </div>

              </div>
            </>
          )
        })}
       
      </StyledTimeline>
    </>
  );
};

export default Timeline;
