import React from 'react';
import Todo from '../images/icon-todo.svg';
import Calender from '../images/icon-calendar.svg';
import Reminder from '../images/icon-reminders.svg';
import Planning from '../images/icon-planning.svg';

const Features = ({data}) => {
  return (
    <>
      {data && (

        <div className='feature'>
          <ul>
            <li><img src={Todo} alt='icon'></img> Todo List</li>
            <li><img src={Calender} alt='icon'></img> Calender</li>
            <li><img src={Reminder} alt='icon'></img> Reminders</li>
            <li><img src={Planning} alt='icon'></img> Planning</li>
          </ul>
        </div>
      )}
    </>
  )
}

export default Features