import cardsDetail1 from './data.js';

const body = document.querySelector('body');
const open = document.querySelectorAll('.open');
const section = document.createElement('section');
body.append(section);
section.setAttribute('id', 'details');

function displayInfo() {
  open.forEach((element) => {
    element.addEventListener('click', (e) => {
      const firstSecOfHeading = e.target.parentElement.parentElement;
      const cardHeading = firstSecOfHeading.firstChild.nextElementSibling.textContent;

      for (let i = 0; i < cardsDetail1.length; i += 1) {
        if (cardHeading === cardsDetail1[i].name) {
          section.classList.add('show');

          section.innerHTML = `
             <div id="det-card">
              <div id="details-heading">
                <h3 id="heading3">${cardsDetail1[i].name}</h3>
                <img id="close-btn" src="${cardsDetail1[i].closBtn}" />
              </div>
              <ul id="myworky">
                <li id="cano">${cardsDetail1[i].canopy}</li>
                <li id="counter">
                  <img id="counter1" src="${cardsDetail1[i].counterOne}" />
                </li>
                <li id="backyy">${cardsDetail1[i].back}</li>
                <li id="counter">
                  <img id="counter2" src="${cardsDetail1[i].counterOne}" />
                </li>
                <li id="year">${cardsDetail1[i].year}</li>
              </ul>
              <div class="project-img">
                <img id="project-imgg" src="${cardsDetail1[i].image}" />
              </div>
              <div id="descrpty">
                <p id="parag">${cardsDetail1[i].description}</p>
                <div class="footer">
                  <div id="details-languages">
                    <ul id="ul2">
                      <li id="html">${cardsDetail1[i].tech1}</li>
                      <li id="css">${cardsDetail1[i].tech2}</li>
                      <li id="java">${cardsDetail1[i].tech3}</li>
                    </ul>
                  </div>
                  <div id="buttns">
                    <button id="details-buttn detBtn" class="button1" >
                      <p id="live-txt">${cardsDetail1[i].buttn1}</p>
                      <img id="live" src="${cardsDetail1[i].live}" />
                    </button>
                    <button id="details-buttn2 detBtn" class="button2" >
                      <p id="git-txt">${cardsDetail1[i].buttn2}</p>
                      <img id="git" src="${cardsDetail1[i].gity}" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          `;
          section.addEventListener('click', (e) => {
            if (e.target.id === 'close-btn') {
              section.classList.remove('show');
            }
            if (e.target.id === 'details-buttn' || e.target.id === 'live-txt' || e.target.id === 'live') {
              window.open(`${cardsDetail1[i].liveLink}`);
            }
            if (e.target.id === 'details-buttn2' || e.target.id === 'git-txt' || e.target.id === 'git') {
              window.open(`${cardsDetail1[i].liveGit}`);
            }
          });
        }
      }
    });
  });
}

displayInfo();
