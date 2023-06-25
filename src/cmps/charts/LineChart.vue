<template>
  <div class="chart">
    <Line :data="chartData" :options="chartOptions" :style="myStyles" />
  </div>
</template>

<script>
import { Line } from "vue-chartjs";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default {
  name: "LineChart",
  components: { Line },
  props: {
    chartData: {
      type: Object,
      required: true,
    },
    chartOptions: {
      type: Object,
      default: () => {},
      responsive: true,
      maintainAspectRatio: false,
    },
  },
  computed: {
    myStyles() {
      return {
        height: "45vh",
        width: "100%",
      };
    },
  },
};
</script>

<style lang="scss">
.chart {
  margin: auto;
  margin-block: 3.5em;
  max-width: 800px;
  height: 30rem;
  padding: 2.4rem;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  background-color: rgba(228, 228, 228, 0.766);
}
</style>
