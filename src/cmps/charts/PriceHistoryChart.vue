<template>
  <div class="chart">
    <Line
      id="my-chart-id"
      :options="chartOptions"
      :data="chartData"
      :height="300"
    />
  </div>
</template>

<script>
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
import { Line } from "vue-chartjs";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

import { utilService } from "../../services/util.service.js";
export default {
  props: {
    marketPriceHistory: { type: Object, required: true },
  },
  name: "BarChart",
  components: { Line },
  data() {
    return {
      chartData: {
        labels: [],
        datasets: [
          {
            label: "Market price History",
            data: null,
            fill: false,
            borderColor: "rgb(133, 163, 137)",
            tension: 0.1,
          },
        ],
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
      },
    };
  },
  created() {
    this.chartData.labels = this.getDay();
    this.chartData.datasets[0].data = this.getData();
  },
  methods: {
    getDay() {
      if (this.marketPriceHistory.values) {
        return this.marketPriceHistory.values.map((value) => {
          return utilService.formatDate(value.x, "en-GB");
        });
      }
      return [];
    },
    getData() {
      if (this.marketPriceHistory.values) {
        return this.marketPriceHistory.values.map((value) => {
          return value.y;
        });
      }
      return [];
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
