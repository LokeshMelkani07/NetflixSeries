import pic from "./images/pic1.jpg";
import pic2 from "./images/pic2.jpg";
import pic3 from "./images/pic3.jpg";
import pic4 from "./images/pic4.jpg";
import pic5 from "./images/pic5.jpg";

function Webimage() {
  return (
    <img
      src={pic}
      style={{ width: "300px", height: "200px", borderRadius: "10px" }}
    />
  );
}
export { pic, pic2, pic3, pic4, pic5 };
