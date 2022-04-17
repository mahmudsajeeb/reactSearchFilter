import React, { useState } from 'react'
import data from './Data.js'
import './App.css'
export default function Search() {
 const [filterData,setfilterData] = useState('')

 const searchResult = (e) =>{
   setfilterData(e.target.value)
 }
 console.warn(filterData)
 let dataSearch = data.cardDaTa.filter(item =>{
   return Object.keys(item).some(key =>
     item[key].toString().toLowerCase().includes(filterData.toString().toLowerCase())
   )
 })
  return (
    <div>
      <section className='py-4 container'>
          <div className="row justify-content-container">

          <div className="col-12 text-right search-bar mb-3 col-3 mx-auto   ">
            
            <input type="text" placeholder='Search you place' className='from-control' value={filterData} onChange={searchResult.bind(this)}/>
             
          </div>
          {
            dataSearch.map((item,index) =>{
              return(
                  <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
                <div className="card p-0 overflow-hidden h-100 shadow">
                  <img src={item.img} className='card-img-top' />
                  <div className="card-body">
                    <h3 className="card-title">{item.title}</h3>
                    <p className="card-text">{item.desc}</p>
                  </div>
                </div>
              </div>
              )
            })
          }

          </div>
      </section>
    </div>
  )
}
