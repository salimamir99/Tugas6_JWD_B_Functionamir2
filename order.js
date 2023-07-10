let itemOrder = [
    {
        dipesan : false,
        harga : 15000,
        nama : 'Bakso',
    },
    {
        dipesan : false,
        harga : 25000,
        nama : 'Nasgor',
    },
    {
        dipesan : false,
        harga : 10000,
        nama : 'Wedang Jahe',
    }
]

let totalOrder = 0;

const itemTerpilih = document.getElementsByClassName('item');

const texTotal = document.getElementById('last-item');


for(let i = 0; i < itemTerpilih.length; i++){
    itemTerpilih[i].addEventListener('click', function(){
        setItemPemesanan(i, itemTerpilih[i])
        //aksi click
    });
}

function setItemPemesanan(index, elemen){
    if (itemOrder[index].dipesan == false){
        itemOrder[index].dipesan = true;
        elemen.style.backgroundColor = 'red';
        elemen.style.color = 'white';
        totalOrder = totalOrder + itemOrder[index].harga;
    }else {
        itemOrder[index].dipesan = false;
        elemen.style.backgroundColor = 'rgba(99, 179, 253, 0.973)';
        elemen.style.color = 'black';
        totalOrder = totalOrder - itemOrder[index].harga;   
    }
    texTotal.innerHTML = 'Total <span>Rp' + totalOrder + '</span>';
}