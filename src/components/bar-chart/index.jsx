import React from 'react'
import Chart from 'chart.js/auto';
import { Bar } from "react-chartjs-2"

const BarChart = () => {


    return (
        <div>

            <Bar
                data={{
                    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
                    datasets: [
                        {
                            label: "Posted Jobs",
                            data: [200, 300, 150, 200, 300, 160],
                            backgroundColor: [
                                "#E4E5E8"
                            ],
                            borderRadius: 5
                        },
                        {
                            label: "Applications",
                            data: [100, 50, 60, 100, 150, 80],
                            backgroundColor: [
                                "#555295ff"
                            ],
                            hoverBackgroundColor: "#373461ff",
                            borderRadius: 5

                        },

                    ]
                }} 

                options={{
                    responsive:true
                }}
            
            />

        </div>

    )
}

export default BarChart