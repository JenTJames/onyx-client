import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
  ChartData,
} from "chart.js";
import { purple, purpleDark } from "@radix-ui/colors";
import useTheme from "../../hooks/useTheme";
import LineChartProps from "../../types/props/LineChartProps.interface";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineChart: React.FC<LineChartProps> = ({ dataPoints, labels, title }) => {
  const { theme } = useTheme();

  const colors = theme === "dark" ? purpleDark : purple;

  const data: ChartData<"line"> = {
    labels,
    datasets: [
      {
        label: title,
        data: dataPoints,
        borderColor: [colors.purple6],
        backgroundColor: [colors.purple9],
        hoverBorderWidth: 10,
      },
    ],
  };

  const options: ChartOptions<"line"> = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
  };
  return <Line options={options} data={data} />;
};

export default LineChart;
