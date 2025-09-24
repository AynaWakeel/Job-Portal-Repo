import React, { useEffect, useState } from 'react'
import Chart from 'chart.js/auto';
import { Line } from "react-chartjs-2"
import { Admin_Endpoints } from '../../lib/api/admin_endpoints';

const LineChart = () => {
    const [analytics, setAnalytics] = useState({})

    useEffect(() => {
        const fetchData = async () => {
            const res = await Admin_Endpoints.get_analytics()
            if (res?.data?.series) {
                setAnalytics(res.data.series)
                console.log(res.data.series)
            }
        }
        fetchData()
    }, [])

    return (
        <div>

            <Line data={{
                labels: analytics.months,

                datasets: [
                    {
                        label: "users",
                        data: analytics.users,
                        backgroundColor: "#926ac9",
                        borderColor: "#555295ff"
                    }
                ]
            }} />

        </div>
    )
}

export default LineChart