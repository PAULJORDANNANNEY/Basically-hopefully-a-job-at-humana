function myFunction() {
  var x = document.getElementById("myDIV");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

<div class="container">
  <h2>humana E-mail Form</h2>
  <form action="/action_page.php">
    <div class="form-group">
      <label for="email">Enter Your E-mail:</label>
      <input type="email" class="form-control" id="email" placeholder="Enter Your E-Mail" name="email">
    </div>
    <div class="form-group">
      <label for="pwd"></label>
      <button type="submit">Submit You E-mail</button>
  </form>  
    <div class="animated fadeIn"> If You Submitted Your E-mail, Thanks</div>