import React from 'react'
import Coffee from './Coffee'
import Music from './Music'
import Resources from './Resources'

const Timeline = (props) => {
  console.log(props)


  return (
    <div className="timeline-wrapper">
      {props.data.map(day => {
        return (
          <div key={day.id}>
            <div  className="day-wrapper">
                <div className="date-div">
                  <h5 className="date"></h5>
                </div>
                <h3 className="learned">{day.focus}</h3>
                <Coffee coffees={day.coffees} />
                <Music music={day.music} />
                {/* <h3 className="cool-things">Things I found today:
                  <a href=''></a>
                </h3> */}
                <Resources resources={day.resources} />
            </div>
            <div className="day-seperator"></div>
          </div>
        )
      })}
    </div>
  )
}


export default Timeline
