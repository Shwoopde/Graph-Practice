const ctx = document.getElementById('myChart').getContext('2d');
const ctx2 = document.getElementById('myChart2').getContext('2d');
const ctx3 = document.getElementById('myChart3').getContext('2d');
const ctx4 = document.getElementById('myChart4').getContext('2d');

let delayed;
//gradient fill color
let gradient = ctx.createLinearGradient(0, 0, 0, 400);
gradient.addColorStop(0, 'rgba(255, 0, 0, 0.5)');
gradient.addColorStop(0.5, 'rgba(255, 0, 0, 0.25)');

let gradient2 = ctx.createLinearGradient(0, 0, 0, 400);
gradient2.addColorStop(0, 'rgba(105, 117, 255, 0.5)');
gradient2.addColorStop(0.5, 'rgba(105, 117, 255, 0.25)');



const labels = [
    '2012',
    '2013',
    '2014',
    '2015',
    '2016',
    '2017',
    '2018',
    '2019',
    '2020',
];

const data = {
    labels,
    datasets: [
        {
            data: [212, 184, 275, 325, 256, 145, 535, 225, 116], // data
            label: "Made up Sales", // labels
            fill: true, // fill
            backgroundColor: gradient, // backgroundColor
            borderColor: 'rgb(255, 99, 132)', // borderColor
            pointBackgroundColor: 'rgb(255, 99, 132)', // pointBackgroundColor
            tension: .3
        },
    ],
};

const data2 = {
    labels,
    datasets: [
        {
            data: [212, 184, 275, 325, 256, 145, 535, 225, 116], // data
            label: "Made up Sales", // labels
            fill: true, // fill
            backgroundColor: gradient2, // backgroundColor
            borderColor: 'rgb(105, 117, 255, .5)', // borderColor
            hoverBorderWidth: 2,
            pointBackgroundColor: 'rgb(105, 117, 255)', // pointBackgroundColor
            tension: .3
        },
    ],
};

const data3 = {
    labels,
    datasets: [
        {
            data: [212, 184, 275, 325, 256, 145, 535, 225, 116], // data
            label: "Made up Sales", // labels
            fill: true, // fill
            backgroundColor: [ 
                'rgba(255, 100, 132, 0.5)',
                'rgba(255, 200, 132, 0.5)',
                'rgba(255, 300, 132, 0.5)',
                'rgba(155, 100, 132, 0.5)',
                'rgba(55, 500, 132, 0.5)',
                'rgba(455, 60, 132, 0.5)',
                'rgba(255, 70, 632, 0.5)',
                'rgba(25, 70, 132, 0.5)',
                'rgba(2, 70, 13, 0.5)',
            ]

        },
    ],
};

const data4 = {
    labels,
    datasets: [
        {
            data: [212, 184, 275, 325, 256, 145, 535, 225, 116], // data
            label: "Made up Sales", // labels
            fill: true, // fill
            backgroundColor: [ 
                'rgba(255, 100, 132, 0.5)',
                'rgba(255, 200, 132, 0.5)',
                'rgba(255, 300, 132, 0.5)',
                'rgba(155, 100, 132, 0.5)',
                'rgba(55, 500, 132, 0.5)',
                'rgba(455, 60, 132, 0.5)',
                'rgba(255, 70, 632, 0.5)',
                'rgba(25, 70, 132, 0.5)',
                'rgba(2, 70, 13, 0.5)',
            ]

        },
    ],
};

const config = { 
    type: 'line',
    data: data,
    options: {
        radius: 1,
        hitRadius: 30, // hitRadius
        hoverRadius: 13, // hoverRadius
        responsive: true,
        animation: {
            onComplete: () => {
                delayed = true;
            },
            delay: (context) => {
                let delay = 0;
                if (context.type === "data" && context.mode === "default" && !delayed) {
                    delay = context.dataIndex * 300 + context.datasetIndex * 100;
            }
            return delay;
        },
        },
        scales: {
            y: {
                ticks: {
                callback: function(value){
                    return "$" + value + "m";
                    },
                },
            },
        },
    },
};

const config2 = {
    type: 'bar',
    data: data2,
    options: {
        radius: 1,
        hitRadius: 30, // hitRadius
        hoverRadius: 13, // hoverRadius
        responsive: true,
        scales: {
            y: {
                ticks: {
                    callback: function(value){
                        return "$" + value + "m";
                    },
                },
            },
        },
    },
};

const config3 = {
    type: 'pie',
    data: data3,
    options: {
        responsive: true,
        hoverOffset: 50,
        cutoutPercentage: 50,
        
    },
};

const config4 = {
    type: 'doughnut',
    data: data4,
    options: {
        responsive: true,
        hoverOffset: 50,
        cutoutPercentage: 50,
    },
};



const myChart = new Chart(ctx, config);
const myChart2 = new Chart(ctx2, config2);
const myChart3 = new Chart(ctx3, config3);
const myChart4 = new Chart(ctx4, config4);