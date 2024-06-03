var rollV, nameV, genderV, addressV;

function readFom() {
  rollV = document.getElementById("roll").value;
  nameV = document.getElementById("name").value;
  genderV = document.getElementById("gender").value;
  addressV = document.getElementById("address").value;
  userV = document.getElementById("user").value;
  classV = document.getElementById("class").value;
  Swal.fire({
    title: "NICE!",
    text: "Data Succesfully Read :DD",
    imageUrl: "https://2.bp.blogspot.com/-bvWodhzqrEw/WkVD3Ice0nI/AAAAAAAACFk/vewh6IXM5Q4CpPOEPu5g3GltEcRd8lTxACLcBGAs/s1600/05%2BMugi.gif",
    imageWidth: 400,
    imageHeight: 200,
    imageAlt: ""
  });
  console.log(rollV, nameV, addressV, genderV);
}

document.getElementById("insert").onclick = function () {
  readFom();

  firebase
    .database()
    .ref("student/" + rollV)
    .set({
      rollNo: rollV,
      name: nameV,
      gender: genderV,
      address: addressV,
    });
    Swal.fire({
        title: "WOAH!",
        text: "Data Succesfully Entered :OO",
        imageUrl: "https://i.imgur.com/DWaWCsC.gif",
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: ""
      });
  document.getElementById("roll").value = "";
  document.getElementById("name").value = "";
  document.getElementById("gender").value = "";
  document.getElementById("address").value = "";
  document.getElementById("user").value = "";
  document.getElementById("class").value = "";
};

document.getElementById("read").onclick = function () {
  readFom();

  firebase
    .database()
    .ref("student/" + rollV)
    .on("value", function (snap) {
      document.getElementById("roll").value = snap.val().rollNo;
      document.getElementById("name").value = snap.val().name;
      document.getElementById("gender").value = snap.val().gender;
      document.getElementById("address").value = snap.val().address;
      document.getElementById("user").value = snap.val().user;
      document.getElementById("class").value = snap.val().class;
    });
};

document.getElementById("update").onclick = function () {
  readFom();

  firebase
    .database()
    .ref("student/" + rollV)
    .update({
      //   rollNo: rollV,
      name: nameV,
      gender: genderV,
      address: addressV,
      user: userV,
      class: classV
    });
    Swal.fire({
        title: "WAHOO!",
        text: "Data Succesfully Updated ^^",
        imageUrl: "https://img1.picmix.com/output/stamp/normal/6/7/0/0/260076_f8353.gif",
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: ""
      });
  document.getElementById("roll").value = "";
  document.getElementById("name").value = "";
  document.getElementById("gender").value = "";
  document.getElementById("address").value = "";
  document.getElementById("user").value = "";
  document.getElementById("class").value = "";
};
document.getElementById("delete").onclick = function () {
  readFom();

  firebase
    .database()
    .ref("student/" + rollV)
    .remove();
  alert("Data Deleted");
  document.getElementById("roll").value = "";
  document.getElementById("name").value = "";
  document.getElementById("gender").value = "";
  document.getElementById("address").value = "";
  document.getElementById("user").value = "";
  document.getElementById("class").value = "";
};