import { Link } from "react-router-dom";
import "./Figures.css";
import SingleTool from "./SingleTool";
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const options = {
    chart: {
        type: 'column'
    },
    title: {
        align: 'center',
        text: 'Toolhub Records Data'
    },
    
    xAxis: {
        type: 'category'
    },
    yAxis: {
        title: {
            text: 'Number of tools'
        }

    },
    
    plotOptions: {
        series: {
            borderWidth: 0,
            dataLabels: {
                enabled: true,
                format: '{point.y}'
            }
        }
    },

    tooltip: {
        headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
        pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y}</b><br/>'
    },

    series: [
        {
            name: "Records",
            colorByPoint: true,
            data: [
                {
                    name: "Total number of tools in records",
                    y: 73
                },
                {
                    name: "Tools with missing information",
                    y: 22
                    
                },
                {
                    name: "Tools edited with records management tool",
                    y: 57
                    
                }
            ]
        }
    ],
    
            
}

const settings = {
    infinite: true,
    dots: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    lazyLoad: true,
    autoplay: false,
  autoplaySpeed: 2000,
   
  };

const Figures = ({ toolsInfo, toDelete, toEdit }) => {
  
  return (
    <div className="records-container">
      <header className="hero">
        <HighchartsReact highcharts={Highcharts} options={options} />
      </header>
      <div className="tools">
        <div className="section-title">
          <h2>Tools Recorded</h2>
        </div>
        <div className="tools-center">
          <Slider {...settings}>
            {toolsInfo.map((tool) => {
            return (
              <SingleTool
                key={tool.id}
                tool={tool}
                toolsInfo={toolsInfo}
                deleteFunction={toDelete}
                editFuntion={toEdit}
              />
            );
          })}
          </Slider>
          
        </div>
        <div className="button">
          <Link to={`/records/new-record`}>
            <button className="btn">Add a Record</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Figures;
