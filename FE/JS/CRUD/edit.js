
function loadEditForm(id){
    axios.get(`http://localhost:3000/bikes/?id=${id}`).then(res => {
        let data = res.data[0]
        document.getElementById('idEdit').value = data.id;
        document.getElementById('nameEdit').value = data.name;
        document.getElementById('priceEdit').value = data.price;
        document.getElementById('companyEdit').value = data.company;
        document.getElementById('describeEdit').value = data.describe;
    })
    document.getElementById('display').innerHTML = `<h3>Edit Bike</h3>
        <table> 
            <tr>Id: <input type="hidden" id="idEdit"></tr>
            <tr>Tên: <input type="text" id="nameEdit"></tr>
            <tr>Giá xe: <input type="number" id="priceEdit"></tr>
            <tr>Hãng xe: <input type="text" id="companyEdit"></tr>
            <tr>Mô tả: <input type="text" id="describeEdit"></tr>
            <tr><button class="btn btn-primary" onclick="editCar()">Save</button></tr>
        </table>
`
}

function editCar(){
    let data = {
        id: document.getElementById('idEdit').value,
        name: document.getElementById('nameEdit').value,
        price: document.getElementById('priceEdit').value,
        company: document.getElementById('companyEdit').value,
        describe: document.getElementById('describeEdit').value
    }
    axios.put(`http://localhost:3000/bikes/${data.id}`, data).then(res => {
        alert("ban co chac chan sua khong")
        listBike()
    })
}