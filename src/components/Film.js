import React from 'react'

const Film = (props) => {
  let {title, release_date, opening_crawl} = props.data

  let formatted_date = () => {
    var options = { weekday: 'long', month: 'long', day: 'numeric' }
    let date  = new Date(release_date.replace(/-/g, '/'))
    return `${date.toLocaleDateString("en-US",options)} ${date.getFullYear()}`
  }

  return(
    <div className="film">
      <h2>{title}</h2>
      <h3>{formatted_date()}</h3>
      <p>{opening_crawl}</p>
    </div>
  )
}

export default Film;