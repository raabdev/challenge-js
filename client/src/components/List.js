import React, {useState, useEffect} from 'react'

export default function List() {
  const url = 'http://localhost:3050/tickets'
  const [tickets, setTickets] = useState()
  const fetchApi = async () => {
    const response = await fetch(url)
    const responseJSON = await response.json()
    setTickets(responseJSON)
  }
  useEffect(() => {
    fetchApi()
  }, [])
  return (
    <div className="col-5 card p-3 mx-auto my-2">
      <ul>
        { !tickets ? 'Loading...' :
          tickets.map((ticket,index) => {
            return <li key={index}>{ticket.concept}</li>
          })
        }
      </ul>
    </div>
  )
}