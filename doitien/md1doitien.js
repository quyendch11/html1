function doitien(){
    let sotien=document.getElementById("am").value;
    let tienvao=document.getElementById("in").value;
    let tienra=document.getElementById("out").value;
    let ketqua;
    if (tienvao=="usd" && tienra=="usd") {ketqua=sotien};
    if (tienvao=="vnd" && tienra=="vnd") {ketqua=sotien};
    if (tienvao=="vnd"&& tienra=="usd"){ ketqua=sotien/20000};
    if (tienvao=="usd"&& tienra=="vnd"){ketqua== sotien*20000};
    document.getElementById("kq").innerHTML = ketqua;
}