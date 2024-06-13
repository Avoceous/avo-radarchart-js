# avo-radarchart-js
Radar Chart animations with Chartjs open-source JavaScript library
https://github.com/Avoceous/avo-radarchart-js/assets/63419938/7da52248-875b-40fc-86ac-20c17123fe9a
![screenshot-1718256392171](https://github.com/Avoceous/avo-radarchart-js/assets/63419938/08d90a48-8fc1-420d-bb64-122d9939550d)
![Avoceous RadarChart](https://github.com/Avoceous/avo-radarchart-js/assets/63419938/d8d78b78-de2d-4dab-9306-3ada6346c24e)

// JavaScript Animation & loop for the Radar Chart
  var data6 = {
    labels: ['Welcome', 'to', 'Avoceous', 'Github', 'Page'],
    datasets: [
      {
        label: 'Welcome',
        data: [7, 8, 6, 9, 8],
        backgroundColor: 'rgba(235, 127, 0, 0.5)', // #EB7F00
        borderWidth: 2 // Border width of the radar area
      },
      {
        label: 'to',
        data: [6, 7, 8, 7, 9],
        backgroundColor: 'rgba(22, 149, 163, 0.5)', // #1695A3
        borderWidth: 2 // Border width of the radar area
      },
      {
        label: 'Avoceous',
        data: [8, 9, 7, 6, 8],
        backgroundColor: 'rgba(243, 255, 226, 0.5)', // #F3FFE2
        borderWidth: 2 // Border width of the radar area
      },
      {
        label: 'Github',
        data: [9, 7, 8, 9, 6],
        backgroundColor: 'rgba(44, 62, 80, 0.5)', // #2C3E50
        borderWidth: 2 // Border width of the radar area
      },
      {
        label: 'Page',
        data: [6, 8, 7, 9, 7],
        backgroundColor: 'rgba(231, 76, 60, 0.5)', // #E74C3C
        borderWidth: 2 // Border width of the radar area
      }
    ]
  };

  // Configuration object for the 6th radar chart
  const config6 = {
    type: 'radar',
    data: data6,
    options
  };

  // Get the canvas element for the 6th radar chart and render it
  var ctx6 = document.getElementById('radarChart6').getContext('2d');
  var radarChart6 = new Chart(ctx6, config6);

  // Animation loop with clickable legend for the 6th radar chart
  function updateChart6() {
    // Update data values (modify as needed)
    data6.datasets.forEach((dataset) => {
      dataset.data = dataset.data.map(() => Math.random() * 10);
    });

    // Update the chart
    radarChart6.update();

    // Call the function again after a delay (e.g., 2000 milliseconds)
    setTimeout(updateChart6, 2000);
  }

  
  // Start the animation loop for the 6th radar chart
  updateChart6();

  // Call the function to set initial mode
  updateMode();

<!-- Contributed by Avoceous, Ceedit Network, Bitweon, One Bit Space -->
