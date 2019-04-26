function DanhSachNguoiDung(){
    this.DSND =[];

    this.themNguoiDung = function(nguoiDung){
        this.DSND.push(nguoiDung);
    }

    this.layViTriND = function(taiKhoan){
        for (var i = 0; i<this.DSND.length ; i++){
            var nguoiDung = this.DSND[i];
            if(nguoiDung.TaiKhoan === taiKhoan){
                return i;
            }
        }
    }

    this.capNhatNguoiDung = function(){
        //lấy ra vok trí người dùng trong mảng có
        //tài khoản trùng với tài khoản nguoiDung truyền vào
        var viTri = layViTriND(nguoiDung.TaiKhoan);
        this.DSND[viTri].MatKhau = nguoiDung.MatKhau;
        this.DSND[viTri].Email = nguoiDung.Email;
        this.DSND[viTri].SoDT = nguoiDung.SoDT;
        this.DSND[viTri].LoaiNguoiDung = nguoiDung.LoaiNguoiDung;
    }

    this.XoaNguoiDung = function(taiKhoan){
        var viTri = layViTriND(taiKhoan);
        this.DSND.splice[viTri,1];
    }
    this.ThemSV = function(){};
    this.XoaSV = function(){};
    this.SuaSV = function(){};
    this.TimKiem = function(){};
}