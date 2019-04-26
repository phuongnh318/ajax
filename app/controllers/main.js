/*
    *Mục đích: Quản lý người dùng
    *Người tạo: Peo
    *Ngày tạo: 15.04  
 */
// tạo mới 1 đối tượng DanhSachNguoiDung
var dsNguoiDung = new DanhSachNguoiDung();

 //Sự kiện thêm mới người dùng
 $("#btnThemMoi").click(themNguoiDung);

 function themNguoiDung(){
     var taiKhoan = $('#TaiKhoan').val();
     var hoTen = $('#HoTen').val();
     var matKhau = $('#MatKhau').val();
     var eMail = $('#Email').val();
     var soDT = $('#SoDienThoai').val();
     var loaiND = $('#btnLoaiND').val();

     // tạo mới đối tượng người dùng
     var nguoiDungMoi = new NguoiDung(taiKhoan,hoTen,matKhau,eMail,soDT,loaiND);
    
    // thêm người dùng vào mảng
    dsNguoiDung.themNguoiDung(nguoiDungMoi);
    console.log(dsNguoiDung);
    TaoBang();
    $('.close').trigger('click');
    }

    function TaoBang(){
        var content ="";
        // duyet mang
        for(var i = 0; i< dsNguoiDung.length; i++){
            var nguoiDung = dsNguoiDung.DSND[i];
            conten += `
            <tr>
                <th>${i + 1}</th>
                <th>${nguoiDung.TaiKhoan}</th>
                <th>${nguoiDung.MatKhau}</th>
                <th>${nguoiDung.SoDT}</th>
                <th>${nguoiDung.LoaiNguoiDung}</th>
            </tr>
            `;
        }
        // ad vao table
        $('#tblDanhSachNguoiDung').html(content);
    }