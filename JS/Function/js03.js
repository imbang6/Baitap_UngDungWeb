function PTB2(){

    var a= parseInt(document.getElementById("a").value);
    var b= parseInt(document.getElementById("b").value);
    var c= parseInt(document.getElementById("c").value);

    var kq, x;

    if (a==0){
        if(b==0){
            if(c==0){
                kq = "Phương trình VÔ SỐ NGHIỆM";
            }
            else kq= "Phương trình VÔ NGHIỆM";
        }

        else //b!= 0
        {
            x = -c/ b;
            kq = x.toFixed(2); // lấy 2 số sau phẩy
        }
    } 
    else{
        var delta = b*b - 4*a*c;
        if(delta < 0){
            kq = "PT VÔ NGHIỆM";
        }

        else if(delta == 0) {
            x = -b/(2*a);
            kq = "PT CÓ NGHIỆM KÉP là " + x.toFixed(2);
        }
        else{
            var x1 = (-b + Math.sqrt(delta))/(2*a);
            var x2 = (-b - Math.sqrt(delta))/(2*a);

            kq = "Phương trình có HAI NGHIỆM PHÂN BIỆT <br> x1= " + x1.toFixed(2) + "<br>x2= " + x2.toFixed(2);
        }
    }

    document.getElementById("ketqua").innerHTML = kq;
}

function Xoa(){
    document.getElementById("a").value = "";
    document.getElementById("b").value = "";
    document.getElementById("c").value = "";
    document.getElementById("ketqua").innerText="";
}