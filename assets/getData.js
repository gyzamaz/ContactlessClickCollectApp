export default [
  {
    id: "1",
    order: {
      number: "1",
      items: [
        {
          name: "nazwa",
          quantity: 2,
          price: {
            value: 11.11,
            currency: "PLN"
          },
          tax: 1.23
        }
      ]
    },
    contractor: {
      id: "1",
      name: "Castorama",
      description: "opis",
      logo:
        "https://uploads.codesandbox.io/uploads/user/e7d84d05-a5db-4d2b-9022-773b29053cbc/xH9C-pobrane.png"
    },
    pickup: {
      name: "pickup nazwa 1",
      address: "adres",
      description: "opis",
      contact: {
        phone: "+48 111 111 111"
      },
      location: {
        lat: 99.999,
        long: 99.0,
        range: 10
      }
    },
    status: "odebrane",
    completed: "14.07.2020"
  },
  {
    id: "2",
    order: {
      number: "2",
      items: [
        {
          name: "pickup nazwa 2",
          quantity: 2,
          price: {
            value: 22.22,
            currency: "PLN"
          },
          tax: 1.23
        }
      ]
    },
    contractor: {
      id: "1",
      name: "Tesco",
      description: "opis",
      logo:
        "https://uploads.codesandbox.io/uploads/user/e7d84d05-a5db-4d2b-9022-773b29053cbc/5l7D-tesco-ezakupy-logo-app-PLv2.png"
    },
    pickup: {
      name: "nazwa",
      address: "adres",
      description: "opis",
      contact: {
        phone: "+48 222 222 222"
      },
      location: {
        lat: 99.999,
        long: 99.0,
        range: 10
      }
    },
    status: "w dostawie",
    completed: false
  },
  {
    id: "3",
    order: {
      number: "3",
      items: [
        {
          name: "nazwa",
          quantity: 2,
          price: {
            value: 33.33,
            currency: "PLN"
          },
          tax: 1.23
        }
      ]
    },
    contractor: {
      id: "1",
      name: "MediaMarkt",
      description: "opis",
      logo:
        "https://uploads.codesandbox.io/uploads/user/e7d84d05-a5db-4d2b-9022-773b29053cbc/TMqo-12_2.jpg"
    },
    pickup: {
      name: "pickup nazwa 3",
      address: "adres",
      description: "opis",
      contact: {
        phone: "+48 333 333 333"
      },
      location: {
        lat: 99.999,
        long: 99.0,
        range: 10
      }
    },
    status: "pakowanie",
    completed: false
  }
];
