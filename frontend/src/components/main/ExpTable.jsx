import React, { useState } from "react";

function ExpTable({data}) {
    console.log("this is data",data)
    const [amt , setAmt] = useState(data.price)
    const [pur , setPur] = useState(data.purpose)
    const [note , setNote] = useState(data.note)
    
    return(
        <section class="mx-auto w-full max-w-7xl px-2 ">
  <div class="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
    
   
  </div>
  <div class="mt-1 flex flex-col">
    <div class="-mx-4 -my-1 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="inline-block min-w-full  align-middle md:px-6 lg:px-8">
        <div class="overflow-hidden border border-gray-200 md:rounded-lg">
          <table class="min-w-full divide-y divide-gray-200">
            
            <tbody class="divide-y divide-gray-200 bg-white">
              <tr>
                <td class="whitespace-nowrap px-4 py-4 ">
                  <div class="">
                    
                    <div class="ml-1">
                      <div class="text-sm font-medium text-gray-900">
                        {pur}
                      </div>
                    </div>
                  </div>
                </td>
                <td class="whitespace-nowrap px-auto py-4">
                  <div class="flex items-center rounded-full bg-red-100 px-2 text-xs font-semibold leading-5 text-red-800">
                    {amt}
                    </div>
                </td>
                <td class="whitespace-nowrap px-4 py-4">
                  <span class="inline-flex rounded-full bg-blue-100 px-2 text-xs font-semibold leading-5 text-blue-800">
                    {note}
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</section>
    )
}

export default ExpTable



