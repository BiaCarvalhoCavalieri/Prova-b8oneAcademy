// JS - Dashboard


// ABAS DO RELATÓRIO
function changeTabByClick(linkTab, idTab) {
  const reportTabLink = document.querySelectorAll('.report__tabs--text')
  reportTabLink.forEach(function (selectText) {
    if (selectText.classList.contains('report__tabs--text-selected')) {
      selectText.classList.remove('report__tabs--text-selected')
    }
  })
  const reportTab = document.querySelectorAll('.tab')
  const tab = document.getElementById(idTab)
  reportTab.forEach(function (selectTab) {
    if (selectTab.classList.contains('select__tab')) {
      selectTab.classList.remove('select__tab')
    }
  })

  tab.classList.add('select__tab')
  linkTab.classList.add('report__tabs--text-selected')
}

// GRÁFICO 1

const chart1 = document.getElementById('report__chart1');
const labels1 = [
  '06/10/21',
  '07/10/21',
  '08/10/21',
  '09/10/21',
  '10/10/21',
  '11/10/21',
  '12/10/21'
];
const data1 = {
  labels: labels1,
  datasets: [{
    label: 'Estornado',
    borderColor: '#425DC7',
    data: [0, 0, 50, 75, 125, 50, 195],
  }, {
    label: 'Cancelado',
    borderColor: '#F03460',
    data: [0, 0, 0, 50, 75, 125, 50],
  }, {
    label: 'Não Pago',
    borderColor: '#FFBE00',
    data: [0, 0, 0, 0, 50, 75, 125],
  }, {
    label: 'Pago',
    borderColor: '#158F2E',
    data: [0, 50, 75, 125, 50, 195, 195],
  }]
};
const config1 = {
  type: 'line',
  data: data1,
  options: {
    scales: {
      x: {
        grid: {
          display: false
        }
      },
      // 0, 40, 100, 200 
      y: {
        ticks: {
          callback: function (value) {
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

// LEGENDA GRÁFICO 1
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

nameOne.innerHTML = data1.datasets[0].label;
nameTwo.innerHTML = data1.datasets[1].label;
nameThree.innerHTML = data1.datasets[2].label;
nameFour.innerHTML = data1.datasets[3].label;

const myChart = new Chart(chart1, config1);


// GRÁFICO 2

const ct2 = document.getElementById('report__chart2');
const labels2 = [
  '06/10/21',
  '07/10/21',
  '08/10/21',
  '09/10/21',
  '10/10/21',
  '11/10/21',
  '12/10/21'
];
const data2 = {
  labels: labels2,
  datasets: [{
    label: 'Total de pedidos',
    borderColor: '#425DC7',
    data: [0, 0, 50, 75, 125, 50, 195],
  }]
};
const config2 = {
  type: 'line',
  data: data2,
  options: {
    scales: {
      x: {
        grid: {
          display: false
        }
      },
      // 0, 40, 100, 200 
      y: {
        ticks: {
          callback: function (value) {
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

// LEGENDA GRÁFICO 2
const labelFive = document.getElementById('label-05__color');
labelFive.style.backgroundColor = '#425DC7';
const nameFive = document.getElementById('label-05');
nameFive.innerHTML = data2.datasets[0].label;

const myChart2 = new Chart(ct2, config2);


// GRÁFICO 3

const ct3 = document.getElementById('report__chart3');
const labels3 = [
  '06/10/21',
  '07/10/21',
  '08/10/21',
  '09/10/21',
  '10/10/21',
  '11/10/21',
  '12/10/21'
];
const data3 = {
  labels: labels3,
  datasets: [{
    label: 'Valor total de vendas',
    borderColor: '#425DC7',
    data: [0, 0, 50, 75, 125, 50, 195],
  }, {
    label: 'Quantidade de pedidos',
    borderColor: '#2EB042',
    data: [0, 50, 75, 125, 50, 195, 200],
  }, {
    label: 'Comissão a pagar',
    borderColor: '#F03460',
    data: [50, 75, 125, 50, 195, 200, 0],
  }]
};
const config3 = {
  type: 'line',
  data: data3,
  options: {
    scales: {
      x: {
        grid: {
          display: false
        }
      },
      y: {
        ticks: {
          callback: function (value) {
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

// LEGENDA GRÁFICO 3
const labelSix = document.getElementById('label-06__color');
const labelSeven = document.getElementById('label-07__color');
const labelEight = document.getElementById('label-08__color');

labelSix.style.backgroundColor = '#425DC7';
labelSeven.style.backgroundColor = '#2EB042';
labelEight.style.backgroundColor = '#F03460';

const nameSix = document.getElementById('label-06');
const nameSeven = document.getElementById('label-07');
const nameEight = document.getElementById('label-08');

nameSix.innerHTML = data3.datasets[0].label;
nameSeven.innerHTML = data3.datasets[1].label;
nameEight.innerHTML = data3.datasets[2].label;

const myChart3 = new Chart(ct3, config3);
// API - User
async function fecthUser() {
  await fetch("https://test-final.b8one.academy/user")
    .then(response => {
      if (!response.ok)
        throw new Error("Erro na requisição");
      return response.json()
    })
    .then(user => {
      populateOrganization(user);
      populateUser(user);
    }).catch(erro => console.log(erro))
}

function populateOrganization(user) {
  let organizationHTML = `
    <span class="header-company__name">${user.organization}</span>
  `
  const organizationData = document.querySelector('.header-block__left')
  organizationData.insertAdjacentHTML("beforeend", organizationHTML)
}

function populateUser(user) {
  let userHTML = `
    <a href="#" class="header-user__item--avatar">
      <img src="${user.photo}" alt="Avatar do usuário" class="header-user__img"/>  
      <span class="header-user__name">${user.username}</span>
    </a>
    <ul class="header-user__notification">
      <li class="header-user__notification--name">
        <a href="#">
          Olá, 
          <span>
          ${user.username} 👋
          </span>
        </a>
      </li>
      <li class="header-user__notification--account">
        <a href="#">
          Minha conta
        </a>
      </li>
      <li class="header-user__notification--Logout">
        <a href="#">
          Sair
        </a>
      </li>
    </ul>
  `
  const userData = document.querySelector('.header-user__item')
  userData.insertAdjacentHTML("beforeend", userHTML)
}


// API - Sales
async function fecthSales() {
  await fetch("https://test-final.b8one.academy/sales")
    .then(response => {
      if (!response.ok)
        throw new Error("Erro na requisição");
      return response.json()
    })
    .then(sales => {
      populateSales(sales);
    }).catch(erro => console.log(erro))
}

function populateSales(sales) {
  let salesHTML = `
    <div class="report__cards--billing">
    <svg class="report__cards--icon" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="48" height="48" rx="12" fill="#F1F2F9"/>
      <path d="M24 37.3333C31.3638 37.3333 37.3333 31.3638 37.3333 24C37.3333 16.6362 31.3638 10.6667 24 10.6667C16.6362 10.6667 10.6667 16.6362 10.6667 24C10.6667 31.3638 16.6362 37.3333 24 37.3333Z" fill="#CDD2EB" stroke="#CDD2EB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M28 18.6667H22.8889C21.2933 18.6667 20 19.8606 20 21.3333C20 22.8061 21.2933 24 22.8889 24H25.1111C26.7067 24 28 25.1938 28 26.6667C28 28.1395 26.7067 29.3333 25.1111 29.3333H20" stroke="#425DC7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M24 16V18.6667" stroke="#425DC7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M24 29.3333L24 32" stroke="#425DC7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    <div class="report__cards--text">
      <span class="report__cards--text-title">Faturamento</span>
      <span class="report__cards--text-value">${(sales.revenues / 100).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', currencyDisplay: 'symbol' })}</span>
    </div>
  </div>
  <div class="report__cards--sell">
    <svg class="report__cards--icon" width="49" height="48" viewBox="0 0 49 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="0.666656" width="48" height="48" rx="12" fill="#F1F2F9"/>
      <path d="M17.5 12L13.6667 16.8V33.6C13.6667 34.2365 13.9359 34.847 14.4152 35.2971C14.8944 35.7471 15.5444 36 16.2222 36H34.1111C34.7889 36 35.4389 35.7471 35.9182 35.2971C36.3974 34.847 36.6667 34.2365 36.6667 33.6V16.8L32.8333 12H17.5Z" fill="#CDD2EB" stroke="#CDD2EB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M13.6667 16.8002H36.6667" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M30.2781 21.5999C30.2781 22.8739 29.7396 24.0957 28.7811 24.9965C27.8226 25.8974 26.5226 26.4035 25.167 26.4035C23.8115 26.4035 22.5114 25.8974 21.5529 24.9965C20.5944 24.0957 20.0559 22.8739 20.0559 21.5999" stroke="#425DC7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg> 
    <div class="report__cards--text">
      <span class="report__cards--text-title">Vendas totais</span>
      <span class="report__cards--text-value">${sales.totalSales}</span>
    </div>
  </div>
  <div class="report__cards--ticket">
    <svg class="report__cards--icon" width="49" height="48" viewBox="0 0 49 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="0.333313" width="48" height="48" rx="12" fill="#F1F2F9"/>
      <path d="M37.8577 27.5374L27.8846 37.5105C27.6262 37.7691 27.3194 37.9743 26.9817 38.1143C26.644 38.2543 26.282 38.3264 25.9164 38.3264C25.5508 38.3264 25.1888 38.2543 24.8511 38.1143C24.5134 37.9743 24.2066 37.7691 23.9482 37.5105L12.5866 26.1621C12.211 25.7869 12 25.2779 12 24.747V13.6667C12 12.5621 12.8954 11.6667 14 11.6667H25.081C25.6114 11.6667 26.1202 11.8774 26.4952 12.2524L37.8577 23.6149C38.3758 24.1361 38.6666 24.8412 38.6666 25.5761C38.6666 26.3111 38.3758 27.0161 37.8577 27.5374Z" fill="#CDD2EB" stroke="#CDD2EB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M20 19.6667H20.0133" stroke="#425DC7" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    <div class="report__cards--text">
      <span class="report__cards--text-title">Ticket médio</span>
      <span class="report__cards--text-value">${(sales.averageTicket / 100).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', currencyDisplay: 'symbol' })}</span>
    </div>
  </div>`
  const saleData = document.querySelector('.report__cards')
  saleData.insertAdjacentHTML("beforeend", salesHTML)
}

// Criando icone do ranking

// API - ASIDE Menu e function Submenu
async function fecthMenu() {

  const children = [
    {
      name: "Resumo de Dados",
      icon: `<svg class="aside-menu__item--icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10.5 3.75H3.75V10.5H10.5V3.75Z" fill="#425DC7" stroke="#425DC7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M20.25 3.75H13.5V10.5H20.25V3.75Z" fill="#CDD2EB" stroke="#CDD2EB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M20.25 13.5H13.5V20.25H20.25V13.5Z" fill="#425DC7" stroke="#425DC7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M10.5 13.5H3.75V20.25H10.5V13.5Z" fill="#CDD2EB" stroke="#CDD2EB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>`
    },
    {
      name: "Pra Vender",
      icon: `<svg class="aside-menu__item--icon" width="24" height="24" viewBox="0 0  24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10.087 2.02852C11.1249 0.927887 12.8751 0.927887 13.913 2.02852C14.5279 2.68061 15.4326 2.97456 16.3133 2.80843C17.7999 2.52803 19.2159 3.55679 19.4086 5.05724C19.5228 5.94621 20.0819 6.7158 20.8921 7.09907C22.2596 7.74599 22.8004 9.41058 22.0744 10.7377C21.6442 11.524 21.6442 12.4753 22.0744 13.2616C22.8004 14.5887 22.2596 16.2533 20.8921 16.9002C20.0819 17.2835 19.5228 18.0531 19.4086 18.9421C19.2159 20.4425 17.7999 21.4713 16.3133 21.1909C15.4326 21.0247 14.5279 21.3187 13.913 21.9708C12.8751 23.0714 11.1249 23.0714 10.087 21.9708C9.47213 21.3187 8.56741 21.0247 7.68666 21.1909C6.2001 21.4713 4.7841 20.4425 4.59141 18.9421C4.47724 18.0531 3.91809 17.2835 3.1079 16.9002C1.74043 16.2533 1.19956 14.5887 1.92562 13.2616C2.35579 12.4753 2.35579 11.524 1.92562 10.7377C1.19956 9.41058 1.74043 7.74599 3.1079 7.09907C3.91809 6.7158 4.47724 5.94621 4.59141 5.05724C4.7841 3.55679 6.2001 2.52803 7.68666 2.80843C8.56741 2.97456 9.47213 2.68061 10.087 2.02852Z" fill="#CDD2EB"/>
        <path d="M8.46967 14.4694C8.17678 14.7623 8.17678 15.2371 8.46967 15.53C8.76256 15.8229 9.23744 15.8229 9.53033 15.53L8.46967 14.4694ZM15.5303 9.53002C15.8232 9.23713 15.8232 8.76226 15.5303 8.46936C15.2374 8.17647 14.7626 8.17647 14.4697 8.46936L15.5303 9.53002ZM9.53033 15.53L15.5303 9.53002L14.4697 8.46936L8.46967 14.4694L9.53033 15.53Z" fill="#425DC7"/>
        <path d="M11.25 8.39982C11.25 9.31109 10.5113 10.0498 9.60001 10.0498C8.68874 10.0498 7.95001 9.31109 7.95001 8.39982C7.95001 7.48855 8.68874 6.74982 9.60001 6.74982C10.5113 6.74982 11.25 7.48855 11.25 8.39982Z" stroke="#425DC7" stroke-width="1.5"/>
        <path d="M16.05 15.5996C16.05 16.5109 15.3113 17.2496 14.4 17.2496C13.4887 17.2496 12.75 16.5109 12.75 15.5996C12.75 14.6884 13.4887 13.9496 14.4 13.9496C15.3113 13.9496 16.05 14.6884 16.05 15.5996Z" stroke="#425DC7" stroke-width="1.5"/>
      </svg>`,
      children: [
        {
          name: "Gerador de link"
        },
        {
          name: "Vitrine digital"
        },
        {
          name: "Carrinhos compartilháveis"
        },
        {
          name: "Carrinhos abandonados"
        }
      ]
    },
    {
      name: "Pedidos",
      icon: `<svg class="aside-menu__item--icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6.625 2.99963L3.75 6.59958V19.1994C3.75 19.6768 3.95193 20.1346 4.31138 20.4722C4.67082 20.8097 5.15834 20.9994 5.66667 20.9994H19.0833C19.5917 20.9994 20.0792 20.8097 20.4386 20.4722C20.7981 20.1346 21 19.6768 21 19.1994V6.59958L18.125 2.99963H6.625Z" fill="#CDD2EB" stroke="#CDD2EB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M3.75 6.59979H21" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M16.2086 10.1994C16.2086 11.1549 15.8047 12.0713 15.0858 12.7469C14.3669 13.4225 13.3919 13.8021 12.3753 13.8021C11.3586 13.8021 10.3836 13.4225 9.66469 12.7469C8.9458 12.0713 8.54193 11.1549 8.54193 10.1994" stroke="#425DC7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>`
    },
    {
      name: "Financeiro",
      icon: `<svg class="aside-menu__item--icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 21.9992C17.5228 21.9992 22 17.5221 22 11.9994C22 6.4766 17.5228 1.99951 12 1.99951C6.47715 1.99951 2 6.4766 2 11.9994C2 17.5221 6.47715 21.9992 12 21.9992Z" fill="#CDD2EB" stroke="#CDD2EB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M15 7.99939H11.1667C9.97 7.99939 9 8.89481 9 9.99936C9 11.104 9.97 11.9993 11.1667 11.9993H12.8333C14.03 11.9993 15 12.8947 15 13.9993C15 15.1039 14.03 15.9993 12.8333 15.9993H9" stroke="#425DC7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M12 5.99951V7.99951" stroke="#425DC7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M12 15.9993L12 17.9993" stroke="#425DC7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>`,
      children: [
        {
          name: "Pagamentos"
        },
        {
          name: "Comissões"
        },
        {
          name: "Bônus de Performance"
        }
      ]
    },
    {
      name: "Configurações",
      icon: `<svg class="aside-menu__item--icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_342_3999)">
      <path d="M19.4 14.9993C19.2669 15.3009 19.2272 15.6355 19.286 15.9599C19.3448 16.2843 19.4995 16.5836 19.73 16.8193L19.79 16.8793C19.976 17.065 20.1235 17.2856 20.2241 17.5284C20.3248 17.7712 20.3766 18.0314 20.3766 18.2943C20.3766 18.5571 20.3248 18.8173 20.2241 19.0601C20.1235 19.3029 19.976 19.5235 19.79 19.7092C19.6043 19.8952 19.3837 20.0427 19.1409 20.1434C18.8981 20.244 18.6378 20.2958 18.375 20.2958C18.1122 20.2958 17.8519 20.244 17.6091 20.1434C17.3663 20.0427 17.1457 19.8952 16.96 19.7092L16.9 19.6492C16.6643 19.4187 16.365 19.2641 16.0406 19.2052C15.7162 19.1464 15.3816 19.1861 15.08 19.3192C14.7842 19.446 14.532 19.6565 14.3543 19.9248C14.1766 20.1931 14.0813 20.5074 14.08 20.8292V20.9992C14.08 21.5296 13.8693 22.0383 13.4942 22.4134C13.1191 22.7885 12.6104 22.9992 12.08 22.9992C11.5496 22.9992 11.0409 22.7885 10.6658 22.4134C10.2907 22.0383 10.08 21.5296 10.08 20.9992V20.9092C10.0723 20.5782 9.96512 20.2572 9.77251 19.9879C9.5799 19.7186 9.31074 19.5135 9 19.3992C8.69838 19.2661 8.36381 19.2264 8.03941 19.2852C7.71502 19.3441 7.41568 19.4987 7.18 19.7292L7.12 19.7892C6.93425 19.9752 6.71368 20.1227 6.47088 20.2234C6.22808 20.324 5.96783 20.3758 5.705 20.3758C5.44217 20.3758 5.18192 20.324 4.93912 20.2234C4.69632 20.1227 4.47575 19.9752 4.29 19.7892C4.10405 19.6035 3.95653 19.3829 3.85588 19.1401C3.75523 18.8973 3.70343 18.6371 3.70343 18.3743C3.70343 18.1114 3.75523 17.8512 3.85588 17.6084C3.95653 17.3656 4.10405 17.145 4.29 16.9593L4.35 16.8993C4.58054 16.6636 4.73519 16.3643 4.794 16.0399C4.85282 15.7155 4.81312 15.3809 4.68 15.0793C4.55324 14.7835 4.34276 14.5313 4.07447 14.3536C3.80618 14.176 3.49179 14.0806 3.17 14.0793H3C2.46957 14.0793 1.96086 13.8686 1.58579 13.4935C1.21071 13.1185 1 12.6098 1 12.0794C1 11.5489 1.21071 11.0402 1.58579 10.6652C1.96086 10.2901 2.46957 10.0794 3 10.0794H3.09C3.42099 10.0716 3.742 9.9645 4.0113 9.7719C4.28059 9.57929 4.48572 9.31013 4.6 8.9994C4.73312 8.69779 4.77282 8.36321 4.714 8.03882C4.65519 7.71443 4.50054 7.4151 4.27 7.17942L4.21 7.11942C4.02405 6.93368 3.87653 6.71311 3.77588 6.47031C3.67523 6.22752 3.62343 5.96727 3.62343 5.70444C3.62343 5.44162 3.67523 5.18137 3.77588 4.93857C3.87653 4.69578 4.02405 4.47521 4.21 4.28946C4.39575 4.10351 4.61632 3.956 4.85912 3.85535C5.10192 3.7547 5.36217 3.7029 5.625 3.7029C5.88783 3.7029 6.14808 3.7547 6.39088 3.85535C6.63368 3.956 6.85425 4.10351 7.04 4.28946L7.1 4.34946C7.33568 4.58 7.63502 4.73464 7.95941 4.79346C8.28381 4.85228 8.61838 4.81257 8.92 4.67946H9C9.29577 4.5527 9.54802 4.34222 9.72569 4.07393C9.90337 3.80565 9.99872 3.49126 10 3.16948V2.99948C10 2.46906 10.2107 1.96036 10.5858 1.58529C10.9609 1.21022 11.4696 0.999512 12 0.999512C12.5304 0.999512 13.0391 1.21022 13.4142 1.58529C13.7893 1.96036 14 2.46906 14 2.99948V3.08948C14.0013 3.41126 14.0966 3.72565 14.2743 3.99393C14.452 4.26222 14.7042 4.4727 15 4.59946C15.3016 4.73257 15.6362 4.77228 15.9606 4.71346C16.285 4.65464 16.5843 4.5 16.82 4.26946L16.88 4.20947C17.0657 4.02352 17.2863 3.876 17.5291 3.77535C17.7719 3.67471 18.0322 3.6229 18.295 3.6229C18.5578 3.6229 18.8181 3.67471 19.0609 3.77535C19.3037 3.876 19.5243 4.02352 19.71 4.20947C19.896 4.39521 20.0435 4.61578 20.1441 4.85858C20.2448 5.10137 20.2966 5.36162 20.2966 5.62445C20.2966 5.88727 20.2448 6.14752 20.1441 6.39031C20.0435 6.63311 19.896 6.85368 19.71 7.03942L19.65 7.09942C19.4195 7.3351 19.2648 7.63443 19.206 7.95882C19.1472 8.28321 19.1869 8.61779 19.32 8.9194V8.9994C19.4468 9.29516 19.6572 9.54741 19.9255 9.72508C20.1938 9.90275 20.5082 9.9981 20.83 9.99938H21C21.5304 9.99938 22.0391 10.2101 22.4142 10.5852C22.7893 10.9602 23 11.4689 23 11.9994C23 12.5298 22.7893 13.0385 22.4142 13.4135C22.0391 13.7886 21.5304 13.9993 21 13.9993H20.91C20.5882 14.0006 20.2738 14.096 20.0055 14.2736C19.7372 14.4513 19.5268 14.7035 19.4 14.9993V14.9993Z" fill="#CDD2EB" stroke="#CDD2EB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M12 14.9994C13.6569 14.9994 15 13.6562 15 11.9994C15 10.3425 13.6569 8.99939 12 8.99939C10.3431 8.99939 9 10.3425 9 11.9994C9 13.6562 10.3431 14.9994 12 14.9994Z" fill="#425DC7" stroke="#425DC7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </g>
      <defs>
      <clipPath id="clip0_342_3999">
      <rect width="24" height="23.9997" fill="white" transform="translate(0 -0.000488281)"/>
      </clipPath>
      </defs>
      </svg>`,
      children: [
        {
          name: "Membros"
        },
        {
          name: "Gerais"
        },
        {
          name: "Customizações"
        },
        {
          name: "White Label"
        }
      ]
    },
    {
      name: "Ferramentas",
      icon: `<svg class="aside-menu__item--icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10.5 3.74908H3.75V10.4991H10.5V3.74908Z" fill="#425DC7" stroke="#425DC7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M20.25 13.4991H13.5V20.2491H20.25V13.4991Z" fill="#425DC7" stroke="#425DC7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M10.5 13.4991H3.75V20.2491H10.5V13.4991Z" fill="#CDD2EB" stroke="#CDD2EB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M17.8447 10.2521C17.8447 10.6664 17.5089 11.0021 17.0947 11.0021C16.6805 11.0021 16.3447 10.6664 16.3447 10.2521L16.3447 7.74908H14C13.5858 7.74908 13.25 7.4133 13.25 6.99908C13.25 6.58487 13.5858 6.24908 14 6.24908H16.3447L16.3447 3.74908C16.3447 3.33487 16.6805 2.99908 17.0947 2.99908C17.5089 2.99908 17.8447 3.33487 17.8447 3.74908V6.24908H20.5031C20.9173 6.24908 21.2531 6.58487 21.2531 6.99908C21.2531 7.4133 20.9173 7.74908 20.5031 7.74908H17.8447V10.2521Z" fill="#425DC7"/>
      </svg>`,
      children: [
        {
          name: "Hubly Store",
        },
        {
          name: "Retailer Form"
        },
        {
          name: "Retailer Cluster"
        },
        {
          name: "Retailer Invoice"
        }
      ]
    }
  ];


  await fetch("https://test-final.b8one.academy/menu")
    .then(response => {
      if (!response.ok)
        throw new Error("Erro na requisição");
      return response.json()
    })
    .then(menu => {
      const menuList = [];
      menu.menuTree.filter(menuItem => {
        let submenuItems = [];
        let icon = '';
        if (menuItem.hasChildren) {
          children.forEach(item => {
            if (menuItem.name.toLowerCase() === item.name.toLowerCase()) {
              submenuItems = item.children;
              icon = item.icon
            }
          })
        } else {
          children.forEach(item => {
            if (menuItem.name.toLowerCase() === item.name.toLowerCase()) {
              icon = item.icon;
            }
          })
        }
        menuList.push({
          name: menuItem.name,
          icon,
          hasChildren: menuItem.hasChildren,
          children: submenuItems
        })
      })
      popularMenu(menuList);
    }).catch(erro => console.log(erro))
}

function toggleSubmenu(number) {
  const submenu = document.getElementById(`submenu${number}`);
  const openSubmenu = submenu.querySelector('ul');
  const svgMenu = submenu.querySelector('.aside-menu__item--dropdown-icon');
  openSubmenu.classList.toggle('submenu__active');
  svgMenu.classList.toggle('dropdown-active');

}
function popularMenu(menu) {
  console.log(menu)
  let menuHTML = '';
  menu.map((item, index) => {
    menuHTML += `
      <li class="aside-menu__item" id="submenu${index}">`;
    if ((item.hasChildren)) {
      menuHTML += `<div class="aside-menu__item--content" onclick="toggleSubmenu(${index})">`;
    } else {
      menuHTML += `<div class="aside-menu__item--content">`;
    }
    menuHTML += `<a href="#" class="aside-menu__item--link">`;
    menuHTML += `${item.icon}`;
    menuHTML += `<span class="aside-menu__item--text">${item.name}</span>`;
    if ((item.hasChildren)) {
      menuHTML += `<svg class="aside-menu__item--dropdown-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.50024 9.74933L12.0002 14.2493L16.5002 9.74933" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>`;
    }
    menuHTML += `</a>
        </div>
      `;
    if ((item.hasChildren)) {
      menuHTML += `<ul class="aside-submenu__list">`;
      item.children.map(child => {
        menuHTML += `
      <li class="aside-submenu__item" >
        <a href="#" class="aside-submenu__item--link">
          ${child.name}
        </a>
          </li>
      `;
      })
      menuHTML += `</ul></li> `
    }
  });
  const menuData = document.querySelector('.aside-menu__list')
  menuData.insertAdjacentHTML("beforeend", menuHTML)
}
// API - Resellers
async function fecthResellers() {
  await fetch("https://test-final.b8one.academy/resellers/ranking")
    .then(response => {
      if (!response.ok)
        throw new Error("Erro na requisição");
      return response.json()
    })
    .then(resellers => {
      populateResellers(resellers);
    }).catch(erro => console.log(erro))
}
// Função para Icones dos revendedores
function resellersIcon(name) {

  if (name && name.length) {
    let firstLetterName = name.split(' ').map(e => e.charAt(0));
    firstLetterName = firstLetterName.toString().replaceAll(',', '');
    return firstLetterName;
  } else {
    return '';
  }
}

function populateResellers({ resellers }) {

  let resellersHTML = '';
  resellers.map((reseller, index) => {
    const nameIcon = resellersIcon(reseller.name);
    resellersHTML += `
    <li class="report__resellers--item">
      <span class="report__resellers--item-placing">${++index}º</span>
      <div class="report__resellers--item-data">
        <div class="resellers--item-data__avatar">
          <div class="resellers--item-data__circle" width="40" height="40">
            <span id="name-icon">${nameIcon.toUpperCase()}</span>
          </div>
        </div> 
        <div class="resellers--item-data__seller">
          <span class="data__seller--name">${reseller.name}</span>
          <div class="data__seller--second-row">
            <span class="data__seller--requests">${reseller.ordersCount} pedidos</span>
            <div class="data__seller--percentage">
              <span class="data__seller--percentage-value">${reseller.percentage}</span>`;
    if (Number(reseller.percentage.replaceAll('%', '')) > 0) {
      resellersHTML += `
              <svg class="percentage-icon__positive" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.9998 9.5L7.99976 6.5L4.99976 9.5" stroke="#158F2E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>`;
    } else {
      resellersHTML += `
              <svg class="percentage-icon__negative" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.00024 6.5L8.00024 9.5L11.0002 6.5" stroke="#EB0045" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>`;
    };
    resellersHTML += ` </div>  
          </div>
        </div>
      </div>
    </li>`;
  });
  const resellersData = document.querySelector('.report__resellers--list');
  resellersData.insertAdjacentHTML("beforeend", resellersHTML);

};


// API - insights products
async function fetchInsigths() {
  await fetch("https://test-final.b8one.academy/products/more-sold")
    .then(response => {
      if (!response.ok)
        throw new Error("Erro na requisição");
      return response.json()
    })
    .then(products => {
      // console.log(products);
      populateProducts(products);
    }).catch(erro => console.log(erro))
}

function populateProducts({ products }) {
  let productsHTML = '';
  products.map((product, index) => {
    productsHTML += `<div class="insights-section__products--item">
      <div class="insights-section__products--item-img">
        <img src=${product.image}>
      </div>
      <div class="insights-section__products--item-description">
        <span class="products--item-description__text">${product.name}</span>
      </div>
      <div class="insights-section__products--item-number">
        <span class="products--item-number__text">
          ${++index}
        </span>
      </div>
      <div class="insights-section__products--item-id">
        <span class="products--item-id__text">
          #${product.orderId}
        </span>  
      </div>
      <div class="insights-section__products--item-departament">
        <span class="products--item-departament__text">
        ${product.department}
        </span>
      </div>
      <div class="insights-section__products--item-value">
        <span class="products--item-value__text">
          R$ ${product.price}
        </span>
      </div>
    </div> `
  });
  const productsList = document.querySelector('.insights-section__products--list')
  productsList.insertAdjacentHTML("beforeend", productsHTML)
}

async function main() {
  fecthUser();
  fecthSales();
  fecthResellers();
  fetchInsigths();
  resellersIcon();
  fecthMenu();
}

// ASIDE - Mobile
const btnMobile = document.getElementsByClassName('header-mobile-menu__btn')[0];

btnMobile.addEventListener('click', function () {
  const aside = document.getElementsByClassName('dashboard-aside')[0];
  aside.classList.toggle('dashboard-aside__active')
})

// Carregamento com usuário logado
window.addEventListener('load', function () {
  const userLoggin = localStorage.getItem('userLoggin')
  console.log('load', userLoggin)
  if (userLoggin !== 'true') window.location.href = 'index.html'
})


main();




