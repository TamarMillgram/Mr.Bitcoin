<template>
  <div class="charts">
    <!-- <h1>Stats</h1> -->
    <PriceHistoryChart :marketPriceHistory="marketPriceHistory" />
    <AvgBlockChart :getAvgBlockSize="getAvgBlockSize" />
  </div>
</template>

<script>
import PriceHistoryChart from "../cmps/charts/PriceHistoryChart.vue";
import AvgBlockChart from "../cmps/charts/AvgBlockChart.vue";
import { bitcoinService } from "../services/bitcoinService";
export default {
  data() {
    return {
      marketPriceHistory: {},
      getAvgBlockSize: {},
    };
  },
  components: {
    PriceHistoryChart,
    AvgBlockChart,
  },
  created() {
    this.marketPriceHistory = bitcoinService.getMarketPriceHistory();
    this.getAvgBlockSize = bitcoinService.getAvgBlockSize();
  },
};
</script>

<style></style>
