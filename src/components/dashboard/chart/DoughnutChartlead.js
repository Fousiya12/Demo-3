import React, {useEffect} from "react";
import Chart  from "chart.js/auto";
import axios from "axios";
import "../dashboard.css";

function DoughnutChartlead() {
    const [count, setCount] = React.useState([{
        tcount:"",
        ncount:"",
        ipcount:"",
        ccount:""
    }]);
    useEffect(() => {
        let requesteddata=false;
        axios.get('http://localhost:3001/leadertasks/totalcount/${uid}')
        .then(res => {
            console.log(res);
            if(!requesteddata)
            {setCount(res.data.tcount)
            }
            console.log(count);
        
        /* axios.get('http://localhost:3001/leadertasks/newcount/${uid}')
        .then(res => {
            console.log(res);
            if(!requesteddata)
            {setCount(res.data.ncount)
            }
            console.log(count); */

        const ctx= document.getElementById("doughnutchart");
        new Chart(ctx, {
            type: "doughnut",
            data: {
                labels: ["New", "Inprogress", "Compeleted", "Total"], 
                datasets: [
                    {
                        label: "chart",
                        data: [2, 5, 2, res.data.tcount],
                        backgroundColor: [
                            "Yellow",
                            "Red",
                            "Blue",
                            "Green"
                        ],
                        borderColor: ["Palegreen"],
                        borderWidth: 1
                    }
                ]
            }
        // });
         });})
    });
    return (
        <div className="dchart">
            <canvas id="doughnutchart" width="400" height="400" />
        </div>
    );
}

export default DoughnutChartlead;