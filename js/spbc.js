const spbc = sanpham.filter(item=>item.loai=="ban chay")

for (let i = 0; i < spbc.length; i++) {
    document.getElementById("spbc").innerHTML +=
`
<div class="col-md-4 ">
    <div class="card text-center h600">
        <img class="card-img-top" src="img/${spbc[i].hinh}" alt="Card image" style="height: 250px">
        <div class="card-body">
            <h4 class="card-title">${spbc[i].ten}</h4>
            <p class="card-text">${spbc[i].mota}</p>
            <h4 class="card-title">${spbc[i].gia}</h4>
            <button class="btn btn-primary" onclick='detail(${spbc[i].id})' }>Chi tiết</button>
            <button class="btn btn-info" onclick='addCart(this)' }>Add Cart</button>
        </div>
    </div>
</div>
`
    
}

function detail(i){
    window.location.href=`detail.html?id=${i}` // chuyển sang trang detail.html
}