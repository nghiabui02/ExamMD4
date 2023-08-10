function listBike() {
    axios.get('http://localhost:3000/bikes').then((res) => {
        let data = res.data;
        console.log(res.data)
        let str = ``
        data.map(item =>{
            str += `
<div class="edit">

</div>Name: ${item.name}|| Price:${item.company}|| Company: ${item.price}|| Describe: ${item.describe} <br><button class="btn btn-primary" onclick="loadEditForm()">Edit</button>
<button class="btn btn-primary" onclick="deleteBike(${item.id})">Delete</button>`
        })
        document.getElementById('display').innerHTML = str;
    })
}
