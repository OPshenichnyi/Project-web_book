const charitys = [
    {
      title: "Save the Children",
      url: "https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis",
      img: "./images/save_2x.png",
    },
    {
      title: "Project HOPE",
      url: "https://www.projecthope.org/country/ukraine/",
      img: "./images/hope_2x.png",
    },
    {
      title: "UNITED24",
      url: "https://u24.gov.ua/uk",
      img: "./images/united_2x.png",
    },
    {
      title: "International Medical Corps",
      url: "https://internationalmedicalcorps.org/country/ukraine/",
      img: "./images/medical_2x.png",
    },
    {
      title: "Medicins Sans Frontieres",
      url: "https://www.msf.org/ukraine",
      img: "./images/charity/medecins_2x.png",
    },
    {
      title: "RAZOM",
      url: "https://www.razomforukraine.org/",
      img: "./images/razom_2x.png",
    },
    {
      title: "Action against hunger",
      url: "https://www.actionagainsthunger.org/location/europe/ukraine/",
      img: "./images/action_2x.png",
    },
    {
      title: "World vision",
      url: "https://www.wvi.org/emergencies/ukraine",
      img: "./images/vision_2x.png",
    },
    {
      title: "Serhiy Prytula Charity Foundation",
      url: "https://prytulafoundation.org/en",
      img: "./images/prytula_2x.png",
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
      const { title, url, img } = charitys[index];
      const container = document.createElement("div");
      container.classList.add("content");
      container.innerHTML = `
              <div class="number">${(index + 1).toString().padStart(2, "0")}</div>
              <li class="list-charity">
                  <a href="${url}" target="_blank">
                      <img class="images-charity" src="${img}" alt="${title}" height="32px">
                  </a>
              </li>
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
  