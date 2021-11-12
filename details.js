const body = document.querySelector('body');
const open = document.getElementById('open');
const open2 = document.getElementById('open2');
const open3 = document.getElementById('open3');
const open4 = document.getElementById('open4');
const open5 = document.getElementById('open5');
const open6 = document.getElementById('open6');
const open7 = document.getElementById('open7');
const open8 = document.getElementById('open8');
const section = document.createElement('section');
const h3 = document.createElement('h3');
const p = document.createElement('p');
const img = document.createElement('img');
const img2 = document.createElement('img');
const img3 = document.createElement('img');
const img4 = document.createElement('img');
const img5 = document.createElement('img');
const img6 = document.createElement('img');
const div = document.createElement('div');
const div1 = document.createElement('div');
const div2 = document.createElement('div');
const div3 = document.createElement('div');
const div4 = document.createElement('div');
const div5 = document.createElement('div');
const div6 = document.createElement('div');
const ul = document.createElement('ul');
const li1 = document.createElement('li');
const li2 = document.createElement('li');
const li3 = document.createElement('li');
const li4 = document.createElement('li');
const li5 = document.createElement('li');
const ul2 = document.createElement('ul');
const l1 = document.createElement('li');
const l2 = document.createElement('li');
const l3 = document.createElement('li');
const button1 = document.createElement('button');
const button2 = document.createElement('button');
const p2 = document.createElement('p');
const p3 = document.createElement('p');

body.append(section);
section.append(div1);
div1.append(div);
div.append(h3);
div.append(img2);
div1.append(ul);
ul.append(li1);
ul.append(li2);
li2.append(img3);
ul.append(li3);
ul.append(li4);
li4.append(img4);
ul.append(li5);
div1.append(div2);
div2.append(img);
div1.append(div3);
div3.append(p);
div3.append(div6);
div6.append(div4);
div4.append(ul2);
ul2.append(l1);
ul2.append(l2);
ul2.append(l3);
div6.append(div5);
div5.append(button1);
button1.append(p2);
button1.append(img5);
div5.append(button2);
button2.append(p3);
button2.append(img6);

section.setAttribute('id', 'details');
div1.setAttribute('id', 'det-card');
div.setAttribute('id', 'details-heading');
h3.setAttribute('id', 'heading3');
p.setAttribute('id', 'parag');
img2.setAttribute('id', 'close-btn');
li1.setAttribute('id', 'cano');
li3.setAttribute('id', 'backyy');
li5.setAttribute('id', 'year');
li4.setAttribute('id', 'counter');
li2.setAttribute('id', 'counter');
ul.setAttribute('id', 'myworky');
l1.setAttribute('id', 'html');
l2.setAttribute('id', 'css');
l3.setAttribute('id', 'java');
div2.setAttribute('class', 'project-img');
img.setAttribute('id', 'project-imgg');
div3.setAttribute('id', 'descrpty');
div4.setAttribute('id', 'details-languages');
div5.setAttribute('id', 'buttns');
button1.setAttribute('id', 'details-buttn detBtn');
button2.setAttribute('id', 'details-buttn2 detBtn');
img3.setAttribute('id', 'counter1');
img4.setAttribute('id', 'counter2');
img5.setAttribute('id', 'live');
img6.setAttribute('id', 'git');
p2.setAttribute('id', 'live-txt');
p3.setAttribute('id', 'git-txt');
div6.setAttribute('class', 'footer');

img2.addEventListener('click', () => {
  section.classList.remove('show');
});

function displayGit() {
  window.open('https://github.com/Mosams/Personal-Portfolio.git');
}

function displaylive() {
  window.open('https://mosams.github.io/Personal-Portfolio');
}

const cardsDetail1 = [
  {
    name: 'Tonic',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    canopy: 'CANOPY',
    back: 'Back End Dev',
    year: '2015',
    image: 'images/card1.jpg',
    tech1: 'html',
    tech2: 'css',
    tech3: 'javascript',
    closBtn: 'images/close.png',
    buttn1: 'See live',
    buttn2: 'See Source',
    counterOne: 'images/Counter.jpg',
    counterTwo: 'images/Counter.jpg',
    live: 'images/live.jpg',
    gity: 'images/gitty.jpg',
  },

  {
    name: 'Multi-Post Stories',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    canopy: 'CANOPY',
    back: 'Back End Dev',
    year: '2015',
    image: 'images/card2.jpg',
    tech1: 'html',
    tech2: 'css',
    tech3: 'javascript',
    closBtn: 'images/close.jpg',
    buttn1: 'See live',
    buttn2: 'See Source',
    counterOne: 'images/Counter.jpg',
    counterTwo: 'images/Counter.jpg',
    live: 'images/live.jpg',
    gity: 'images/gitty.jpg',
  },
  {
    name: 'Tonic',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    canopy: 'CANOPY',
    back: 'Back End Dev',
    year: '2015',
    image: 'images/card3.jpg',
    tech1: 'html',
    tech2: 'css',
    tech3: 'javascript',
    closBtn: 'images/close.jpg',
    buttn1: 'See live',
    buttn2: 'See Source',
    counterOne: 'images/Counter.jpg',
    counterTwo: 'images/Counter.jpg',
    live: 'images/live.jpg',
    gity: 'images/gitty.jpg',
  },
  {
    name: 'Multi-Post Stories',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    canopy: 'CANOPY',
    back: 'Back End Dev',
    year: '2015',
    image: 'images/card4.jpg',
    tech1: 'html',
    tech2: 'css',
    tech3: 'javascript',
    closBtn: 'images/close.jpg',
    buttn1: 'See live',
    buttn2: 'See Source',
    counterOne: 'images/Counter.jpg',
    counterTwo: 'images/Counter.jpg',
    live: 'images/live.jpg',
    gity: 'images/gitty.jpg',
  },
];

