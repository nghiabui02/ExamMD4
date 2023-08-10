function deleteBike(id) {
    axios.delete(`http://localhost:3000/bikes/${id}`).then((res) => {
        listBike();
    })
}