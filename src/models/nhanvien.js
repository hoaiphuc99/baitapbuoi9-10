function nhanvien(tk, ht, em, mk, ntn, lg, cv, gl) {
    this.taiKhoan = tk;
    this.hoTen = ht;
    this.eMail = em;
    this.matKhau = mk;
    this.ngayThangnam = ntn;
    this.lUong = lg;
    this.chucVu = cv;
    this.gioLam = gl;
    this.luongCb = 0;
    this.xepLoai = "";
    this.tinhLCB = function () {
        switch (this.chucVu) {
            case 1:
                this.luongCb = this.lUong * 3;
                break;
            case 2:
                this.luongCb = this.lUong * 2;
                break;
            case 3:
                this.luongCb = this.lUong * 1;
                break;

        }
        return this.luongCb;
    }
    this.xepLoaiNV = function () {
        if (this.gioLam >= 192) {
            this.xepLoai = "Xuất sắc";
        }
        else if (this.gioLam >= 176) {
            this.xepLoai = "Giỏi";
        }
        else if (this.gioLam >= 160) {
            this.xepLoai = "Khá";
        }
        else {
            this.xepLoai = "Trung bình";
        }
        return this.xepLoai
    }
}