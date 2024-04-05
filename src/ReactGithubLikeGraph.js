import './App.css';
import { useEffect, useState } from 'react'

const ReactGithubLikeGraph = ({ dataset }) => {

    const [datesOf2024, setDatesOd2024] = useState()
    const [year, setYear] = useState()
    const [givenYears, setgivenYears] = useState()

    useEffect(() => {
        let yrs = getYears(dataset)
        setgivenYears(yrs)
        setYear(yrs[0])
        setDatesOd2024(getDatesOfYear(yrs[0]))
    }, [])

    function getDatesOfYear(year) {
        let datesOfYear = [];
        for (let month = 0; month < 12; month++) {
            let daysInMonth = new Date(year, month + 1, 0).getDate();
            for (let day = 1; day <= daysInMonth; day++) {
                let currentDate = new Date(year, month, day).valueOf();
                let dataToPush = {
                    currentDate: currentDate,
                    type: 'none'
                }
                let givenDate = new Date(currentDate);
                const flag = isSameDate(givenDate)
                if (flag.success) dataToPush.type = dataset[flag.index].type

                datesOfYear.push(dataToPush);
            }
        }
        return datesOfYear;
    }

    function formatDate(milliseconds) {
        const date = new Date(milliseconds);
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return date.toLocaleDateString('en-GB', options);
    }
 
    function getYears(dataset) {
        let years = [];
        dataset?.forEach(item => {
            let year = new Date(item.date).getFullYear();
            if (!years.includes(year)) {
                years.push(year);
            }
        });
        years.sort((a, b) => a - b)

        return years;
    }
    function isSameDate(dateToCheck) {
        for (let i = 0; i < dataset.length; i++) {
            let currentDate = new Date(dataset[i].date);
            if (`${dateToCheck.getDate()}-${dateToCheck.getMonth() + 1}-${dateToCheck.getFullYear()}` === `${currentDate.getDate()}-${currentDate.getMonth() + 1}-${currentDate.getFullYear()}`) {
                return { success: true, index: i };
            }
        }
        return { success: false };
    }
    const yearChange = (event) => {
        let selectedValue = parseInt(event.target.value);
        setDatesOd2024(getDatesOfYear(selectedValue));
       

    }

    const AllMonths = [
        "JAN",
        "FEB",
        "MAR",
        "APR",
        "MAY",
        "JUN",
        "JUL",
        "AUG",
        "SEP",
        "OCT",
        "NOV",
        "DEC",
    ]
    return (
        <div className="allMain">
            <div className="SubOne">
                <div className="weekDays">MON</div>
                <div className="weekDays">WED</div>
                <div className="weekDays">FRI</div>
            </div>
            <div className="SubTwo">
                <div className="SubTwoOne">
                    {AllMonths.map((ele, idx) => {
                        return (
                            <div key={idx} className="allMonths">{ele}</div>
                        )
                    })
                    }
                </div>

                <div className="SubTwoTwo">
                    {datesOf2024?.map((ele, idx) => {
                        return <div
                            className="OneBox"
                            key={idx}
                            style={{ background: `${ele?.type == 'less' ? "#9be9a8" : ele?.type == "medium" ? "#40c463" : ele?.type == "upper-medium" ? "30a14e" : ele?.type == 'hard' ? "#216e39" : "#ebedf0"}` }} 
                            title={`${ele.type} on ${formatDate(ele.currentDate)}`}
                            ></div>
                    })}
                </div>

                <div className="SubTwoThree">
                    <div style={{ display: 'flex', gap: "4px", marginRight: '7px' }}>
                        <div className='OneBoxOne'></div>
                        <div className='OneBoxTwo'></div>
                        <div className='OneBoxThree'></div>
                        <div className='OneBoxFour'></div>
                        <div className='OneBoxFive'></div>
                    </div>
                    <select id="yearSelect" onChange={yearChange}>
                        {givenYears?.map((ele, idx) => { return <option key={idx} value={ele}>{`YEAR ${ele}`}</option> })
                        }
                    </select></div>
            </div>

        </div>)
}
export default ReactGithubLikeGraph





