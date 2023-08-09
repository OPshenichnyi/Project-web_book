

import save from "../images/charity/save_1x.webp";
import hope from "../images/charity/hope_1x.webp";
import united from "../images/charity/united_1x.webp";
import medical from "../images/charity/medical_1x.webp";
import medicin from "../images/charity/medicins_1x.webp";
import razom from "../images/charity/razom_1x.webp";
import action from "../images/charity/action_1x.webp";
import vision from "../images/charity/vision_1x.webp";
import prytula from "../images/charity/prytula_1x.webp";
import save2x from "../images/charity/save_2x.webp";
import hope2x from "../images/charity/hope_2x.webp";
import united2x from "../images/charity/united_2x.webp";
import medical2x from "../images/charity/medical_2x.webp";
import medicin2x from "../images/charity/medicins_2x.webp";
import razom2x from "../images/charity/razom_2x.webp";
import action2x from "../images/charity/action_2x.webp";
import vision2x from "../images/charity/vision_2x.webp";
import prytula2x from "../images/charity/prytula_2x.webp";





export const charitys = [
    {
      title: "Save the Children",
      url: "https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis",
      img: save,
      img2x: save2x,
    },
    {
      title: "Project HOPE",
      url: "https://www.projecthope.org/country/ukraine/",
      img: hope,
      img2x: hope2x,
    },
    {
      title: "UNITED24",
      url: "https://u24.gov.ua/uk",
      img: united2x,
      img2x: united2x,
    },
    {
      title: "International Medical Corps",
      url: "https://internationalmedicalcorps.org/country/ukraine/",
      img: medical,
      img2x: medical2x,
    },
    {
      title: "Medicins Sans Frontieres",
      url: "https://www.msf.org/ukraine",
      img: medicin,
      img2x: medicin2x,
    },
    {
      title: "RAZOM",
      url: "https://www.razomforukraine.org/",
      img: razom,
      img2x: razom2x,
    },
    {
      title: "Action against hunger",
      url: "https://www.actionagainsthunger.org/location/europe/ukraine/",
      img: action,
      img2x: action2x,
    },
    {
      title: "World vision",
      url: "https://www.wvi.org/emergencies/ukraine",
      img: vision,
      img2x: vision2x,
    },
    {
      title: "Serhiy Prytula Charity Foundation",
      url: "https://prytulafoundation.org/en",
      img: prytula,
      img2x: prytula2x,
    },
  ];
  const containerWrapper = document.querySelector(".container-wrapper");
  const scrollDownButton = document.getElementById("scroll-down");
  
  let startIndex = 0;
  const itemsPerPage = 6;
  
  function renderCharities(startIndex) {
    containerWrapper.innerHTML = "";
    for (let i = startIndex; i < startIndex + itemsPerPage; i++) {
      const index = i % charitys.length;
      const { title, url, img, img2x } = charitys[index];
      const container = document.createElement("li");
      container.classList.add("content");
      container.innerHTML = `
              <span class="number">${(index + 1).toString().padStart(2, "0")}</span>
              <span class="list-charity">
                  <a  href="${url}" target="_blank" rel = "noreferrer" rel = "noopener">
                      <img class="images-charity" srcset="${img} 1x, ${img2x} 2x" src="${img}" alt="${title}" loading="lazy">
                  </a>
              </span>
          `;
      containerWrapper.appendChild(container);
    }
  }
  function scrollList() {
    startIndex += itemsPerPage;
    renderCharities(startIndex);
  }
  scrollDownButton.addEventListener("click", scrollList);
  renderCharities(startIndex);
  