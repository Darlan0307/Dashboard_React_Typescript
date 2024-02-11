import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend } from 'recharts';

const data = [
  { name: 'TRI 1', subscribers: 1207, loss: 325 },
  { name: 'TRI 2', subscribers: 3468, loss: 2290 },
  { name: 'TRI 3', subscribers: 1703, loss: 2023 },
  { name: 'TRI 4', subscribers: 4019, loss: 1589 },
];

const GraphLine = () => {

  const [width,setWidth] = useState(320)
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 741px)',
  });
  const isTabletOrMobile = useMediaQuery({
    query: '(max-width: 740px)',
  });

  useEffect(() => {
    if (isDesktopOrLaptop) {
      setWidth(600);
    } else if (isTabletOrMobile) {
      setWidth(350);
    }
  }, [isDesktopOrLaptop, isTabletOrMobile]);


  return (
    <>
      {!isTabletOrMobile &&(
        <LineChart
        width={width}
        height={350}
        data={data}
  
      >
        <XAxis dataKey="name" />
          <YAxis />        
        <Tooltip />
        <Legend />
        
        <Line
          type="monotone"
          dataKey="subscribers"
          stroke="#00b273"
          strokeWidth={5} 
          style={{
            filter:`drop-shadow( 0px 0px 5px rgba(0, 250, 150,0.70) )`
          }}
          activeDot={{ r: 8 }}
          animationEasing="ease-in-out" 
          animationDuration={3000} 
        />
        <Line
          type="monotone"
          dataKey="loss"
          stroke="#8884d8"
          strokeWidth={5} 
          animationDuration={3000} 
          animationEasing="ease-in-out" 
          style={{
            filter:`drop-shadow( 0px 0px 5px rgba(76, 67, 255, 0.7) )`
          }}
        />
      </LineChart>
      )}
    </>
  );
};

export default GraphLine;