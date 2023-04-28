import React,{useState,useEffect} from "react";
// import { Box, Heading,Flex } from "@chakra-ui/react";
import GitHubCalendar from "react-github-calendar";
import ReactTooltip from "react-tooltip";
// import { style } from "../../utils/styles";
const Calender = () => {
  const [smallerScreen,setSmallerScreen] = useState(false)

useEffect(()=>{
  window.addEventListener('resize',()=>{
    // console.log(window.innerWidth)
    if(window.innerWidth<1000) setSmallerScreen(true);
    else setSmallerScreen(false)
  })
},[])
console.log(smallerScreen)
  const selectLastHalfYear = (contributions) => {
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    const shownMonths = 10;

    return contributions.filter((day) => {
      const date = new Date(day.date);
      const monthOfDay = date.getMonth();

      return (
        date.getFullYear() === currentYear &&
        monthOfDay > currentMonth - shownMonths &&
        monthOfDay <= currentMonth
      );
    });
  };

  return (
    <div>
      <h1 >GITHUB CONTRIBUTION CALENDER</h1>
      <div >
      <GitHubCalendar
        username="282Manoj"
        blockSize={18}
        fontSize={18}
        className="githubCal"
        transformData={smallerScreen?selectLastHalfYear:""}
        
      >
        <ReactTooltip delayShow={18} html />
      </GitHubCalendar >
      </div>

    </div>



  );
};

export default Calender;