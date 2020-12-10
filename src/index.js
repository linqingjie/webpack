import css from "./index.css";
import scss from "./index.scss";
import less from "./index.less";
import img_ from "./touxiang.jpg";
var arr = [1, 2, 3, 4, 54];
for (var i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
var img = document.createElement("img");
img.src = img_;
document.body.appendChild(img);
