const popupSection = document.querySelector(".popupWindow");
const popup = document.querySelector(".popup");
const imgBox1 = document.querySelector(".img-box1");
const imgBox2 = document.querySelector(".img-box2");
const imgBox3 = document.querySelector(".img-box3");
const imgBox4 = document.querySelector(".img-box4");
const imgBox5 = document.querySelector(".img-box5");
const imgBox6 = document.querySelector(".img-box6");
const imgBox7 = document.querySelector(".img-box7");
const imgBox8 = document.querySelector(".img-box8");
const imgBox9 = document.querySelector(".img-box9");
const imgBox10 = document.querySelector(".img-box10");
const imgBox11 = document.querySelector(".img-box11");
const imgBox12 = document.querySelector(".img-box12");
const imgBox13 = document.querySelector(".img-box13");
const imgBox14 = document.querySelector(".img-box14");
const imgBox15 = document.querySelector(".img-box15");
const imgBox16 = document.querySelector(".img-box16");
const imgBox17 = document.querySelector(".img-box17");
const imgBox18 = document.querySelector(".img-box18");
const imgBox19 = document.querySelector(".img-box19");
const imgBox20 = document.querySelector(".img-box20");
const imgBox21 = document.querySelector(".img-box21");
const imgBox22 = document.querySelector(".img-box22");
const imgBox23 = document.querySelector(".img-box23");
const imgBox24 = document.querySelector(".img-box24");
const imgBox25 = document.querySelector(".img-box25");
const imgBox26 = document.querySelector(".img-box26");
const close = document.querySelector(".close");

const imagePopup = (box, img) => {
	box.addEventListener("click", function () {
		popupSection.style.display = "block";
		popup.style.background = `url(${img}) center/contain no-repeat`;
	});
};

close.addEventListener("click", function () {
	popupSection.style.display = "none";
});

imagePopup(imgBox1, "../assets/gallery/DSC_0740.jpg");
imagePopup(imgBox2, "../assets/gallery/DSC_0241.jpg");
imagePopup(imgBox3, "../assets/gallery/DSC_0219.jpg");
imagePopup(imgBox4, "../assets/gallery/DSC_0327.jpg");
imagePopup(imgBox5, "../assets/gallery/DSC_0606.jpg");
imagePopup(imgBox6, "../assets/gallery/DSC_0613.jpg");
imagePopup(imgBox7, "../assets/gallery/DSC_0064.jpg");
imagePopup(imgBox8, "../assets/gallery/DSC_0080.jpg");
imagePopup(imgBox9, "../assets/gallery/DSC_0083.jpg");
imagePopup(imgBox10, "../assets/gallery/DSC_0093.jpg");
imagePopup(imgBox11, "../assets/gallery/DSC_0008.jpg");
imagePopup(imgBox12, "../assets/gallery/DSC_0228.jpg");
imagePopup(imgBox13, "../assets/gallery/DSC_0507.jpg");
imagePopup(imgBox14, "../assets/gallery/DSC_0557.jpg");
imagePopup(imgBox15, "../assets/gallery/IMG_3406.jpg");
imagePopup(imgBox16, "../assets/gallery/DSC_0679.jpg");
imagePopup(imgBox17, "../assets/gallery/DSC_0644.jpg");
imagePopup(imgBox18, "../assets/gallery/DSC_0202.jpg");
imagePopup(imgBox19, "../assets/gallery/DSC_0654.jpg");
imagePopup(imgBox20, "../assets/gallery/DSC_0163.jpg");
imagePopup(imgBox21, "../assets/gallery/DSC_0169.jpg");
imagePopup(imgBox22, "../assets/gallery/DSC_0054.jpg");
imagePopup(imgBox23, "../assets/gallery/DSC_0096.jpg");
imagePopup(imgBox24, "../assets/gallery/DSC_0141.jpg");
imagePopup(imgBox25, "../assets/gallery/DSC_0150.jpg");
imagePopup(imgBox26, "../assets/gallery/DSC_0141.jpg");

// get all files in gallery folder
const fs = require("fs");
const path = require("path");

const galleryPath = path.join(__dirname, "gallery");

const files = fs.readdirSync(galleryPath);

console.log(files);
