function loadAdd(){
    document.getElementById('display').innerHTML = `<div class="edit">
<div class="input-group mb-3">
  <input id="name" type="text" class="form-control" placeholder="Name bike" aria-label="Username" aria-describedby="basic-addon1">
</div>
<div class="input-group mb-3">
  <input id="company" type="text" class="form-control" placeholder="Company" aria-label="Username" aria-describedby="basic-addon1">
</div>
<div class="input-group mb-3">
  <input id="price" type="text" class="form-control" placeholder="Price" aria-label="Username" aria-describedby="basic-addon1">
</div>
<div class="input-group mb-3">
  <input id="describe" type="text" class="form-control" placeholder="Describe" aria-label="Username" aria-describedby="basic-addon1">
</div>
</div>
<button style="margin-left: 1180px" class="btn btn-primary" onclick="save()">Save</button>
`
}
function save(){
    let data = {
         name: document.getElementById('name').value,
         company: document.getElementById('company').value,
         price: document.getElementById('price').value,
         describe: document.getElementById('describe').value,
     };
     axios.post('http://localhost:3000/bikes', data).then((res) => {
         listBike() ;
    });
}