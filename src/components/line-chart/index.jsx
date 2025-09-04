import React from 'react'
import Chart from 'chart.js/auto';
import { Line } from "react-chartjs-2"

const LineChart = () => {
    return (
        <div>

            <Line data={{
                labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
                datasets: [
                    {
                        label: "users",
                        data: [100, 300, 240, 420, 200, 340],
                        backgroundColor: "#926ac9",
                        borderColor: "#555295ff"                        
                    }
                ]
            }} />

        </div>
    )
}

export default LineChart