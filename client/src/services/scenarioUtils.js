// Compare the old and new resource's metrics and calculate the differences
export const comparePairs = (summaryData, oldResource, newResource) => {
  const differences = {};
  
  const metrics = Object.keys(summaryData[oldResource]).filter(metric => metric !== 'annual spend ($/year)');
  
  for (let metric of metrics) {
    const oldValue = parseFloat(summaryData[oldResource][metric]);
    const newValue = parseFloat(summaryData[newResource][metric]);
    const difference = ((oldValue - newValue) / oldValue) * 100;
    differences[metric] = difference;
  }

  return differences;
};

// Get the top N metrics with the largest improvements
export const getTopMetrics = (differences, numMetrics = 3) => {
  return Object.entries(differences)
    .sort(([, a], [, b]) => b - a)
    .slice(0, numMetrics);
};

// Generate a summary object with improvements and annual spend
export const getSummary = (summaryData, oldResource, newResource) => {
  const differences = comparePairs(summaryData, oldResource, newResource);
  const topMetrics = getTopMetrics(differences);

  const summary = {};
  for (let [metric, improvement] of topMetrics) {
    // truncate the parentheses-enclosed part of the metric name
    metric = metric.replace(/ \(.+\)/, '');
    summary[metric] = Math.round(improvement);
  }

  const annualSpendNew = parseFloat(summaryData[newResource]['annual spend ($/year)']);
  summary['Annual Spend'] = annualSpendNew.toFixed(0);

  return summary;
};
