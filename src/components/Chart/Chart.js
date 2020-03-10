import React, { Component } from "react";
import PropTypes from "prop-types";
import Highcharts from "highcharts/highstock";
import PieChart from "highcharts-react-official";

export default class Chart extends Component {
    state = {
        data: {
            male: 0,
            female: 0,
        },
    }

    componentDidMount() {
        this.getData();
    }

    getData = async () => {
        let male = 0;
        let female = 0;

        await this.props.users.forEach((element) => {
            if (element.gender === "male") {
                male += 1;
            } else {
                female += 1;
            }
        });

        male = (male / this.props.users.length) * 100;
        male = +male.toFixed(1);
        female = (female / this.props.users.length) * 100;
        female = +female.toFixed(1);

        this.setState({
            data: {
                male,
                female,
            },
        });
    }

    render() {
        const options = {
            chart: {
                type: "pie",
            },
            title: {
                text: "Gender users",
            },
            series: [{
                name: "Count",
                colorByPoint: true,
                data: [{
                    name: `Male: ${this.state.data.male}%`,
                    y: this.state.data.male,
                }, {
                    name: `Female: ${this.state.data.female}%`,
                    y: this.state.data.female,
                }],
            }],
        };

        return (
            <div>
                <PieChart highcharts={Highcharts} options={options} />
            </div>
        );
    }
}

Chart.propTypes = {
    users: PropTypes.any,
};
