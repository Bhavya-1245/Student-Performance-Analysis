const allGenderData = {
      female: [64.58, 72.31, 72.32],
      male: [69.02, 65.60, 63.35],
      all: [(64.58 + 69.02) / 2, (72.31 + 65.60) / 2, (72.32 + 63.35) / 2]
    };

    const educationData = {
      female: [213.69, 223.25, 195.62, 219.76, 213.16, 198.79],
      male: [204.02, 206.44, 186.72, 219.48, 197.10, 194.17],
      all: [
        (213.69 + 204.02) / 2,
        (223.25 + 206.44) / 2,
        (195.62 + 186.72) / 2,
        (219.76 + 219.48) / 2,
        (213.16 + 197.10) / 2,
        (198.79 + 194.17) / 2
      ]
    };

    const labels = ['Math Score', 'Reading Score', 'Writing Score'];

    const avgScoresChart = new Chart(document.getElementById('avgScoresChart'), {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [{
          label: 'Average Scores',
          data: allGenderData.all,
          backgroundColor: 'rgba(54, 162, 235, 0.6)'
        }]
      },
      options: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: 'Average Scores by Subject (Bar Chart)'
          },
          tooltip: { enabled: true }
        }
      }
    });

    const educationChart = new Chart(document.getElementById('educationChart'), {
      type: 'line',
      data: {
        labels: [
          "Associate's", "Bachelor's", "High School", "Master's", "Some College", "Some HS"
        ],
        datasets: [
          {
            label: 'Female Avg Total',
            data: educationData.female,
            borderColor: 'rgba(255, 99, 132, 0.8)',
            fill: false
          },
          {
            label: 'Male Avg Total',
            data: educationData.male,
            borderColor: 'rgba(54, 162, 235, 0.8)',
            fill: false
          }
        ]
      },
      options: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: 'Total Scores by Parental Education (Line Chart)'
          },
          tooltip: { enabled: true }
        }
      }
    });

    const lunchChart = new Chart(document.getElementById('lunchChart'), {
      type: 'bar',
      data: {
        labels: ['Math Score', 'Reading Score', 'Writing Score'],
        datasets: [
          {
            label: 'Free/Reduced Lunch',
            data: [60.47, 65.20, 63.86],
            backgroundColor: 'rgba(255, 206, 86, 0.6)'
          },
          {
            label: 'Standard Lunch',
            data: [70.14, 71.28, 70.37],
            backgroundColor: 'rgba(75, 192, 192, 0.6)'
          }
        ]
      },
      options: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: 'Average Scores by Lunch Type (Grouped Bar Chart)'
          },
          tooltip: { enabled: true }
        }
      }
    });

    function updateGender(gender) {
      // Update average scores chart
      avgScoresChart.data.datasets[0].data = allGenderData[gender];
      avgScoresChart.data.datasets[0].label = `${gender.charAt(0).toUpperCase() + gender.slice(1)} Average Scores`;
      avgScoresChart.update();

      // Update education chart
      educationChart.data.datasets[0].data = educationData[gender];
      educationChart.data.datasets[1].data = educationData[gender === 'female' ? 'male' : 'female']; // Update male data for comparison
      educationChart.update();
    }

    // Initial load
    updateGender('all');