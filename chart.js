import Chart from './node_modules/chart.js/auto'

(async function() {
    const data = {
        labels: [
          'Red',
          'Blue',
          'Yellow',
          'Red1',
          'Blue2',
          'Yellow3'
        ],
        datasets: [{
          label: 'My First Dataset',
          data: [300, 50, 100, 10, 20 ,15 ],
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)',
            'rgb(0,255,0)'
          ],
          hoverOffset: 4
        }]
      };
  
    new Chart(
      document.getElementById('chart'),
      {
        type: 'pie',
        data: data,
      }
    );
  })();
   