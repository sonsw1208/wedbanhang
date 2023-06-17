//||-----------------------------------------------------------------||
//||---------------------THỜI GIAN GIẢM GIÁ--------------------------||
//||-----------------------------------------------------------------||
const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

const currentYear = new Date().getFullYear();
const currentMonth = new Date().getMonth();
const currentDay = new Date().getDay();
const newYearTime = new Date(
  `${currentMonth + 4} ${currentDay + 20}  ${currentYear} 00:00:00` // Mốc thời gian mới
);

function updateCountdown() {
  const currenTime = new Date(); // Lấy Ra Thời Gian Hiện Tại
  const diff = newYearTime - currenTime; // Tính thời gian giảm giá
  const d = Math.floor(diff / 1000 / 60 / 60 / 24); // Tính Ngày (Làm tròn số)
  const h = Math.floor(diff / 1000 / 60 / 60) % 24; //Tính Giờ
  const m = Math.floor(diff / 1000 / 60) % 60; // Tính Phút
  const s = Math.floor(diff / 1000) % 60; // Tính Giây

  days.innerHTML = d;
  hours.innerHTML = h < 10 ? "0" + h : h; // Nếu giờ nhỏ hơn 10 thì thêm số 0
  minutes.innerHTML = m < 10 ? "0" + m : m; // Phút,Giây cũng thế
  seconds.innerHTML = s < 10 ? "0" + s : s;
}
setInterval(updateCountdown, 1000);
//****************************************************************************************/

//||----------------------------------------------------------------------------------------||
//||----------------------------CHUYỂN SLIDE------------------------------------------------||
//||----------------------------------------------------------------------------------------||
const rightbtn = document.querySelector(
  ".container__product-transferslide-right"
);
const leftbtn = document.querySelector(
  ".container__product-transferslide-left"
);
const ingNumber = document.querySelectorAll(".container__slider");
let index = 0;
rightbtn.addEventListener("click", function () {
  index = index + 1;
  if (index > ingNumber.length - 1) {
    index = 0;
  }
  document.querySelector(".container__parents-slider").style.right =
    index * 100 + "%";
});

leftbtn.addEventListener("click", function () {
  index = index - 1;
  if (index <= 0) {
    index = ingNumber.length - 1;
  }
  document.querySelector(".container__parents-slider").style.right =
    index * 100 + "%";
});
//****************************************************************************************/

//||----------------------------------------------------------------------------------------||
//||-------------------------------THANH TAB------------------------------------------------||
//||----------------------------------------------------------------------------------------||
function opentabs(tabName) {
  var i;
  var x = document.getElementsByClassName("tabs");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  document.getElementById(tabName).style.display = "block";
}
//****************************************************************************************/

//||----------------------------------------------------------------------------------------||
//||-------------------------------NÚT TĂNG GIẢM SỐ LƯỢNG-----------------------------------||
//||----------------------------------------------------------------------------------------||
const subtract = document.querySelector(".subtract-btn");
const addtion = document.querySelector(".add-btn");
var x = 1;
addtion.addEventListener("click", function () {
  x = x + 1;
  document.querySelector(".number").innerHTML = x;
});

subtract.addEventListener("click", function () {
  x = x - 1;
  if (x < 0) {
    x = 0;
  }
  document.querySelector(".number").innerHTML = x;
});
//****************************************************************************************/

//||-------------------------------------------------------------------------------------||
//||-------------------------------ĐÓNG,MỞ MODAL ZOOM------------------------------------||
//||-------------------------------------------------------------------------------------||
var btnclose = document.querySelectorAll(".modal-zoom__contents-close");
var btnclose1 = document.querySelector(".modal-zoom__contents-close.close1");
const modalzoom = document.querySelector(".modal-zoom");
const modalzoom1 = document.querySelector(".modal-zoom.zoom1");
var btnzoom = document.querySelectorAll(".btn-fly"); // Nút Zoom
var btnbuy = document.querySelectorAll(".btn-buy"); // Nút mua ngay
var btnboxcard = document.querySelectorAll(".addtocard"); // Nút thùng giỏ hàng

