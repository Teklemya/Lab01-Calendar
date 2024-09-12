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
            <Event />
          </tr>
          <tr>
            {" "}
            <td className="time">9:00 am</td>
          </tr>
          <tr>
            {" "}
            <td className="time">10:00 am</td>
          </tr>
          <tr>
            {" "}
            <td className="time">11:00 am</td>
          </tr>
          <tr>
            {" "}
            <td className="time">12:00 pm</td>
          </tr>
          <tr>
            {" "}
            <td className="time">1:00 pm</td>
          </tr>
          <tr>
            {" "}
            <td className="time">2:00 pm</td>
          </tr>
          <tr>
            <td className="time">3:00 pm</td>
          </tr>
          <tr>
            <td className="time">4:00 pm</td>
          </tr>
          <tr>
            <td className="time">5:00 pm</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default Calendar;
