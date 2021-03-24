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
          tickets.slice(tickets.length-10).reverse().map((ticket,index) => {
            return <li key={index}>{ticket.concept} | {ticket.type} | {ticket.type===1 ? '+' : '-'} | ${ticket.amount}</li>
          })
        }
      </ul>
    </div>
  )
}