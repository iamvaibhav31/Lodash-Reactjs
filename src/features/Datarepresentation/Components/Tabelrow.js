import React, { useState } from "react";

const Tabelrow = ({ id, fn, ln, email, gen, ip, ac, mn, area, status, show, edit }) => {
          const [onedit, setOnedit] = useState(false)
          const changecolo = status ? "bg-red-600 " : "bg-green-600 "

          const handleEdit = () => {
                    setOnedit(true)
                    setInterval(() => {
                              setOnedit(false)
                    }, 750)
          }

          const hoverbg = onedit ? "bg-gray-200" : "bg-white"
          return (
                    <tr class={`${hoverbg} border-b  border-gray-700 `}>
                              <td class="py-4 px-6 text-gray-900 whitespace-nowrap">
                                        {id}
                              </td>
                              <td class="py-4 px-6 text-gray-900 whitespace-nowrap">
                                        {fn}
                              </td>
                              <td class="py-4 px-6 text-gray-900 whitespace-nowrap">
                                        {ln}
                              </td>
                              <th scope="row" class="py-4 px-6 font-medium text-gray-900 underline whitespace-nowrap ">
                                        {email}
                              </th>
                              <td class="py-4 px-6 text-gray-900 whitespace-nowrap">
                                        {gen}
                              </td>
                              <td class="py-4 px-6 text-gray-900 whitespace-nowrap">
                                        {ip}
                              </td>
                              <td class="py-4 px-6 text-gray-900 whitespace-nowrap">
                                        {ac}
                              </td>
                              <td class="py-4 px-6 text-gray-900 whitespace-nowrap">
                                        {mn}
                              </td>
                              <td class="py-4 px-6 text-gray-900 whitespace-nowrap">
                                        {area}
                              </td>
                              <td class="py-4 px-6 text-gray-900 whitespace-nowrap">
                                        <div className={`p-1 ${changecolo} rounded-xl`}></div>
                              </td>

                              <td class="py-4 px-6 text-gray-900 whitespace-nowrap">
                                        {edit && <button class="font-medium text-blue-600 dark:text-blue-500 hover:underline cursor-auto" onClick={handleEdit}>Edit</button>}
                              </td>
                    </tr>
          );
};

export default Tabelrow;
