/**

Да се направи функција која како параметри ќе прима низа од објекти (RESOURCES) и тип на ресурс ("campaign" или "order") и како резултат 
ќе врати објект кој ќе ги следи следните правила:
    1. Да се исфилтрира низата така што ќе останат само ресурсите кои припаѓаат на зададениот тип.
    2. Од новата низа да се состави објект од објекти такашто:
        - key-то на секој објект ќе биде претставено преку името на регионот
        - value-то на секој објект ќе биде низа составена од објекти кои ги претставуваат ресурсите кои припаѓаат на истиот регион,
        такашто овие објекти ќе бидат составени од следните полиња:
            - "id"
            - "name"
            - "order_id" или "campaign_id" (во зависност од типот на ресурс кој е примен како параметар) претставувајќи го нумеричкиот дел 
            превземен од "code" полето од оригиналната низа на објекти
            - "country" кодот (e.g. "mk") превземено од "code" полето од оригиналната низа на објекти, претставено со големи букви
            - "startDate"
            - "endDate"
 
 Пример очекуван output доколку типот на ресурси е "campaign":
 {
  eu: [
    {
        id: 1,
        name: 'Resource #1',
        campaign_id: '1111',
        country: 'UK',
        startDate: '20220101',
        endDate: '20220101'
    },
    {
        id: 4,
        name: 'Resource #4',
        campaign_id: '4444',
        country: 'ES',
        startDate: '20220101',
        endDate: '20220101'
    },
    {
        id: 6,
        name: 'Resource #6',
        campaign_id: '1111',
        country: 'MK',
        startDate: '20220101',
        endDate: '20220101'
    },
    {
        id: 8,
        name: 'Resource #8',
        campaign_id: '8888',
        country: 'MK',
        startDate: '20220101',
        endDate: '20220101'
    }
  ],
  latam: [
    {
        id: 11,
        name: "Resource #11",
        campaign_id: '2332',
        country: 'MX',
        startDate: "20220110",
        endDate: "20220111",
    }
  ],
  ...
 }
 */

const RESOURCES = [
  {
    id: 1,
    name: "Resource #1",
    startDate: "20220101",
    endDate: "20220102",
    type: "campaign",
    region: "eu",
    code: "uk_1111",
  },
  {
    id: 2,
    name: "Resource #2",
    startDate: "20220102",
    endDate: "20220103",
    type: "order",
    region: "na",
    code: "usa_2222",
  },
  {
    id: 3,
    name: "Resource #3",
    startDate: "20220103",
    endDate: "20220104",
    type: "order",
    region: "na",
    code: "usa_3333",
  },
  {
    id: 4,
    name: "Resource #4",
    startDate: "20220104",
    endDate: "20220105",
    type: "campaign",
    region: "eu",
    code: "es_4444",
  },
  {
    id: 5,
    name: "Resource #5",
    startDate: "20220105",
    endDate: "20220106",
    type: "order",
    region: "eu",
    code: "it_5555",
  },
  {
    id: 6,
    name: "Resource #6",
    startDate: "20220106",
    endDate: "20220107",
    type: "campaign",
    region: "eu",
    code: "mk_1111",
  },
  {
    id: 7,
    name: "Resource #7",
    startDate: "20220107",
    endDate: "20220108",
    type: "order",
    region: "apac",
    code: "cn_7777",
  },
  {
    id: 8,
    name: "Resource #8",
    startDate: "20220108",
    endDate: "20220109",
    type: "campaign",
    region: "eu",
    code: "mk_8888",
  },
  {
    id: 9,
    name: "Resource #9",
    startDate: "20220109",
    endDate: "20220110",
    type: "order",
    region: "apac",
    code: "au_9999",
  },
  {
    id: 10,
    name: "Resource #10",
    startDate: "20220110",
    endDate: "20220111",
    type: "order",
    region: "latam",
    code: "mx_1010",
  },
  {
    id: 11,
    name: "Resource #11",
    startDate: "20220110",
    endDate: "20220111",
    type: "campaign",
    region: "latam",
    code: "mx_2332",
  },
];

function myFunction(RESOURCES, type) {

  var newArray = RESOURCES.filter(function (fil) {
    if (fil.type == this.type) {
      return fil.type;
    }
  });

  const obj = {};

  for (j = 0; j < newArray.length; j++) {
    var array = [];

    for (i = 0; i < newArray.length; i++) {
      var code = newArray[i].code;
      var numcode = code.match(/\d+/g)[0];
      var countrycode = code.match(/[a-zA-Z]+/g)[0];
      countrycode = countrycode.toUpperCase();

      if (this.type == "campaign") {
        if (newArray[j].region == newArray[i].region) {
          var obj1 = {
            id: newArray[i].id,
            name: newArray[i].name,
            campaign_id: numcode,
            country: countrycode,
            startDate: newArray[i].startDate,
            endDate: newArray[i].endDate,
          };
          array.push(obj1);
        }
      } else {
        if (newArray[j].region == newArray[i].region) {
          var obj1 = {
            id: newArray[i].id,
            name: newArray[i].name,
            order_id: numcode,
            country: countrycode,
            startDate: newArray[i].startDate,
            endDate: newArray[i].endDate,
          };
          array.push(obj1);
        }
      }
    }
    obj[newArray[j].region] = {
      array,
    };
  }
  console.log(JSON.stringify(obj, null, 4))
  return obj;
}

document.getElementById("radio1").addEventListener("change", function () {
  type = document.getElementById("radio1").value;
  myFunction(RESOURCES, type);
});
document.getElementById("radio2").addEventListener("change", function () {
  type = document.getElementById("radio2").value;
  myFunction(RESOURCES, type);
});
