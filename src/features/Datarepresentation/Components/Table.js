import React, { useReducer, useState } from "react";
import Tabelrow from "./Tabelrow";
import { Mdata } from '../Data/MOCKDATA'
import _ from 'lodash';

function reducer(state, action) {
          switch (action.type) {
                    case 'SearchByFirstname':
                              return _.filter(Mdata, item => item["first_name"] === action.Search)

                    case 'Sortedbyasc':
                              return _.sortBy(Mdata, action.Field)

                    case 'Sortedbydesc':
                              return _.orderBy(Mdata, action.Field, 'desc')
                    case 'onlymale':
                              return _.filter(Mdata, item => item["gender"] === "Male")
                    case 'onlyfemale':
                              return _.filter(Mdata, item => item["gender"] === "Female")
                    case 'onlypolygender':
                              return _.filter(Mdata, item => item["gender"] === "Polygender")
                    case 'default':
                              return Mdata

                    default:
                              throw state
          }
}

const Table = () => {

          const [fData, dispatch] = useReducer(reducer, Mdata);
          const [search, SetSearch] = useState("")
          const [lnopt, setLnopt] = useState(false)
          const [fnopt, setFnopt] = useState(false)
          const [genopt, setGenopt] = useState(false)

          const handlesearchname = (event) => {
                    if (event.key === 'Enter' && search !== "") {

                              dispatch({
                                        type: 'SearchByFirstname',
                                        Search: search
                              })



                    }
          }

          const handleReset = () => {

                    dispatch({
                              type: 'default'
                    })

          }



          return (
                    <div className='overflow-x-auto overflow-y-auto relative shadow-md sm:rounded-lg mx-4 mb-4'>

                              <div className="pb-4 bg-white flex gap-5 justify-between" >
                                        <label for="table-search" className="sr-only">Search</label>
                                        <div className="relative mt-1">
                                                  <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                                            <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                                                  </div>
                                                  <input type="text"
                                                            id="table-search"
                                                            className="block p-2 pl-10 w-60 sm:w-80 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Press Enter to search using First name"
                                                            value={search}
                                                            onChange={event => SetSearch(event.target.value)}
                                                            onKeyDown={handlesearchname}
                                                  />
                                        </div>

                                        <div className=" flex justify-center items-center">
                                                  <button type="button" class=" text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 font-medium rounded-lg text-sm px-5 py-2 my-1  dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 " onClick={handleReset}>Reset</button>
                                        </div>


                              </div>




                              <div className="overflow-x-auto relative shadow-md rounded-lg">
                                        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                                  <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">

                                                            <tr >
                                                                      <th scope="col" className="py-3 px-6">
                                                                                ID
                                                                      </th>
                                                                      <th scope="col" className="py-3 px-6  ">

                                                                                First Name
                                                                                <button id="dropdownMenuIconButton" data-dropdown-toggle="dropdownDots" class="inline-flex items-center p-2 text-sm font-medium text-center text-white rounded-lg dark:bg-gray-700" type="button" onClick={() => setFnopt(!fnopt)}>
                                                                                          <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path></svg>
                                                                                </button>
                                                                                {fnopt && <div id="dropdownTop" class=" absolute top-20 z-10 w-24 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                                                                                          <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownMenuIconButton">
                                                                                                    <li>
                                                                                                              <button class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" onClick={() => dispatch({
                                                                                                                        type: 'Sortedbyasc',
                                                                                                                        Field: "first_name"
                                                                                                              })}>Sort By ASC</button>
                                                                                                    </li>
                                                                                                    <li>
                                                                                                              <button class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" onClick={() => dispatch({
                                                                                                                        type: 'Sortedbydesc',
                                                                                                                        Field: "first_name"
                                                                                                              })}>Sort By DESC</button>
                                                                                                    </li>
                                                                                          </ul>
                                                                                </div>}
                                                                      </th>
                                                                      <th scope="col" className="py-6 px-6 flex ">
                                                                                Last Name
                                                                                <button id="dropdownMenuIconButton" data-dropdown-toggle="dropdownTop" data-dropdown-placement="top" class="inline-flex items-center p-2 text-sm font-medium text-center text-white rounded-lg dark:bg-gray-700" type="button" onClick={() => setLnopt(!lnopt)}>
                                                                                          <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path></svg>
                                                                                </button>

                                                                                {lnopt && <div id="dropdownTop" class=" absolute top-20 z-10 w-24 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                                                                                          <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownMenuIconButton">
                                                                                                    <li>
                                                                                                              <button class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" onClick={() => dispatch({
                                                                                                                        type: 'Sortedbyasc',
                                                                                                                        Field: "last_name"
                                                                                                              })}>Sort By ASC</button>
                                                                                                    </li>
                                                                                                    <li>
                                                                                                              <button class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" onClick={() => dispatch({
                                                                                                                        type: 'Sortedbydesc',
                                                                                                                        Field: "last_name"
                                                                                                              })}>Sort By DESC</button>
                                                                                                    </li>
                                                                                          </ul>
                                                                                </div>}
                                                                      </th>
                                                                      <th scope="col" className="py-3 px-6">
                                                                                Email

                                                                      </th>
                                                                      <th scope="col" className="py-6 px-6 flex">
                                                                                Gender
                                                                                <button id="dropdownMenuIconButton" data-dropdown-toggle="dropdownTop" data-dropdown-placement="top" class="inline-flex items-center p-2 text-sm font-medium text-center text-white rounded-lg dark:bg-gray-700" type="button" onClick={() => setGenopt(!genopt)}>
                                                                                          <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path></svg>
                                                                                </button>

                                                                                {genopt && <div id="dropdownTop" class=" absolute top-20 z-10 w-28 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                                                                                          <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownMenuIconButton">
                                                                                                    <li>
                                                                                                              <button class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" onClick={() => dispatch({
                                                                                                                        type: 'onlymale'
                                                                                                              })}>Only Male</button>
                                                                                                    </li>
                                                                                                    <li>
                                                                                                              <button class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" onClick={() => dispatch({
                                                                                                                        type: 'onlyfemale'
                                                                                                              })}>Only Female</button>
                                                                                                    </li>
                                                                                                    <li>
                                                                                                              <button class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" onClick={() => dispatch({
                                                                                                                        type: 'onlypolygender'
                                                                                                              })}>Only Polygender</button>
                                                                                                    </li>
                                                                                          </ul>
                                                                                </div>}
                                                                      </th>
                                                                      <th scope="col" className="py-3 px-6">
                                                                                IP Address
                                                                      </th>
                                                                      <th scope="col" className="py-3 px-6">
                                                                                Airport Code
                                                                      </th>
                                                                      <th scope="col" className="py-3 px-6">
                                                                                Mobile no
                                                                      </th>
                                                                      <th scope="col" className="py-3 px-6">
                                                                                Area
                                                                      </th>
                                                                      <th scope="col" className="py-3 px-6">
                                                                                Status
                                                                      </th>
                                                                      <th scope="col" className="py-3 px-6">
                                                                                Action
                                                                      </th>

                                                            </tr>
                                                  </thead>
                                                  <tbody>

                                                            {
                                                                      fData.map((item) => {
                                                                                return (
                                                                                          <Tabelrow id={item.id} fn={item.first_name} ln={item.last_name} email={item.email} gen={item.gender} ip={item.ip_address} ac={item.airport_code} mn={item.mobile} area={item.area} status={item.status} show={item.show} edit={item.edit} />
                                                                                )
                                                                      })
                                                            }

                                                  </tbody>
                                        </table>
                              </div>
                    </div>
          );
};

export default Table;
