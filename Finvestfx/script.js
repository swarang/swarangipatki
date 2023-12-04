
const data = [

  {

    "id": 0,

    "name": "Uthappizza",

    "image": "https://i.imgur.com/tDnjTXf.jpg",

    "category": "mains",

    "label": "Hot",

    "price": "4.99",

    "description": "A unique combination of Indian Uthappam (pancake) and Italian pizza"

  },

  {

    "id": 1,

    "name": "Zucchipakoda",

    "image": "https://i.imgur.com/xkUElXq.jpg",

    "category": "appetizer",

    "label": "",

    "price": "1.99",

    "description": "Deep fried Zucchini coated with mildly spiced Chickpea flour batter accompanied with a sweet-tangy tamarind sauce"

  },

  {

    "id": 2,

    "name": "Vadonut",

    "image": "https://i.imgur.com/anUAlqF.jpg",

    "category": "appetizer",

    "label": "New",

    "price": "1.99",

    "description": "A quintessential ConFusion experience, is it a vada or is it a donut?"

  },

  {

    "id": 3,

    "name": "ElaiCheese Cake",

    "image": "https://i.imgur.com/c5hBTEW.jpg",

    "category": "dessert",

    "label": "",

    "price": "2.99",

    "description": "A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms"

  },

  {

    "id": 4,

    "name": "Guntur chillies",

    "image": "https://i.imgur.com/Vc9JIXP.jpg",

    "category": "appetizer",

    "label": "Spicy",

    "price": "0.99",

    "description": "Assorted chillies from Guntur"

  },

  {

    "id": 5,

    "name": "Buffalo Paneer",

    "image": "https://i.imgur.com/pH2tkgk.jpg",

    "category": "appetizer",

    "label": "",

    "price": "5.99",

    "description": "A special type of Paneer made from Buffalo milk"

  },

  {

    "id": 6,

    "name": "Cherry Tomatoes",

    "image": "https://i.imgur.com/fRy8hjE.jpg",

    "category": "clone",

    "label": "clone",

    "price": "9.99",

    "description": "clone of cherry and tomato"

  },

  {

    "id": 7,

    "name": "Goat Milk",

    "image": "https://i.imgur.com/zFGPhrI.jpg",

    "category": "weird",

    "label": "weird",

    "price": "1.99",

    "description": "Medicinal Goat Milk"

  },

  {

    "id": 8,

    "name": "Rose breasted Grosbeak chicken",

    "image": "https://i.imgur.com/RYsqgoo.jpg",

    "category": "appetizer",

    "label": "New",

    "price": "7.99",

    "description": "Roasted rare bird"

  },

  {

    "id": 9,

    "name": "Toenail Zingy",

    "image": "https://i.imgur.com/IpG3YOT.jpg",

    "category": "appetizer",

    "label": "weird",

    "price": "0.99",

    "description": "Cooked Toenails of various animals"

  }

]

const $tableId = $("#table");

const newtr = `<tr>
  <th contenteditable="true" scope="row">-- ID</th>
  <td contenteditable="true">--</td>
  <td contenteditable="true">--</td>
  <td contenteditable="true">--</td>
  <td contenteditable="true">--</td>
  <td contenteditable="true">--</td>
  <td contenteditable="true">--</td>
  <td>
    <span class="table-up edit">
      <button class="btn btn-sm indigo-text mx-1">
        <i class="fas fa-long-arrow-alt-up" aria-hidden="true"></i>
      </button>
    </span>
    <span class="table-down edit">
      <button class="btn btn-sm indigo-text">
        <i class="fas fa-long-arrow-alt-down" aria-hidden="true"></i>
      </button>
    </span>
  </td>
  <td>
    <span class="table-reset edit">
      <button type="button" class="btn btn-info btn-rounded btn-sm my-0">Reset</button>
    </span>
    <span class="table-save edit">
      <button type="button" class="btn btn-success btn-rounded btn-sm my-0">Save</button>
    </span>
  </td>
</tr>`;



function renderDataList() {

  $("#table").find('tbody').html('');

  let tr = ``;

  data.forEach(x =>{
    tr += `
    <tr>
    <th contenteditable="true" scope="row">${x.id}</th>
    <td contenteditable="true">${x.name}</td>
     <td><img height="50" src="${x.image}" width="80"></td></td>
    <td contenteditable="true">${x.category}</td>
    <td contenteditable="true">${x.label}</td>
    <td contenteditable="true">${x.price}</td>
    <td contenteditable="true">${x.description}</td>

    <td>
        <span class="table-up edit">
            <button class="btn btn-sm indigo-text mx-1">
                <i class="fas fa-long-arrow-alt-up" aria-hidden="true"></i>
            </button>
        </span>
        <span class="table-down edit">
            <button class="btn btn-sm indigo-text">
                <i class="fas fa-long-arrow-alt-down" aria-hidden="true"></i>
            </button>
        </span>
    </td>
    <td>

        <span class="table-reset edit">
            <button type="button"
                class=" table-reset btn btn-info btn-rounded btn-sm my-0">reset</button>
        </span>
        <span class="table-save edit">

            <button type="button"
                class=" table-save m-4  btn btn-success btn-rounded btn-sm my-0">save</button>
        </span>
    </td>
</tr>
    `
  })

  $("#table").find('tbody').html(tr);


};

renderDataList();


$(".table-add").on("click", "i", () => {
  const $clone = $tableId.find('tbody tr').last().clone(true);
  if ($tableId.find("tbody tr").length === 0) {
    $("tbody").append(newtr);
  } else {
    $tableId.find('tbody').append($clone);
  }
});

$tableId.on("click", ".table-reset", function () {
  // const $row = $(this).closest("tr");
  // $row.find('[contenteditable="true"]').text('--');

  const $row = $(this).closest("tr");
  const values = $row.find('[contenteditable="true"]').map(function () {
    return $(this).text();
  }).get();


  let index = data.findIndex(x => x.id == values[0]);

  if(index > -1) {
    data[index] = {
      ...data[index]
    }

    renderDataList();
  }


});

$tableId.on("click", ".table-save",async function () {
  const $row = $(this).closest("tr");
  const values = $row.find('[contenteditable="true"]').map(function () {
    return $(this).text();
  }).get();


  let index = data.findIndex(x => x.id == values[0]);

  if(index > -1) {
    data[index] = {
      ...data[index],
      price: values[5],
      label: values[4],
      category: values[3]
    }
  }



    let id = values[0], price = values[5];

  // Do something with the captured values (e.g., send to server)
  console.log("Saved values:", values);
});

$tableId.on("click", ".table-up", function () {
  // const $row = $(this).closest("tr");
  // if ($row.index() === 0) {
  //   return;
  // }


  // $row.prev().before($row.get(0));

  data.sort((a,b) => (a.price > b.price) ? 1 : ((b.price > a.price) ? -1 : 0))
  renderDataList();

});


$tableId.on("click", ".table-down", function () {
  // const $row = $(this).closest("tr");
  // $row.next().after($row.get(0));

  data.sort((a,b) => (b.price > a.price) ? 1 : ((a.price > b.price) ? -1 : 0))
  renderDataList();

});
document.addEventListener('DOMContentLoaded', fetchData);

async function fetchData() {
  try {
    const response = await fetch('/api/data');
    const data = await response.json();
    displayData(data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

function displayData(data) {
  const dataList = document.getElementById('data-list');
  dataList.innerHTML = '';

  data.forEach(item => {
    const listItem = document.createElement('li');
    listItem.textContent = `${item.id}: ${item.name} - ${item.email}`;
    dataList.appendChild(listItem);
  });
}
