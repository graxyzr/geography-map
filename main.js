const ctx1 = document.getElementById('chart1').getContext('2d');
const chart1 = new Chart(ctx1, {
    type: 'line',
    data: {
        labels: ['2015', '2016', '2017', '2018', '2019', '2020', '2021'],
        datasets: [{
            label: 'Focos de Incêndio',
            data: [15000, 20000, 25000, 30000, 35000, 40000, 45000],
            borderColor: '#1A91A1',
            backgroundColor: 'rgba(26, 145, 161, 0.2)',
            borderWidth: 2,
            tension: 0.4
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                display: true,
                position: 'top'
            }
        }
    }
});

const ctx2 = document.getElementById('chart2').getContext('2d');
const chart2 = new Chart(ctx2, {
    type: 'bar',
    data: {
        labels: ['Amazonas', 'Pará', 'Mato Grosso', 'Rondônia', 'Acre'],
        datasets: [{
            label: 'Desmatamento (km²)',
            data: [3000, 4500, 2000, 1500, 800],
            backgroundColor: [
                '#1A91A1',
                '#20D0C2',
                '#9FF0E5',
                '#68B3C8',
                '#B2E8E4'
            ],
            borderColor: '#0C6168',
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                display: true,
                position: 'top'
            }
        },
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});