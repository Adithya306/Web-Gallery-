// Wait for the DOM to be fully loaded before executing the code
document.addEventListener("DOMContentLoaded", (e) => {

    // Get all elements with the class "image"
    const image = document.getElementsByClassName("image");
    // Get the element with the ID "modal"
    const modal = document.getElementById("modal");
    // Get the element with the ID "modal-body"
    const modalBody = document.getElementById("modal-body");
  
    // Check if the first image element exists
    if (image[0]) {

      // Add a click event listener to the first image
      image[0].addEventListener("click", () => {
        
        // Show the modal
        modal.style.display = "block";
        // Set the background image of the modal body
        modalBody.style.backgroundImage = "url('Images/1.1.jpg')";
       
      });
    }
  
     // Check if the second image element exists
    if (image[1]) {

       // Add a click event listener to the second image
      image[1].addEventListener("click", () => {
        // Show the modal
        modal.style.display = "block";
         // Set the background image of the modal body
        modalBody.style.backgroundImage = "url('Images/1.2.jpg')";
       
      });
    }
  
    // Check if the third image element exists
    if (image[2]) {

      // Add a click event listener to the third image
      image[2].addEventListener("click", () => {
        // Show the modal
        modal.style.display = "block";
        // Set the background image of the modal body
        modalBody.style.backgroundImage ="url('Images/1.3.jpg')";
        
      });
    }
  
    // Check if the fourth image element exists
    if (image[3]) {

      // Add a click event listener to the fourth image
      image[3].addEventListener("click", () => {
        // Show the modal
        modal.style.display = "block";
        // Set the background image of the modal body
        modalBody.style.backgroundImage ="url('Images/1.4.jpg')";
        
      });
    }
    
    // Add a click event listener to the close button
    document.getElementsByClassName("close")[0].addEventListener("click", (e) => {
      // Hide the modal
      document.getElementById("modal").style.display = "none";
    });
  });