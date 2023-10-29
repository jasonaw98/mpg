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
                "fontSize": 15,
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
  { Gender: "Malay", count: 4300 },
  { Gender: "Indian", count: 4500 },
  { Gender: "Other", count: 4500 },
  { Gender: "Chinese", count: 4800 },
]

const EduChart = () => {
    return (
        <div className='w-full h-full drop-shadow-xl shadow-xl border-purple-800 border-2 rounded-2xl p-8'>
             <p className='text-xl text-center font-semibold'>Ethnicity</p>
            <ResponsiveBar
                theme={theme}
                data={data}
                keys={['count']}
                indexBy="Gender"
                margin={{ top: 10, right: 0, bottom: 50, left: 70 }}
                padding={0.26}
                valueScale={{ type: 'linear' }}
                indexScale={{ type: 'band', round: true }}
                colors={['#7d86ff']}
                borderWidth={3}
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

export default EduChart