import React from "react";
import { useLocation } from "react-router-dom";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";

function Analyse(){
    const location = useLocation()
    const data = location.state
    console.log(data)
    var travel = 0,
    lunch = 0,
    accommodation = 0,
    snacks = 0,
    water = 0,
    shopping = 0,
    miscellaneous = 0
    const labels = ['travel/commute','lunch/dinner','accommodation','snacks','water','shopping','miscellaneous']
    var sumExp = {}
    var sumData = []
    data.map((newdata)=>{
        if(newdata.purpose === 'travel/commute'){
            travel = travel + newdata.price
        }else if (newdata.purpose === 'lunch/dinner'){
            lunch = lunch + newdata.price
        }else if (newdata.purpose === 'accommodation'){
            accommodation = accommodation + newdata.price
        }else if (newdata.purpose === 'snacks'){
            snacks = snacks + newdata.price
        }else if (newdata.purpose === 'water'){
            water = water + newdata.price
        }else if (newdata.purpose === 'shopping'){
            shopping = shopping + newdata.price
        }else if (newdata.purpose === 'miscellaneous'){
            miscellaneous = miscellaneous + newdata.price
        }
    })

    sumExp = {
        "travel/commute" : travel,
        'lunch/dinner' : lunch,
        'accommodation' : accommodation,
        'snacks' : snacks,
        'water' : water,
        'shopping' : shopping,
        'miscellaneous' : miscellaneous
    }
    sumData = [travel,lunch,accommodation,snacks,water,shopping,miscellaneous]
    console.log(sumExp)

    const chartdata = {
        labels:labels,
        datasets:[{
            label: "Expense Chart",
            backgroundColor: [
                "blue","green","red","yellow","orange","#50AF95","#f3ba2f",
                
              ],
            //borderColor:,
            data: sumData,
          },],
    }

    return(
        <div className="flex h-[500px]  p-4 justify-center items-center">
        <Bar data={chartdata}
        options={{scales: {
            y:
              {
                min:0,
                
                ticks: {
                    stepSize: 50,
                  },
              },
            
          },
    }}
            
        className="mb-12 rounded-md bg-emerald-50 px- sm:mb-0"/>
        </div>
    )
}
export default Analyse