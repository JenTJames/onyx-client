import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  ChartData,
  ChartOptions,
} from "chart.js";
import { Heading, Text } from "@radix-ui/themes";
import { purple, purpleDark } from "@radix-ui/colors";
import useTheme from "../../hooks/useTheme";
import GaugeChartProps from "../../types/props/GaugeChartProps.interface";

ChartJS.register(ArcElement, Tooltip, Legend);

const GaugeChart: React.FC<GaugeChartProps> = ({
  value,
  total = 100,
  label,
}) => {
  const { theme } = useTheme();
  const normalizedValue = Math.min(value, total);
  const colors = theme === "dark" ? purpleDark : purple;

  const data: ChartData<"doughnut"> = {
    datasets: [
      {
        data: [normalizedValue, total - normalizedValue],
        backgroundColor: [colors.purple9, colors.purple3],
        borderWidth: 0,
      },
    ],
  };

  const options: ChartOptions<"doughnut"> = {
    cutout: "60%",
    plugins: {
      tooltip: { enabled: false },
      legend: { display: false },
    },
  };

  return (
    <div className="relative w-full max-h-64 justify-center items-center flex p-2">
      <Doughnut data={data} options={options} />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <Heading size="8">{normalizedValue}%</Heading>
        <Text color="gray" size="2">
          {label}
        </Text>
      </div>
    </div>
  );
};

export default GaugeChart;