// Mở modal zoom bằng 'nút zoom'
for (var i = 0; i < btnzoom.length; i++) {
  btnzoom[i].addEventListener("click", function (e) {
    var zoombtn = e.target;
    var parenofzoombtn = zoombtn.parentElement; // Thẻ chứa nút zoom
    var nodeoutside = parenofzoombtn.parentElement; // Thẻ chứa bên ngoài của parenofzoombtn
    var nodeoutside1 = nodeoutside.parentElement; // Thẻ chứa bên ngoài của nodeoutside
    var productimg = nodeoutside1.querySelector("img").src; // Lấy link ảnh của sản phẩm
    var productname = nodeoutside1.querySelector(".name-product").innerText; // Lấy tên của sản phẩm
    var productmoney = nodeoutside1.querySelector(".money-product").innerText; // Lấy giá tiền của sản phẩm
    document.querySelector(".modal-zoom__contents-price-name h3").innerHTML =
      productname; // Cập nhập tên
    document.querySelector(".modal-zoom__contents-price-money p").innerHTML =
      productmoney; // Cập nhập giá tiền
    document.querySelector(".modal-zoom__contents-imgproducttop img").src =
      productimg; // Cập nhập link ảnh
    document.querySelector(
      ".modal-zoom__contents-price-name p"
    ).innerHTML = `Mã sản phẩm : ${productname}`; // Cập nhập mã sản phẩm
    modalzoom.style.display = "flex";
  });
}

// Đóng modal zoom bằng 'nút zoom'
for (var i = 0; i < btnclose.length; i++) {
  btnclose[i].addEventListener("click", function () {
    modalzoom.style.display = "none";
  });
}
//****************************************************************************************/

//||-------------------------------------------------------------------------------------||
//||-------------------------------GIỎ HÀNG----------------------------------------------||
//||-------------------------------------------------------------------------------------||
var items = 0;
var numberproduct = document.querySelector(".numberitems");
numberproduct.innerHTML = `(${items})`;
var closecard = document.querySelectorAll(".close-card");
const emptycard = document.querySelector(".empty_card");
const btncard = document.querySelector(".header__list-card");

// Đóng giỏ hàng
for (var i = 0; i < closecard.length; i++) {
  closecard[i].addEventListener("click", function () {
    emptycard.style.display = "none";
    noemptycard.style.display = "none";
  });
}

//****************************************************************************************/

//||-------------------------------------------------------------------------------------||
//||-------------------------------MODAL GIỎ HÀNG----------------------------------------||
//||-------------------------------------------------------------------------------------||
var addcard = document.querySelectorAll(".addcard"); // Nút thêm vào giỏ hàng
var modalcard = document.querySelector(".modal__card"); // Modal giỏ hàng
var btnclosecard = document.querySelector(
  ".modal__card-contents-header--btnclose"
); // Nút close của modal giỏ hàng
var containercard = document.querySelector(".modal__card-contents-information"); // Nơi chứa các sản phẩm
var countproduct = document.querySelector(".modal__card-contents-header--inf"); // Đếm số lượng sản phẩm
var noemptycard = document.querySelector(".no_empty_card"); // Khi giỏ hàng không trống
var numbernoemptycard = document.querySelector(
  ".no_empty_card-myproductnumber"
);
let totalmoneyanyproduct = 0; // Tổng tiền ban đầu là 0
let totalnumberproduct = 0; // Tổng số lượng ban đầu là 0

// Hiển thị modal card
for (var i = 0; i < addcard.length; i++) {
  addcard[i].addEventListener("click", function (e) {
    var btnaddcard = e.target;
    var parentofaddcard = btnaddcard.parentElement;
    var parentofaddcard1 = parentofaddcard.parentElement; // Thẻ chứa của parentofcard
    var cardname = parentofaddcard.querySelector(
      ".modal-zoom__contents-price-name h3"
    ).innerText; // Lấy tên của sản phẩm
    var cardmoney = parentofaddcard.querySelector(
      ".modal-zoom__contents-price-money p"
    ).innerText; // Lấy giá của sản phẩm
    var cardnumber = parentofaddcard.querySelector(".number").innerHTML; // Lấy số lượng
    var cardimg = parentofaddcard1.querySelector(
      ".modal-zoom__contents-imgproducttop img"
    ).src; // Lấy hình ảnh

    //Đẩy các thuộc tính của sản phẩm lên local storage
    localStorage.setItem(
      "nameproduct" + JSON.stringify(localStorage.length),
      cardname
    );
    localStorage.setItem(
      "moneyproduct" + JSON.stringify(localStorage.length - 1),
      cardmoney
    );
    localStorage.setItem(
      "numberproduct" + JSON.stringify(localStorage.length - 2),
      cardnumber
    );
    localStorage.setItem(
      "imgproduct" + JSON.stringify(localStorage.length - 3),
      cardimg
    );
    alert("Thêm thành công sản phẩm vào giỏ hàng");
    location.reload();
  });
}

// Đóng modal card
btnclosecard.addEventListener("click", function () {
  modalcard.style.display = "none";
});

// Giỏ hàng ở thanh menu

var cardmenu = document.querySelector(".header__list-card");

