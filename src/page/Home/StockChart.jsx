import { Button } from '@/components/ui/button'
import React, { useState } from 'react'
import ReactApexChart from 'react-apexcharts'

const timeSeries = [
  {
    keyword: 'DIGITAL_CURRENCY_DAILY',
    key: 'Time Series (Daily)',
    label: '1 Day',
    value: 1,
  },
  {
    keyword: 'DIGITAL_CURRENCY_WEEKLY',
    key: 'Time Series (Weekly)',
    label: '1 Week',
    value: 7,
  },
  {
    keyword: 'DIGITAL_CURRENCY_MONTHLY',
    key: 'Time Series (Monthly)',
    label: '1 Month',
    value: 30,
  },
]

const StockChart = () => {
  const [activeLable, setActiveLable] = useState('1 Day')

  const searies = [
    {
      data: [
        [1751961829826, 108449.964094994],
        [1751965388068, 108276.76542049],
        [1751968965747, 108458.159721787],
        [1751972620158, 108843.037665042],
        [1751976230153, 108772.621417249],
        [1751979833973, 108904.873956515],
        [1751983245426, 109073.071447283],
        [1751987026192, 108406.17434777],
        [1751990639516, 108269.047176563],
        [1751994208603, 108416.673941087],
        [1751997846596, 108941.071725775],
        [1752001445284, 109116.141473774],
        [1752005042558, 108784.869624481],
        [1752008622474, 108675.357078865],
        [1752012184038, 108930.28353025],
        [1752015838904, 108920.191144159],
        [1752019436139, 108945.709036394],
        [1752023035281, 108962.472560828],
        [1752026647713, 108795.962565718],
        [1752030196564, 108649.693480454],
        [1752033802905, 108382.604013203],
        [1752037370113, 108542.065404143],
        [1752040993182, 108775.9921418],
        [1752044636700, 108835.896658352],
        [1752048124359, 108712.303109672],
        [1752051627281, 108699.699136134],
        [1752055255077, 108769.59937353],
        [1752059005652, 108873.69016313],
        [1752062606517, 109082.595550085],
        [1752066037275, 109433.073966364],
        [1752069838442, 109416.186641119],
        [1752073439773, 108843.27368624],
        [1752076997051, 109069.478532054],
        [1752080604519, 109408.023026317],
        [1752084231404, 109153.427748204],
        [1752087831035, 109540.109753489],
        [1752091427121, 111741.511915221],
        [1752095020133, 110751.649569435],
        [1752098597685, 110968.684041149],
        [1752102230288, 111385.382575704],
        [1752106089165, 111309.188372971],
        [1752109421919, 111007.437505933],
        [1752113036247, 111287.540479746],
        [1752116621604, 111254.009453563],
        [1752120223801, 111090.867704858],
        [1752123820774, 111167.068612139],
        [1752127434856, 111103.526464391],
        [1752131038190, 111269.672324906],
        [1752134460301, 111255.278540002],
        [1752138214712, 111277.720115379],
        [1752141649630, 111096.696688429],
        [1752145408526, 111016.497782302],
        [1752149033871, 111039.241035848],
      ],
    },
  ]
  const options = {
    chart: {
      id: 'area-datetime',
      type: 'area',
      height: 350,
      zoom: {
        autoScaleYaxis: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      type: 'datetime',
      tickAmount: 6,
    },
    colors: ['#758AA2'],
    markers: {
      colors: ['#fff'],
      strokeColor: '#fff',
      size: 0,
      strokeWidth: 1,
      style: 'hollow',
    },
    tooltip: {
      theme: 'dark',
    },
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0.9,
        stops: [0, 100],
      },
    },
    grid: {
      borderColor: '#47535E',
      strokeDashArray: 4,
      show: true,
    },
  }

  const handleActiveLable = (value) => {
    setActiveLable(value)
  }
  return (
    <div>
      <div>
        {timeSeries.map((item) => (
          <Button
            variant={activeLable == item.value ? '' : 'outline'}
            onClick={() => handleActiveLable(item.value)}
            key={item.label}
          >
            {item.label}
          </Button>
        ))}
      </div>
      <div id="chart-timelines">
        <ReactApexChart
          options={options}
          series={searies}
          type="area"
          height={450}
        />
      </div>
    </div>
  )
}

export default StockChart
