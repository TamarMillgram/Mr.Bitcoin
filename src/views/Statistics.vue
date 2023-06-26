<template>
  <div class="charts">
    <div v-if="priceHistory && avgBlockSize">
      <LineChart :chartData="priceHistoryData" />
      <LineChart :chartData="avgBlockSizeData" />
    </div>
  </div>
</template>

<script>
import { bitcoinService } from "../services/bitcoinService";
import LineChart from "../cmps/charts/LineChart.vue";

export default {
  data() {
    return {
      priceHistory: null,
      avgBlockSize: null,
    };
  },
  async created() {
    this.priceHistory = await bitcoinService.getMarketPriceHistory();
    this.avgBlockSize = await bitcoinService.getAvgBlockSize();
  },
  components: { LineChart },

  computed: {
    priceHistoryData() {
      return {
        labels: this.priceHistory.values.map((dataSample) => {
          let date = dataSample.x;
          date = new Date(date * 1000);
          return date.toISOString().split("T")[0];
          // `${date.getDate() + 1}.${date.getMonth() + 1}`
        }),
        datasets: [
          {
            label: "Average USD market price across major bitcoin exchanges.",
            backgroundColor: "#7C9070",
            data: this.priceHistory.values.map((dataSample) => dataSample.y),
          },
        ],
      };
    },
    avgBlockSizeData() {
      return {
        labels: this.avgBlockSize.values.map((dataSample) => {
          let date = dataSample.x;
          date = new Date(date * 1000);
          return date.toISOString().split("T")[0];
        }),
        datasets: [
          {
            label: "The average block size in MB.",
            backgroundColor: "#0A6EBD",
            data: this.avgBlockSize.values.map((dataSample) => dataSample.y),
          },
        ],
      };
    },
  },
};
</script>

<style></style>
