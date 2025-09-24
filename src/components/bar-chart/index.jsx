import React, { useEffect, useState } from 'react'
import Chart from 'chart.js/auto';
import { Bar } from "react-chartjs-2"
import { Admin_Endpoints } from '../../lib/api/admin_endpoints';

const BarChart = () => {
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

            <Bar
                data={{
                    labels: analytics.months,
                    datasets: [
                        {
                            label: "Posted Jobs",
                            data: analytics.jobs,
                            backgroundColor: [
                                "#E4E5E8"
                            ],
                            borderRadius: 5
                        },
                        {
                            label: "Applications",
                            data: analytics.applications,
                            backgroundColor: [
                                "#555295ff"
                            ],
                            hoverBackgroundColor: "#373461ff",
                            borderRadius: 5

                        },

                    ]
                }}

                options={{
                    responsive: true
                }}

            />

        </div>

    )
}

export default BarChart