'use client'
import { ResponsiveBar } from '@nivo/bar'

const theme = {
    fontSize: 16,
    "axis": {
        "legend": {
            "text": {
                "fontSize": 15,
                "fontWeight": "bold",
                "outlineWidth": 0,
                "outlineColor": "transparent"
            }
        },
        "ticks": {
            "text": {
                "fontSize": 14,
                "fill": "#333333",
                "outlineWidth": 0,
                "outlineColor": "transparent"
            }
        }
    },
    tooltip: {
        container: {
            background: "#141b2d",
            color: "#fff",
        },
    }
      
}

const data = [
    {
        education: "High School",
        salary: 4000,
    },
    {
        education: "Diploma",
        salary: 3800,
    },
    {
        education: "Bachelor's Degree",
        salary: 4200,
    },
    {
        education: "Bachelor's Degree (Overseas)",
        salary: 5500,
    },
    {
        education: "Master's Degree",
        salary: 5025,
    },
    {
        education: "Master's Degree (Overseas)",
        salary: 6500,
    },
    {
        education: "PhD",
        salary: 9900,
    },
    {
        education: "PhD (Overseas)",
        salary: 9550,
    },
    {
        education: "Professional Certifications",
        salary: 6265,
    },
]

const EduChartNivo = () => {
    return (
        <div className='w-full h-full drop-shadow-xl shadow-xl border-purple-800 border-2 rounded-2xl p-8'>
            <p className='text-xl text-center font-semibold'>Gross Salary per Education Level</p>
            <ResponsiveBar
                theme={theme}
                data={data}
                keys={['salary']}
                indexBy="education"
                margin={{ top: 10, right: 0, bottom: 55, left: 200 }}
                padding={0.2}
                valueScale={{ type: 'linear' }}
                indexScale={{ type: 'band', round: true }}
                colors={['#7d86ff']}
                borderWidth={2}
                borderColor="#dcdcdc"
                layout="horizontal"
                axisTop={null}
                axisRight={null}
                axisBottom={{
                    tickSize: 0,
                    tickPadding: 7,
                    tickRotation: 0,
                    legend: 'Salary RM',
                    legendPosition: 'middle',
                    legendOffset: 38,
                }}
                axisLeft={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: '',
                }}
                // valueFormat=" <-$"
                enableGridX={true}
                enableGridY={true}
                enableLabel={true}
                labelSkipHeight={0}
                labelTextColor={'#ffffff'}
                legends={[]}
                role="application"
                ariaLabel="Nivo bar chart demo"
                barAriaLabel={e => e.id + ": " + e.formattedValue + " in country: " + e.indexValue}
            />
        </div>
    )
}

export default EduChartNivo