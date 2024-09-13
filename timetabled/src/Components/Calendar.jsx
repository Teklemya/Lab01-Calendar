import Event from "./Event";

const Calendar = () => {
  return (
    <div className="Calendar">
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Sunday</th>
            <th>Monday</th>
            <th>Tuesday</th>
            <th>Wednesday</th>
            <th>Thursday</th>
            <th>Friday</th>
            <th>Saturday</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="time">8:00 am</td>
            <Event event='Coffee with God' color ='green' location='Maple & Ash'/>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <Event event='Fancy Dinner 🎩' color ='green'/>
            <td></td>
            
          </tr>
          <tr>
            {" "}
            <td className="time">9:00 am</td>
            <td></td>
             <Event event='Meet & Greet ' color ='green'/>
             <td></td>
            <td></td>
            <Event event='New Cloud' color ='green'/>
            <td></td>
           
            <td></td>
          </tr>
          <tr>
            {" "}
            <td className="time">10:00 am</td>
            
            <td></td><Event event='Reincarnation Lottery' color ='pink'/>
            <td></td>
            <td></td>
            <td></td>
            <Event event='Service Complaints' color ='blue'/>
            <td></td>
          </tr>
          <tr>
            {" "}
            <td className="time">11:00 am</td>
            
            <td></td>
            <td></td><Event event='Ghost Pranks' color ='blue'/>
            <td></td><Event event='Levitation 101' color ='pink'/>
            <td></td>
            
            <td></td>
          </tr>
          <tr>
            {" "}
            <td className="time">12:00 pm</td>
            <Event event='Escape Room' color ='green'/>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            
            <td></td><Event event='Debate Socrates' color ='blue'/>
          </tr>
          <tr>
            {" "}
            <td className="time">1:00 pm</td>
            
            <td></td>
            <td></td><Event event='Cosmic Karaoke' color ='pink'/>
            <td></td><Event event='Speed Dating' color ='pink'/>
            <td></td>
            
            <td></td>
          </tr>
          <tr>
            {" "}
            <td className="time">2:00 pm</td>
            
            <td></td>
            <td></td><Event event='Astral Travel' color ='green'/>
            <td></td>
            <td></td>
            <Event event='Anger Management' color ='pink'/>
            <td></td>
          </tr>
          <tr>
            <td className="time">3:00 pm</td>
            <Event event='Relaxation on Cloud 9' color ='green'/>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            
            <td></td><Event event='Afterlife’s Got Talent' color ='blue'/>
          </tr>
          <tr>
            <td className="time">4:00 pm</td>
            <Event event='Coffee with Elvis' color ='blue'/>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td className="time">5:00 pm</td>
            
            <td></td><Event event='Meet Cerberus' color ='pink'/>
            <td></td>
            <td></td>
            <Event event='Walking Through Walls' color ='blue'/>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default Calendar;
