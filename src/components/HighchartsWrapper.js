import React from 'react';
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import moment from "moment";

export default class HighchartsWrapper extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    marshallData(data) {
        const [title] = Object.keys(data[0]).filter((key, idx) => (idx === 0)),
            dataArr = data.map((row) => {
                const val = row[title],
                    time = row['timestamp'];
                return [time, val];
            });
        return [{
            name: title,
            data: dataArr
        }];
    }

    render() {
        const {data = [], title} = this.props,
            options = {
                title: {
                    text: title
                },
                legend: {
                    enabled: false
                },
                chart: {
                    backgroundColor: '#31333c',
                    type: 'areaspline'
                },
                xAxis: {
                    type: 'datetime',
                    labels: {
                        formatter: function () {
                            return moment(this.x).format('MMM Do, h:mm:ss a')
                        }
                    },
                    title: {
                        text: null
                    }
                },
                yAxis: {
                    title: {
                        text: title
                    },
                    min: 0
                },
                plotOptions: {
                    series: {
                        fillColor: {
                            linearGradient: [0, 0, 0, 300],
                            stops: [
                                [0, Highcharts.Color('#fff').setOpacity(0.3).get('rgba')],
                                [1, Highcharts.Color('#fff').setOpacity(0).get('rgba')]
                            ]
                        },
                        marker: {
                            enabled: true
                        }
                    }
                },
                credits: {
                    enabled: false
                },
                series: this.marshallData(data)
            };
        return (
            <HighchartsReact
                highcharts={Highcharts}
                options={options}
            />
        );
    }
}