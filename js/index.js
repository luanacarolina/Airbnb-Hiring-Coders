const API_URL = "https://api.sheety.co/30b6e400-9023-4a15-8e6c-16aa4e3b1e72";

fetch(API_URL)
  .then(response => response.text())
  .then(result => {
    const data = JSON.parse(result);
    console.log(data)
    
    data.map(element => {
      const {
        photo,
        property_type,
        name,
        price
      } = element;

      row = document.getElementById("row");
      div = document.createElement("div");
      div.className = "col-md-4";
      card = document.createElement("div");
      card.className = "card mb-4 box-shadow";

      img = document.createElement("img")
      img.className = "card-img-top";
      img.src = photo;
      cardBody = document.createElement("div");
      cardBody.className = "card-body";
      cardText = document.createElement("div");
      cardText.className = "card-text";
      propertyType = document.createElement("p");
      propertyType.className = "property-type";
      propertyType.innerHTML = property_type;


      propertyName = document.createElement("p");
      propertyName.className = "property-name";
      propertyName.innerHTML = name;

      propertyPrice = document.createElement("p");
      propertyPrice.className = "property-price";
      propertyPrice.innerHTML = `Total de R$ ${price},00`;
      row.appendChild(div);
      div.appendChild(card);
      card.appendChild(img);
      card.appendChild(cardBody);
      cardBody.appendChild(cardText);
      cardText.appendChild(propertyType);
      cardText.appendChild(propertyName);
      cardText.appendChild(propertyPrice);
      
      
    });
    
  });