button1.addEventListener('click', displaylive);
button2.addEventListener('click', displayGit);

function displayInfo() {
  section.classList.add('show');

  document.getElementById('heading3').innerHTML = cardsDetail1[0].name;
  document.getElementById('close-btn').src = cardsDetail1[0].closBtn;
  document.getElementById('project-imgg').src = cardsDetail1[0].image;
  document.getElementById('parag').innerHTML = cardsDetail1[0].description;
  document.getElementById('cano').innerHTML = cardsDetail1[0].canopy;
  document.getElementById('counter1').src = cardsDetail1[0].counterOne;
  document.getElementById('backyy').innerHTML = cardsDetail1[0].back;
  document.getElementById('counter2').src = cardsDetail1[0].counterOne;
  document.getElementById('year').innerHTML = cardsDetail1[0].year;
  document.getElementById('html').innerHTML = cardsDetail1[0].tech1;
  document.getElementById('css').innerHTML = cardsDetail1[0].tech2;
  document.getElementById('java').innerHTML = cardsDetail1[0].tech3;
  document.getElementById('live-txt').innerHTML = cardsDetail1[0].buttn1;
  document.getElementById('git-txt').innerHTML = cardsDetail1[0].buttn2;
  document.getElementById('live').src = cardsDetail1[0].live;
  document.getElementById('git').src = cardsDetail1[0].gity;
}

function displayInfo2() {
  section.classList.add('show');

  document.getElementById('heading3').innerHTML = cardsDetail1[1].name;
  document.getElementById('close-btn').src = cardsDetail1[1].closBtn;
  document.getElementById('project-imgg').src = cardsDetail1[1].image;
  document.getElementById('parag').innerHTML = cardsDetail1[1].description;
  document.getElementById('cano').innerHTML = cardsDetail1[1].canopy;
  document.getElementById('counter1').src = cardsDetail1[1].counterOne;
  document.getElementById('backyy').innerHTML = cardsDetail1[1].back;
  document.getElementById('counter2').src = cardsDetail1[1].counterOne;
  document.getElementById('year').innerHTML = cardsDetail1[1].year;
  document.getElementById('html').innerHTML = cardsDetail1[1].tech1;
  document.getElementById('css').innerHTML = cardsDetail1[1].tech2;
  document.getElementById('java').innerHTML = cardsDetail1[1].tech3;
  document.getElementById('live-txt').innerHTML = cardsDetail1[1].buttn1;
  document.getElementById('git-txt').innerHTML = cardsDetail1[1].buttn2;
  document.getElementById('live').src = cardsDetail1[1].live;
  document.getElementById('git').src = cardsDetail1[1].gity;
}

function displayInfo3() {
  section.classList.add('show');

  document.getElementById('heading3').innerHTML = cardsDetail1[2].name;
  document.getElementById('close-btn').src = cardsDetail1[2].closBtn;
  document.getElementById('project-imgg').src = cardsDetail1[2].image;
  document.getElementById('parag').innerHTML = cardsDetail1[2].description;
  document.getElementById('cano').innerHTML = cardsDetail1[2].canopy;
  document.getElementById('counter1').src = cardsDetail1[2].counterOne;
  document.getElementById('backyy').innerHTML = cardsDetail1[2].back;
  document.getElementById('counter2').src = cardsDetail1[2].counterOne;
  document.getElementById('year').innerHTML = cardsDetail1[2].year;
  document.getElementById('html').innerHTML = cardsDetail1[2].tech1;
  document.getElementById('css').innerHTML = cardsDetail1[2].tech2;
  document.getElementById('java').innerHTML = cardsDetail1[2].tech3;
  document.getElementById('live-txt').innerHTML = cardsDetail1[2].buttn1;
  document.getElementById('git-txt').innerHTML = cardsDetail1[2].buttn2;
  document.getElementById('live').src = cardsDetail1[2].live;
  document.getElementById('git').src = cardsDetail1[2].gity;
}

function displayInfo4() {
  section.classList.add('show');

  document.getElementById('heading3').innerHTML = cardsDetail1[3].name;
  document.getElementById('close-btn').src = cardsDetail1[3].closBtn;
  document.getElementById('project-imgg').src = cardsDetail1[3].image;
  document.getElementById('parag').innerHTML = cardsDetail1[3].description;
  document.getElementById('cano').innerHTML = cardsDetail1[3].canopy;
  document.getElementById('counter1').src = cardsDetail1[3].counterOne;
  document.getElementById('backyy').innerHTML = cardsDetail1[3].back;
  document.getElementById('counter2').src = cardsDetail1[3].counterOne;
  document.getElementById('year').innerHTML = cardsDetail1[3].year;
  document.getElementById('html').innerHTML = cardsDetail1[3].tech1;
  document.getElementById('css').innerHTML = cardsDetail1[3].tech2;
  document.getElementById('java').innerHTML = cardsDetail1[3].tech3;
  document.getElementById('live-txt').innerHTML = cardsDetail1[3].buttn1;
  document.getElementById('git-txt').innerHTML = cardsDetail1[3].buttn2;
  document.getElementById('live').src = cardsDetail1[3].live;
  document.getElementById('git').src = cardsDetail1[3].gity;
}

open.addEventListener('click', displayInfo);
open2.addEventListener('click', displayInfo2);
open3.addEventListener('click', displayInfo3);
open4.addEventListener('click', displayInfo4);
open5.addEventListener('click', displayInfo);
open6.addEventListener('click', displayInfo2);
open7.addEventListener('click', displayInfo3);
open8.addEventListener('click', displayInfo4);