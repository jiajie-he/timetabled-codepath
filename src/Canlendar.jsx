import React from "react";
import Event from './Event'

const Calendar = () => {
    return (
        <div className="Calendar">
            {/* <h3>testing the calendar component</h3> */}
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th>
                            Sunday
                        </th>
                        <th>
                            Monday
                        </th>
                        <th>
                            Tuesday
                        </th>
                        <th>
                            Wednesday
                        </th>
                        <th>
                            Thursday
                        </th>
                        <th>
                            Friday
                        </th>
                        <th>
                            Saturday
                        </th>
                    </tr>
                </thead>
                <tbody>
                <tr>
                    <td className="time">8 am</td>
                    <Event event='Starbucks ☕️' location='Pike Place' color ='green'/>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <Event event='Yolk 🍳' location='SLU' color ='green'/>
                    <td></td>
                </tr>

                <tr>
                    <td className="time">9 am</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <Event event='Subway 🚊' location='West Lake' color ='pink'/>
                    <td></td>
                    <td></td>
                    <Event event='The Bean 🫘' location='UW' color ='blue'/>
                </tr>
                    <tr>
                        <td className="time">10 am</td>
                        <td></td>
                        <Event event='Brunch 🥞' location='Capital Hill' color ='blue'/>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">11 am</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <Event event='Lecture 📓' location='UW' color ='blue'/>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">12 pm</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">1 pm</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <Event event='Lunch 🍔' location='Green Lake' color ='green'/>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">2 pm</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">3 pm</td>
                        <td></td>
                        <Event event='Party 🎉' location='UW' color ='pink'/>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">4 pm</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">5 pm</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
  
}
export default Calendar;