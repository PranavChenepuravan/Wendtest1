import axios from 'axios'
import React, { useEffect, useState } from 'react'


export const Tracking = () => {
    let id = localStorage.getItem('id')
    console.log(id,'id is')
    const [data,setData]=useState([''])
    const [refresh,setrefresh]=useState('')

    useEffect(()=>{
        let fetchdata=async ()=>{
            let response=await axios.get(`http://localhost:5000/people/trac/${id}`)
            console.log(response.data);
            setData(response.data)
        }
        fetchdata()
    },[refresh])

  return (
    <>
                  <table className="w-screen text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Debt
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Person1
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Amount 1
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Person 2
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Amount 2
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Person 3
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Amount 3
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Person 4
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Amount 4
                            </th>

                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item,index)=>(
                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                              <td scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                               {item?.total}
                              </td>
                              <td scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                               {item?.person1}
                             </td>
                             <td scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                               {item?.amount1}
                             </td>
                             <td scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                               {item?.person2}
                             </td>
                             <td scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                               {item?.amount2}
                             </td>
                             <td scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                               {item?.person3}
                             </td>
                             <td scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                               {item?.amount3}
                             </td>
                             <td scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                               {item?.person4}
                             </td>
                             <td scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                               {item?.amount4}
                             </td>
                            </tr>
                        ))}



                        {/* {filteredData.map((item, index) => (
                            <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <td>{item?.festival?.festivalname}</td>
                                <td><img src={`https://worshipbackend.onrender.com/uploads/${item.festival?.photo}`} alt="" /></td>
                                <td>{item?.festival?.about}</td>
                                <td>{item?.festival?.startingdate}</td>
                                <td>{item?.festival?.endingdate}</td>
                                <td>
                                    <Link to={`/instlayout/instfestivalevents/${item?.festival?._id}`}>
                                     <button type="button" className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5">
                                        Events
                                     </button>
                                    </Link>
                                </td>
                            </tr>
                        ))} */}
                    </tbody>
                </table>
    </>
  )
}
export default Tracking
