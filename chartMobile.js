import Chart from './node_modules/chart.js/auto'

(async function() {
    const data = {
        labels: [
          'Expenses',
          'Insurance',
          'Loans',
          'Transport',
          'Entertainment',
          'Taxes'
        ],
        datasets: [{
          label: 'My First Dataset',
          data: [50, 50, 50, 50, 50 ,50 ],
          backgroundColor: [
            '#82B5F2',
            '#82B5F2',
            '#82B5F2',
            '#82B5F2',
            '#82B5F2',
            '#82B5F2'
          ],
          hoverOffset: 4
        }]
      };
  
    new Chart(
      document.getElementById('chartMobile'),
      {
        type: 'pie',
        data: data,
      }
    );
  })();