// Hàm tính tổng số lượng
function totalproduct() {
  var total = 0;
  for (var i = 0; i < localStorage.length; i += 4) {
    var getnumberproduct = localStorage.getItem(
      "numberproduct" + JSON.stringify(i)
    );
    var convert = Math.floor(getnumberproduct);
    total += convert;
    countproduct.innerHTML = `GIỎ HÀNG CỦA BẠN CÓ ${total} SẢN PHẨM`;
    numberproduct.innerHTML = `(${total})`;
  }
}

// Hàm tính tổng tiền
var moneytotal = document.querySelector(".modal__card-contents-button-money");
function totalmoneyproduct() {
  var total = 0;
  for (var i = 0; i < localStorage.length; i += 4) {
    var getmoneyproduct = localStorage.getItem(
      "moneyproduct" + JSON.stringify(i)
    );
    var getnumberproduct = localStorage.getItem(
      "numberproduct" + JSON.stringify(i)
    );
    var convert = parseInt(getmoneyproduct, 10);
    var convert = Math.floor(getnumberproduct);
    var convert1 = parseInt(getmoneyproduct, 10);
    intomoney = convert * convert1;
    total += intomoney;
    moneytotal.innerHTML = `TỔNG TIỀN : ${total},000,000đ`;
  }
}

// Hàm hiển thị sản phẩm
function displayproduct() {
  for (var i = 0; i < localStorage.length; i += 4) {
    var getnameproduct = localStorage.getItem(
      "nameproduct" + JSON.stringify(i)
    );
    var getmoneyproduct = localStorage.getItem(
      "moneyproduct" + JSON.stringify(i)
    );
    var getnumberproduct = localStorage.getItem(
      "numberproduct" + JSON.stringify(i)
    );
    var getimgproduct = localStorage.getItem("imgproduct" + JSON.stringify(i));

    // Tính thành tiền
    var convert = Math.floor(getnumberproduct);
    var convert1 = parseInt(getmoneyproduct, 10);
    intomoney = convert * convert1;

    var adddiv = document.createElement("div");
    adddiv.style.display = "flex";
    adddiv.classList.add("childcard");
    var divcontent =
      '<div class="modal__card-contents-menu--product modal__card-contents-menu--product-detail"><div class="modal__card-contents-menu--product-detail-img"><img src="' +
      getimgproduct +
      '" alt=""></div><div class="modal__card-contents-menu--product-detail-text">' +
      getnameproduct +
      '</div></div><div class="modal__card-contents-menu--money"><div class="modal__card-contents-menu--money-real">' +
      getmoneyproduct +
      '</div><div class="modal__card-contents-menu--money-percent">-35%</div></div><div class="modal__card-contents-menu--quantity modal__card-contents-menu--quantity-real">' +
      getnumberproduct +
      '</div><div class="modal__card-contents-menu--bill modal__card-contents-menu--bill-real"><div class="modal__card-contents-menu--bill-real-money">' +
      `${intomoney},000,000` +
      '</div><div class="modal__card-contents-menu--bill-real-trash"><i class="fa-solid fa-trash-can"></i></div></div>';
    adddiv.innerHTML = divcontent;
    containercard.append(adddiv);
  }
}

// Khi click vào giỏ hàng
cardmenu.addEventListener("click", function () {
  modalcard.style.display = "flex";
  // Hiển thị tổng số lượng
  totalproduct();
  // Hiển thị tổng tiền
  totalmoneyproduct();
  //Hiển thị sản phẩm
  displayproduct();
  var deletecard = document.querySelectorAll(
    ".modal__card-contents-menu--bill-real-trash"
  );
  for (var i = 0; i < deletecard.length; i++) {
    deletecard[i].addEventListener("click", function (e) {
      var dl = e.target;
      var dl1 = dl.parentElement.parentElement.parentElement;
      dl1.remove();
      var immage = dl1.querySelector(
        ".modal__card-contents-menu--product-detail-img img"
      ).src; // Ảnh
      var name = dl1.querySelector(
        ".modal__card-contents-menu--product-detail-text"
      ).innerText;
      var mon = dl1.querySelector(
        ".modal__card-contents-menu--money-real"
      ).innerText;
      var num = dl1.querySelector(
        ".modal__card-contents-menu--quantity"
      ).innerText;
    });
  }
});

// Xóa sản phẩm

// Tiến hành thanh toán
var pay = document.querySelector(".modal__card-contents-button-bill");

pay.addEventListener("click", function (e) {
  var tpay = e.target;
  var cltpay = tpay.parentElement.parentElement;
  var payproduct = cltpay.querySelector(
    ".modal__card-many-contents-information"
  );
  payproduct.remove();
  localStorage.clear();
  alert("Thanh toán thành công");
  location.reload();
});

var barresponse = document.querySelector(".header__baricon");
var mainmenu = document.querySelector(".menu_mai");

barresponse.addEventListener("click", function () {
  mainmenu.classList.toggle("open_menu");
});
