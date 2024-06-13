// Contributed by Avoceous, Ceedit Network, Bitweon, One Bit Space

  var isDarkMode = true; // Set the default mode to dark

  // Function to toggle between light and dark mode
  function toggleMode(mode) {
    isDarkMode = mode === 'dark';
    updateMode();
  }

  // Function to update the mode (light/dark)
  function updateMode() {
    const body = document.body;
    body.style.backgroundColor = isDarkMode ? '#333' : '#fff';
    body.style.color = isDarkMode ? '#fff' : '#333';

    // Update the chart colors based on the mode
    const datasets = data.datasets;
    datasets.forEach((dataset, index) => {
      const color = isDarkMode ? getDarkColor(index) : getLightColor(index);
      dataset.backgroundColor = `rgba(${color}, 0.5)`;
    });

    datasets2.forEach((dataset, index) => {
      const color = isDarkMode ? getDarkColor(index) : getLightColor(index);
      dataset.backgroundColor = `rgba(${color}, 0.5)`;
    });

    datasets3.forEach((dataset, index) => {
      const color = isDarkMode ? getDarkColor(index) : getLightColor(index);
      dataset.backgroundColor = `rgba(${color}, 0.5)`;
    });

    datasets4.forEach((dataset, index) => {
      const color = isDarkMode ? getDarkColor(index) : getLightColor(index);
      dataset.backgroundColor = `rgba(${color}, 0.5)`;
    });

    datasets5.forEach((dataset, index) => {
      const color = isDarkMode ? getDarkColor(index) : getLightColor(index);
      dataset.backgroundColor = `rgba(${color}, 0.5)`;
    });

    // Update the 6th chart color based on the mode
    const datasets6 = data6.datasets;
    datasets6.forEach((dataset, index) => {
      const color = getCustomColor(index);
      dataset.backgroundColor = `rgba(${color}, 0.5)`;
    });

    // Update all charts
    radarChart.update();
    radarChart2.update();
    radarChart3.update();
    radarChart4.update();
    radarChart5.update();
    radarChart6.update();
  }

  // Function to get light mode colors
  function getLightColor(index) {
    const lightColors = [
      '0, 123, 255',   // Vibrant blue
      '255, 69, 0',    // Vibrant red-orange
      '34, 139, 34',   // Vibrant green
      '255, 165, 0'    // Vibrant orange
    ];
    return lightColors[index];
  }

  // Function to get dark mode colors
  function getDarkColor(index) {
    const darkColors = [
      '0, 70, 140',    // Dark blue
      '180, 40, 0',    // Dark red
      '0, 100, 0',     // Dark green
      '140, 70, 0'     // Dark orange
    ];
    return darkColors[index];
  }

  // Function to get custom colors for the 6th chart
  function getCustomColor(index) {
    const customColors = [
      '235, 127, 0',   // #EB7F00 (Welcome)
      '22, 149, 163',   // #1695A3 (to)
      '243, 255, 226',  // #F3FFE2 (Avoceous)
      '44, 62, 80',     // #2C3E50 (Github)
      '231, 76, 60'     // #E74C3C (Page)
    ];
    return customColors[index];
  }

    // Sample data for the radar chart with multiple datasets
  var data = {
    labels: ['Features', 'Parameters', 'Speed', 'Popularity', 'Users Amount'],
    datasets: [
      {
        label: 'ChatGPT',
        data: [9, 8, 7, 10, 9],
        backgroundColor: 'rgba(0, 123, 255, 0.5)', // Vibrant blue
        borderWidth: 2 // Border width of the radar area
      },
      {
        label: 'Claude',
        data: [8, 7, 6, 8, 7],
        backgroundColor: 'rgba(255, 69, 0, 0.5)', // Vibrant red-orange
        borderWidth: 2 // Border width of the radar area
      },
      {
        label: 'Mistral',
        data: [7, 9, 8, 7, 8],
        backgroundColor: 'rgba(34, 139, 34, 0.5)', // Vibrant green
        borderWidth: 2 // Border width of the radar area
      },
      {
        label: 'Gemini',
        data: [9, 7, 9, 6, 7],
        backgroundColor: 'rgba(255, 165, 0, 0.5)', // Vibrant orange
        borderWidth: 2 // Border width of the radar area
      }
    ]
  };

  var datasets2 = [
    // ... (same structure as datasets)
    {
        label: 'HeyGen',
        data: [1, 8, 7, 10, 9],
        backgroundColor: 'rgba(0, 123, 255, 0.5)', // Vibrant blue
        borderWidth: 2 // Border width of the radar area
      },
      {
        label: 'D-ID',
        data: [8, 7, 6, 1, 7],
        backgroundColor: 'rgba(255, 69, 0, 0.5)', // Vibrant red-orange
        borderWidth: 2 // Border width of the radar area
      },
      {
        label: 'Kaiber',
        data: [3, 1, 8, 7, 8],
        backgroundColor: 'rgba(34, 139, 34, 0.5)', // Vibrant green
        borderWidth: 2 // Border width of the radar area
      },
      {
        label: 'RunwayML',
        data: [6, 7, 1, 6, 7],
        backgroundColor: 'rgba(255, 165, 0, 0.5)', // Vibrant orange
        borderWidth: 2 // Border width of the radar area
      }
  ];

  var datasets3 = [
    // ... (same structure as datasets)
    {
        label: 'ClickUp',
        data: [7, 8, 7, 1, 9],
        backgroundColor: 'rgba(0, 123, 255, 0.5)', // Vibrant blue
        borderWidth: 2 // Border width of the radar area
      },
      {
        label: 'AskCodi',
        data: [5, 3, 6, 8, 7],
        backgroundColor: 'rgba(255, 69, 0, 0.5)', // Vibrant red-orange
        borderWidth: 2 // Border width of the radar area
      },
      {
        label: 'IDX',
        data: [7, 9, 1, 7, 8],
        backgroundColor: 'rgba(34, 139, 34, 0.5)', // Vibrant green
        borderWidth: 2 // Border width of the radar area
      },
      {
        label: 'CoPilot',
        data: [5, 7, 9, 6, 1],
        backgroundColor: 'rgba(255, 165, 0, 0.5)', // Vibrant orange
        borderWidth: 2 // Border width of the radar area
      }
  ];

  var datasets4 = [
    // ... (same structure as datasets)
    {
        label: 'LumaAI',
        data: [3, 8, 1, 10, 9],
        backgroundColor: 'rgba(0, 123, 255, 0.5)', // Vibrant blue
        borderWidth: 2 // Border width of the radar area
      },
      {
        label: 'SkyboxAI',
        data: [2, 7, 9, 8, 7],
        backgroundColor: 'rgba(255, 69, 0, 0.5)', // Vibrant red-orange
        borderWidth: 2 // Border width of the radar area
      },
      {
        label: 'WonderDynamics',
        data: [8, 1, 8, 7, 8],
        backgroundColor: 'rgba(34, 139, 34, 0.5)', // Vibrant green
        borderWidth: 2 // Border width of the radar area
      },
      {
        label: 'IdeogramAI',
        data: [3, 7, 5, 6, 7],
        backgroundColor: 'rgba(255, 165, 0, 0.5)', // Vibrant orange
        borderWidth: 2 // Border width of the radar area
      }
  ];

  var datasets5 = [
    // ... (same structure as datasets)
    {
        label: 'Notion',
        data: [7, 3, 1, 10, 9],
        backgroundColor: 'rgba(0, 123, 255, 0.5)', // Vibrant blue
        borderWidth: 2 // Border width of the radar area
      },
      {
        label: 'Plask',
        data: [1, 7, 6, 6, 7],
        backgroundColor: 'rgba(255, 69, 0, 0.5)', // Vibrant red-orange
        borderWidth: 2 // Border width of the radar area
      },
      {
        label: 'Sentry',
        data: [3, 9, 6, 7, 8],
        backgroundColor: 'rgba(34, 139, 34, 0.5)', // Vibrant green
        borderWidth: 2 // Border width of the radar area
      },
      {
        label: 'Remodeled',
        data: [6, 7, 7, 6, 1],
        backgroundColor: 'rgba(255, 165, 0, 0.5)', // Vibrant orange
        borderWidth: 2 // Border width of the radar area
      }
  ];

  // Configuration options for the radar chart
  var options = {
    scales: {
      r: {
        grid: {
          color: 'rgba(165,252,228)' // Grid line color
        }
      }
    },
    plugins: {
      legend: {
        labels: {
          font: {
            size: 16 // Larger font size for the legend
          }
        }
      }
    }
  };

  // Configuration object for the radar chart
  const config = {
    type: 'radar',
    data,
    options
  };

  // Get the canvas element and render the radar chart
  var ctx = document.getElementById('radarChart').getContext('2d');
  var radarChart = new Chart(ctx, config);

  // Configuration object for the second radar chart
  const config2 = {
    type: 'radar',
    data: { labels: data.labels, datasets: datasets2 },
    options
  };

  // Get the canvas element for the second radar chart and render it
  var ctx2 = document.getElementById('radarChart2').getContext('2d');
  var radarChart2 = new Chart(ctx2, config2);

  // Configuration object for the third radar chart
  const config3 = {
    type: 'radar',
    data: { labels: data.labels, datasets: datasets3 },
    options
  };
  // Contributed by Avoceous, Ceedit Network, Bitweon, One Bit Space
  // Get the canvas element for the third radar chart and render it
  var ctx3 = document.getElementById('radarChart3').getContext('2d');
  var radarChart3 = new Chart(ctx3, config3);

  // Configuration object for the fourth radar chart
  const config4 = {
    type: 'radar',
    data: { labels: data.labels, datasets: datasets4 },
    options
  };

  // Get the canvas element for the fourth radar chart and render it
  var ctx4 = document.getElementById('radarChart4').getContext('2d');
  var radarChart4 = new Chart(ctx4, config4);

  // Configuration object for the fifth radar chart
  const config5 = {
    type: 'radar',
    data: { labels: data.labels, datasets: datasets5 },
    options
  };

  // Get the canvas element for the fifth radar chart and render it
  var ctx5 = document.getElementById('radarChart5').getContext('2d');
  var radarChart5 = new Chart(ctx5, config5);

  // 6th Radar Chart (with animation and loop)
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
