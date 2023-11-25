'use client'
import { ResponsiveChoropleth } from '@nivo/geo'
import { malaysia } from 'constants/malaysiamap.js';
import { malaysia_mobile } from 'constants/malaysiamap_mobile.js';
import { data } from 'constants/data.js';

const MapChart = () => {

  const tooltip = (feature) => {
    const { id, properties } = feature.feature;

    const matchingState = data.find((stateData) => stateData.id === id);

    if (matchingState) {
        // console.log('Helo',properties)
        return (
            <div className='bg-[#7d86ff] p-3 text-white rounded-xl'>
                <p className='font-semibold text-lg'>{id}</p> 
                <p className='font-semibold text-lg'>RM {matchingState.value}</p>
            </div>
        );
    } else {
        return (
            <strong>{id}: {properties}</strong>
        );
    }
}

    return (
        <div className='w-full h-full drop-shadow-xl shadow-xl border-purple-800 border-2 rounded-2xl p-8'>
             <p className='text-xl text-center font-semibold'>Median Gross Monthly Salary</p>
             <ResponsiveChoropleth
            data={data}
            features={malaysia.features}
            margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
            colors="purples"
            domain={[1500,7000]}
            unknownColor="#666666"
            label="properties.state"
            valueFormat=".1s"
            projectionScale={3300}
            projectionTranslation={[0.43, 1.01]}
            projectionRotation={[-110, 0, 0]}
            borderWidth={0.8}
            borderColor="#13293d"
            isInteractive={true}
            tooltip={tooltip}
            legends={[
                {
                    anchor: 'bottom-left',
                    direction: 'column',
                    justify: true,
                    translateX: 15,
                    translateY: -30,
                    itemsSpacing: 0,
                    itemWidth: 94,
                    itemHeight: 18,
                    itemDirection: 'left-to-right',
                    itemTextColor: '#444444',
                    itemOpacity: 0.85,
                    symbolSize: 18,
                    effects: [
                        {
                            on: 'hover',
                            style: {
                                itemTextColor: '#000000',
                                itemOpacity: 1
                            }
                        }
                    ]
                }
            ]}
        />
        </div>
    )
}

export default MapChart
