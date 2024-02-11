
import  { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';
import { useMediaQuery } from 'react-responsive';

const GraphBar = () => {
  const [width, setWidth] = useState(300);
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 721px)',
  });
  const isTabletOrMobile = useMediaQuery({
    query: '(min-width: 501px)',
  });
  const isMobile = useMediaQuery({
    query: '(max-width: 500px)',
  });

  useEffect(() => {
    if (isDesktopOrLaptop) {
      setWidth(600);
    } else if (isTabletOrMobile) {
      setWidth(400);
    } else if(isMobile){
      setWidth(250);
    }
  }, [isDesktopOrLaptop, isTabletOrMobile]);

  const data = [
    { name: 'Dec21', value: 4000 },
    { name: 'Dec22', value: 3000 },
    { name: 'Dec23', value: 2000 },
    { name: 'Dec24', value: 2780 },
    { name: 'Dec25', value: 1890 },
  ];

  return (
    <BarChart
      width={width}
      height={280}
      data={data}
    >
    
      <XAxis dataKey="name" />
      {!isMobile && (
        <YAxis />
      )}
      <Tooltip />
      
      <Bar dataKey="value" fill="#00b273" barSize={30}
      animationDuration={3000}
      style={
        {
          filter:  `drop-shadow( 0px 0px 5px rgba(0, 250, 150,0.70) )`,
        }
      }
      animationEasing="ease-in-out"
      />
    </BarChart>
  );
};

export default GraphBar;