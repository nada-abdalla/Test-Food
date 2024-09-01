 import MeetupItems from "../component/meetup/MeetupItem";
import MainNavigation from "../component/layout/MainNavigation";

function AllItems (){
    return(
        <div id="item">
            <MeetupItems />
            <MainNavigation />
        </div>
    )
}
export default AllItems