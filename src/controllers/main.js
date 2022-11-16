function getEl(id) {
    return document.getElementById(id);
}
getEl("btnThemNV").onclick = function () {
    var taiKhoan = getEl("tknv").value;
    var hoTen = getEl("name").value;
    var eMail = getEl("email").value;
    var matKhau = getEl("password").value;
    var nTn = getEl("datepicker").value;
    var lUong = getEl("luongCB").value;
    var chucVu = getEl("chucvu").value;
    var gioLam = getEl("gioLam").value;
    console.log(taiKhoan, hoTen, eMail, matKhau, nTn, lUong, chucVu, gioLam);

}