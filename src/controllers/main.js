var dsnv = new danhsachnhanvien();
getLocalStorage();
function getEl(id) {
    return document.getElementById(id);
}
function laythongtinNV() {
    var taiKhoan = getEl("tknv").value;
    var hoTen = getEl("name").value;
    var eMail = getEl("email").value;
    var matKhau = getEl("password").value;
    var nTn = getEl("datepicker").value;
    var lUong = getEl("luongCB").value;
    var chucVu = getEl("chucvu").value * 1;
    var gioLam = getEl("gioLam").value;
    var nv = new nhanvien(taiKhoan, hoTen, eMail, matKhau, nTn, lUong, chucVu, gioLam)
    nv.tinhLCB();
    nv.xepLoaiNV();
    return nv;
}
getEl("btnThemNV").onclick = function () {
    var nv = laythongtinNV();

    if (nv) {
        dsnv.themNV(nv);

        //render danh sách SV đã thêm ra UI
        renderTable(dsnv.arr);

        setLocalStorage();
    }
};

function renderTable(data) {
    var content = "";
    var chucVU = "";
    for (var i = 0; i < data.length; i++) {
        var nv = data[i];
        switch (nv.chucVu) {
            case 1:
                chucVU = "Sếp";
                break;
            case 2:
                chucVU = "Trưởng phòng";
                break;
            case 3:
                chucVU = "Nhân viên";
                break;
        }
        content += `
          <tr>
              <th>${nv.taiKhoan}</th>
              <th>${nv.hoTen}</th>
              <th>${nv.eMail}</th>
              <th>${nv.ngayThangnam}</th>
              <th>${chucVU}</th>
              <th>${nv.luongCb}</th>
              <th>${nv.xepLoai}</th>
              <th>
                  <button class="btn btn-info" onclick="editNV('${nv.taiKhoan}')" data-toggle="modal"
                  data-target="#myModal">Edit</button>
                  <button class="btn btn-danger" onclick="deleteNV('${nv.taiKhoan}')">Delete</button>
              </th>
          </tr>
      `;
    }

    getEl("tableDanhSach").innerHTML = content;
}
function editNV(taiKhoan) {
    var sab = taiKhoan;
}
function deleteNV(taiKhoan) {

    dsnv.xoaNV(taiKhoan);

    renderTable(dsnv.arr);

    setLocalStorage();
}
function editNV(taiKhoan) {
    var nv = dsnv.layChiTietNV(taiKhoan);
    if (nv) {

        getEl("tknv").value = nv.taiKhoan;

        getEl("tknv").disabled = true;

        getEl("name").value = nv.hoTen;
        getEl("email").value = nv.eMail;
        getEl("password").value = nv.matKhau;
        getEl("datepicker").value = nv.ngayThangnam;
        getEl("luongCB").value = nv.lUong;
        getEl("chucvu").value = nv.chucVu * 1;
        getEl("gioLam").value = nv.gioLam;

        getEl("btnThemNV").style.display = "none";
    }
}
getEl("btnCapNhat").addEventListener("click", function () {
    var nv = laythongtinNV();
    dsnv.capNhatNV(nv);
    renderTable(dsnv.arr);
    setLocalStorage();
    getEl("tknv").disabled = false;
    getEl("btnThemNV").style.display = "inline-block";
});
getEl("btnTimNV").onclick = function () {
    renderTable([]);
    var loainv = getEl("timloainv").value * 1;
    switch (loainv) {
        case 1:
            timloaiNV("Xuất sắc");
            break;
        case 2:
            timloaiNV("Giỏi");
            break;
        case 3:
            timloaiNV("Khá");
            break;
        case 4:
            timloaiNV("Trung bình");
            break;
    }

}
function timloaiNV(loai) {
    var nhomLoaiNV = [];
    for (var i = 0; i < dsnv.arr.length; i++) {
        if (dsnv.arr[i].xepLoai == loai) {
            nhomLoaiNV.push(dsnv.arr[i]);
        }
    }
    renderTable(nhomLoaiNV);
}
function setLocalStorage() {

    var dataString = JSON.stringify(dsnv.arr);

    localStorage.setItem("DSNV", dataString);
}
function getLocalStorage() {
    if (localStorage.getItem("DSNV")) {
        var dataString = localStorage.getItem("DSNV");

        dsnv.arr = JSON.parse(dataString);

        renderTable(dsnv.arr);
    }
}