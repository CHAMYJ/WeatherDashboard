import React, { useState, useEffect, Fragment } from "react";
import "./Dashboard.css";
import {
  MenuItem,
  FormControl,
  Select,
  Card,
  CardContent,
} from "@material-ui/core";
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import Table from "./Table";
import MomentUtils from "@date-io/moment";
import moment from "moment";
import { Line } from "react-chartjs-2";

function Dashboard() {
  // STATE = How to write a variable in REACT
  const [selectedDate, setDate] = useState(moment);
  const [inputValue, setInputValue] = useState(
    moment("2021-09-01").format("YYYY-MM-DD")
  );
  const [result1, setResult1] = useState([]);
  const [result2, setResult2] = useState([]);
  const [result3, setResult3] = useState([]);
  const [result4, setResult4] = useState([]);
  const [result5, setResult5] = useState([]);
  const [result6, setResult6] = useState([]);
  const [result7, setResult7] = useState([]);
  const [result8, setResult8] = useState([]);

  const [countries, setCountries] = useState([]);

  const [finalDate, setFinalDate] = useState([]);
  const [temperatureLow, setTemperatureLow] = useState([]);
  const [temperatureHigh, setTemperatureHigh] = useState([]);
  const [finalForecasts, setFinalForecasts] = useState([]);

  const [tableData, setTableData] = useState([]);
  const [chartData, setChartData] = useState({});
  const [data, setData] = useState({});

  const options = {
    legend: {
      display: false,
    },
    elements: {
      point: {
        radius: 0,
      },
      line: {
        tension: 0, // disables bezier curves
      },
    },
    maintainAspectRatio: true,
    responsive: true,
    scales: {
      xAxis: {
        type: "time",
      },
      yAxes: [
        {
          gridLines: {
            display: false,
          },
          ticks: {
            beginAtZero: false,
            min: 28,
            max: 36,
          },
        },
      ],
    },
    options: {
      plugins: {
        title: {
          display: true,
          text: "Max Temperature for Each Day",
        },
      },
    },
  };

  const options2 = {
    legend: {
      display: false,
    },
    elements: {
      point: {
        radius: 0,
      },
      line: {
        tension: 0, // disables bezier curves
      },
    },
    maintainAspectRatio: true,
    responsive: true,
    scales: {
      xAxis: {
        type: "time",
      },
      yAxes: [
        {
          gridLines: {
            display: false,
          },
          ticks: {
            beginAtZero: false,
            min: 20,
            max: 30,
          },
        },
      ],
    },
    options: {
      plugins: {
        title: {
          display: true,
          text: "Min Temperature for Each Day",
        },
      },
    },
  };

  let temperature_low = [];
  let temperature_high = [];
  let date_final = [];
  let forecast_final = [];
  const dateIncrement = (date, increment) => {
    var chooseDate = new Date(date);
    chooseDate.setDate(chooseDate.getUTCDate() + increment);
    var futureDate =
      chooseDate.getFullYear() +
      "-" +
      ("0" + (chooseDate.getMonth() + 1)).slice(-2) +
      "-" +
      ("0" + chooseDate.getDate()).slice(-2);
    return futureDate;
  };

  const onDateChange = (date, value) => {
    setDate(date);
    setInputValue(value);
  };

  const dateFormatter = (str) => {
    return str;
  };

  useEffect(() => {
    //a async => send a request, wait for it, and do something with it
    const urls = [
      `https://api.data.gov.sg/v1/environment/4-day-weather-forecast?date=${dateIncrement(
        inputValue,
        0
      )}`,
      `https://api.data.gov.sg/v1/environment/4-day-weather-forecast?date=${dateIncrement(
        inputValue,
        4
      )}`,
      `https://api.data.gov.sg/v1/environment/4-day-weather-forecast?date=${dateIncrement(
        inputValue,
        8
      )}`,
      `https://api.data.gov.sg/v1/environment/4-day-weather-forecast?date=${dateIncrement(
        inputValue,
        12
      )}`,
      `https://api.data.gov.sg/v1/environment/4-day-weather-forecast?date=${dateIncrement(
        inputValue,
        16
      )}`,
      `https://api.data.gov.sg/v1/environment/4-day-weather-forecast?date=${dateIncrement(
        inputValue,
        20
      )}`,
      `https://api.data.gov.sg/v1/environment/4-day-weather-forecast?date=${dateIncrement(
        inputValue,
        24
      )}`,
      `https://api.data.gov.sg/v1/environment/4-day-weather-forecast?date=${dateIncrement(
        inputValue,
        28
      )}`,
    ];
    const getCountriesData = async () => {
      const [data1, data2, data3, data4, data5, data6, data7, data8] =
        await Promise.all(
          urls.map((url) => fetch(url).then((response) => response.json()))
        );
      setResult1(
        data1.items.slice(0, 1).map((nested) =>
          nested.forecasts.map((c) => ({
            date: c.date,
            forecast: c.forecast,
            temperature_low: c.temperature.low,
            temperature_high: c.temperature.high,
          }))
        )
      );
      setResult2(
        data2.items.slice(0, 1).map((nested) =>
          nested.forecasts.map((c) => ({
            date: c.date,
            forecast: c.forecast,
            temperature_low: c.temperature.low,
            temperature_high: c.temperature.high,
          }))
        )
      );
      setResult3(
        data3.items.slice(0, 1).map((nested) =>
          nested.forecasts.map((c) => ({
            date: c.date,
            forecast: c.forecast,
            temperature_low: c.temperature.low,
            temperature_high: c.temperature.high,
          }))
        )
      );
      setResult4(
        data4.items.slice(0, 1).map((nested) =>
          nested.forecasts.map((c) => ({
            date: c.date,
            forecast: c.forecast,
            temperature_low: c.temperature.low,
            temperature_high: c.temperature.high,
          }))
        )
      );
      setResult5(
        data5.items.slice(0, 1).map((nested) =>
          nested.forecasts.map((c) => ({
            date: c.date,
            forecast: c.forecast,
            temperature_low: c.temperature.low,
            temperature_high: c.temperature.high,
          }))
        )
      );
      setResult6(
        data6.items.slice(0, 1).map((nested) =>
          nested.forecasts.map((c) => ({
            date: c.date,
            forecast: c.forecast,
            temperature_low: c.temperature.low,
            temperature_high: c.temperature.high,
          }))
        )
      );
      setResult7(
        data7.items.slice(0, 1).map((nested) =>
          nested.forecasts.map((c) => ({
            date: c.date,
            forecast: c.forecast,
            temperature_low: c.temperature.low,
            temperature_high: c.temperature.high,
          }))
        )
      );
      setResult8(
        data8.items.slice(0, 1).map((nested) =>
          nested.forecasts.map((c) => ({
            date: c.date,
            forecast: c.forecast,
            temperature_low: c.temperature.low,
            temperature_high: c.temperature.high,
          }))
        )
      );
      setTableData(
        data1.items
          .slice(0, 1)
          .map((nested) =>
            nested.forecasts.map((c) => ({
              date: c.date,
              forecast: c.forecast,
              temperature_low: c.temperature.low,
              temperature_high: c.temperature.high,
            }))
          )
          .concat(
            data2.items.slice(0, 1).map((nested) =>
              nested.forecasts.map((c) => ({
                date: c.date,
                forecast: c.forecast,
                temperature_low: c.temperature.low,
                temperature_high: c.temperature.high,
              }))
            )
          )
          .concat(
            data3.items.slice(0, 1).map((nested) =>
              nested.forecasts.map((c) => ({
                date: c.date,
                forecast: c.forecast,
                temperature_low: c.temperature.low,
                temperature_high: c.temperature.high,
              }))
            )
          )
          .concat(
            data4.items.slice(0, 1).map((nested) =>
              nested.forecasts.map((c) => ({
                date: c.date,
                forecast: c.forecast,
                temperature_low: c.temperature.low,
                temperature_high: c.temperature.high,
              }))
            )
          )
          .concat(
            data5.items.slice(0, 1).map((nested) =>
              nested.forecasts.map((c) => ({
                date: c.date,
                forecast: c.forecast,
                temperature_low: c.temperature.low,
                temperature_high: c.temperature.high,
              }))
            )
          )
          .concat(
            data6.items.slice(0, 1).map((nested) =>
              nested.forecasts.map((c) => ({
                date: c.date,
                forecast: c.forecast,
                temperature_low: c.temperature.low,
                temperature_high: c.temperature.high,
              }))
            )
          )
          .concat(
            data7.items.slice(0, 1).map((nested) =>
              nested.forecasts.map((c) => ({
                date: c.date,
                forecast: c.forecast,
                temperature_low: c.temperature.low,
                temperature_high: c.temperature.high,
              }))
            )
          )
          .concat(
            data8.items.slice(0, 1).map((nested) =>
              nested.forecasts.map((c) => ({
                date: c.date,
                forecast: c.forecast,
                temperature_low: c.temperature.low,
                temperature_high: c.temperature.high,
              }))
            )
          )
      );

      setChartData(
        data1.items
          .slice(0, 1)
          .map((nested) =>
            nested.forecasts.map((c) => ({
              date: c.date,
              temperature_high: c.temperature.high,
            }))
          )
          .concat(
            data2.items.slice(0, 1).map((nested) =>
              nested.forecasts.map((c) => ({
                date: c.date,
                temperature_high: c.temperature.high,
              }))
            )
          )
          .concat(
            data3.items.slice(0, 1).map((nested) =>
              nested.forecasts.map((c) => ({
                date: c.date,
                temperature_high: c.temperature.high,
              }))
            )
          )
          .concat(
            data4.items.slice(0, 1).map((nested) =>
              nested.forecasts.map((c) => ({
                date: c.date,
                temperature_high: c.temperature.high,
              }))
            )
          )
          .concat(
            data5.items.slice(0, 1).map((nested) =>
              nested.forecasts.map((c) => ({
                date: c.date,
                temperature_high: c.temperature.high,
              }))
            )
          )
          .concat(
            data6.items.slice(0, 1).map((nested) =>
              nested.forecasts.map((c) => ({
                date: c.date,
                temperature_high: c.temperature.high,
              }))
            )
          )
          .concat(
            data7.items.slice(0, 1).map((nested) =>
              nested.forecasts.map((c) => ({
                date: c.date,
                temperature_high: c.temperature.high,
              }))
            )
          )
          .concat(
            data8.items.slice(0, 1).map((nested) =>
              nested.forecasts.map((c) => ({
                date: c.date,
                temperature_high: c.temperature.high,
              }))
            )
          )
      );
    };
    getCountriesData();
  }, [inputValue]);

  let dummy = result1
    .concat(result2)
    .concat(result3)
    .concat(result4)
    .concat(result5)
    .concat(result6)
    .concat(result7)
    .concat(result8);
  dummy.map((item) => {
    item.map((c) => {
      temperature_low.push(c.temperature_low);
      temperature_high.push(c.temperature_high);
      date_final.push(c.date);
      forecast_final.push(c.forecast);
    });
  });

  let mapArrays = (options, values, values2, values3) => {
    let res = [];
    for (let i = 0; i < options.length; i++) {
      res.push({
        date: options[i],
        temperature_low: values[i],
        temperature_high: values2[i],
        forecast: values3[i],
      });
    }
    return res;
  };
  let dummy2 = mapArrays(
    date_final,
    temperature_low,
    temperature_high,
    forecast_final
  );

  console.log("dummy2");
  console.log(dummy2);

  let state = {
    labels: date_final,
    datasets: [
      {
        backgroundColor: "rgba(204,16,52,0.8)",
        borderColor: "#CC1034",
        data: temperature_high,
      },
    ],
  };

  let state1 = {
    labels: date_final,
    datasets: [
      {
        backgroundColor: "rgba(204,16,52,0.8)",
        borderColor: "#CC1034",
        data: temperature_low,
      },
    ],
  };

  return (
    <div className="app">
      <div className="app__header">
        <h1>SINGAPORE WEATHER FORECASTS</h1>
        <Fragment>
          <MuiPickersUtilsProvider libInstance={moment} utils={MomentUtils}>
            <KeyboardDatePicker
              value={selectedDate}
              format="YYYY-MM-DD"
              inputValue={inputValue}
              onChange={onDateChange}
              rifmFormatter={dateFormatter}
              placeholder="2018-10-10"
            />
          </MuiPickersUtilsProvider>
        </Fragment>
      </div>
      <div className="app__body">
        <div className="app__left">
          <h3 className="app__graphTitle">
            {dummy2?.slice(0, 30).length} Days Forecasts
          </h3>
          <>
            {tableData?.length > 0 ? (
              <Table countries={dummy2.slice(0, 30)} />
            ) : (
              <h1 className="app__leftText">
                Please select the date 5 days before from today.
              </h1>
            )}
          </>
        </div>
        <div className="app__right">
          <div className="app__right1">
            <h1 className="app__titleRight">Max Temperature in Each Day</h1>
            {temperature_high?.length > 0 && (
              <Line options={options} height={160} data={state} />
            )}
          </div>
          <div className="app__right2">
            <h1 className="app__titleRight">Min Temperature in Each Day</h1>
            {temperature_low?.length > 0 && (
              <Line options={options2} height={160} data={state1} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
