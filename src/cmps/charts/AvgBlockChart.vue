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
    getAvgBlockSize: { type: Object, required: true },
  },
  name: "BarChart",
  components: { Line },
  data() {
    return {
      chartData: {
        labels: [],
        datasets: [
          {
            label: "Average block size",
            data: null,
            fill: false,
            borderColor: "rgb(90, 150, 227)",
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
      if (this.getAvgBlockSize.values) {
        return this.getAvgBlockSize.values.map((value) => {
          return utilService.formatDate(value.x, "en-GB");
        });
      }
      return [];
    },
    getData() {
      if (this.getAvgBlockSize.values) {
        return this.getAvgBlockSize.values.map((value) => {
          return value.y;
        });
      }
      return [];
    },
  },
};
</script>

<style lang="scss"></style>
