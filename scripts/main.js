//JS - INDEX
function login(){
  window.location.href='dashboard.html';
}

// JS - Dashboard

// ASIDE - Mobile
const btnMobile = document.getElementsByClassName('header-mobile-menu__btn')[0];

btnMobile.addEventListener('click', function(){
  const aside = document.getElementsByClassName('dashboard-aside')[0];
  aside.classList.toggle('dashboard-aside__active')
})

// ASIDE - Submenu

const submenu1 = document.getElementById('submenu1');
const submenu2 = document.getElementById('submenu2');
const submenu3 = document.getElementById('submenu3');
const submenu4 = document.getElementById('submenu4');


// FOR EACH

submenu1.addEventListener('click', function(){
  const openSubmenu = document.getElementsByClassName('aside-submenu__list')[0];
  const svgMenu = document.getElementsByClassName('aside-menu__item--dropdown-icon')[0];
  openSubmenu.classList.toggle('submenu__active');
  svgMenu.classList.toggle('dropdown-active');
})

submenu2.addEventListener('click', function(){
  const openSubmenu = document.getElementsByClassName('aside-submenu__list')[1];
  const svgMenu = document.getElementsByClassName('aside-menu__item--dropdown-icon')[1];
  openSubmenu.classList.toggle('submenu__active');
  svgMenu.classList.toggle('dropdown-active');
})

submenu3.addEventListener('click', function(){
  const openSubmenu = document.getElementsByClassName('aside-submenu__list')[2];
  const svgMenu = document.getElementsByClassName('aside-menu__item--dropdown-icon')[2];
  openSubmenu.classList.toggle('submenu__active');
  svgMenu.classList.toggle('dropdown-active');
})

submenu4.addEventListener('click', function(){
  const openSubmenu = document.getElementsByClassName('aside-submenu__list')[3];
  const svgMenu = document.getElementsByClassName('aside-menu__item--dropdown-icon')[3];
  openSubmenu.classList.toggle('submenu__active');
  svgMenu.classList.toggle('dropdown-active');
})




// GRÁFICO

const ctx = document.getElementById('report__chart');
const labels = [
  '06/10/21', 
  '07/10/21', 
  '08/10/21', 
  '09/10/21', 
  '10/10/21', 
  '11/10/21', 
  '12/10/21'
];
const data = {
  labels,
  datasets: [{
    label: 'Estornado',
    borderColor: '#425DC7',
    data: [0, 0, 50, 75, 125, 50, 195],
  },{
    label: 'Cancelado',
    borderColor: '#F03460',
    data: [0, 0, 0, 50, 75, 125, 50],
  },{
    label: 'Não Pago',
    borderColor: '#FFBE00',
    data: [0, 0, 0, 0, 50, 75, 125],
  },{
    label: 'Pago',
    borderColor: '#158F2E',
    data: [0, 50, 75, 125, 50, 195, 195],
  }]
};
const config = {
  type: 'line',
  data,
  options: {
    scales:{
      x: {
        display: false
      }, 
      // 0, 40, 100, 200 
      y: {
        ticks: {
          callback: function(value, index){
            if (this.getLabelForValue(value) == 40 || this.getLabelForValue(value) == 0 || this.getLabelForValue(value) == 100 || this.getLabelForValue(value) == 200) {
              return this.getLabelForValue(value)
            }
          },
        }
      }
    },
    plugins: {
      legend: {
        display: false
      }
    },
    responsive: true,
    radius: 0, //ponto das linhas no gráfico
  }
};



// LEGENDA GRÁFICO
const labelOne = document.getElementById('label-01__color');
const labelTwo = document.getElementById('label-02__color');
const labelThree = document.getElementById('label-03__color');
const labelFour = document.getElementById('label-04__color');

labelOne.style.backgroundColor = '#425DC7';
labelTwo.style.backgroundColor = '#F03460';
labelThree.style.backgroundColor = '#FFBE00';
labelFour.style.backgroundColor = '#158F2E';

const nameOne = document.getElementById('label-01');
const nameTwo = document.getElementById('label-02');
const nameThree = document.getElementById('label-03');
const nameFour = document.getElementById('label-04');

nameOne.innerHTML = data.datasets[0].label;
nameTwo.innerHTML = data.datasets[1].label;
nameThree.innerHTML = data.datasets[2].label;
nameFour.innerHTML = data.datasets[3].label;

const myChart = new Chart(ctx, config);