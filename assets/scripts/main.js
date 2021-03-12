$(document).ready(function() {
 
// Shows the St Ives Town Information 
  $('#si-btn-show').click(function() {
    // Hides Penzance and Hayle Columns
    $('#hayle').addClass('d-none');
    $('#penzance').addClass('d-none');
    // Makes the St Ives Column into a central container
    $('#st-ives').removeClass('card').addClass('container-fluid');
    // Makes image a good viewing size
    $('#si-img').removeClass('card-img-top').addClass('slider-img');
    // Displays the hidden St Ives Div
    $('#st-ives-info').removeClass('d-none');
    // Hides Top 5 Experiences 
    $('#top-5').addClass('d-none');
    // Hides the show more button
    $('#si-btn-show').addClass('d-none');
    // Displays the close content button
    $('#si-btn-hide').removeClass('d-none');
  });
    
    // Function for closing the content area
  $('#si-btn-hide').click(function() {
    // Hides the St Ives Div after button is clicked
    $('#st-ives-info').addClass('d-none');
    // Turns the St Ives container back into one of three columns
    $('#st-ives').removeClass('container-fluid').addClass('card');
    // reverts image size to card size 
    $('#si-img').removeClass('slider-img').addClass('card-img-top');
    // Displays the Penzance and Hayle Columns again
    $('#hayle').removeClass('d-none');
    $('#penzance').removeClass('d-none');
    // Shows Top 5 upon close
    $('#top-5').removeClass('d-none');
    // Hides the close button 
    $('#si-btn-hide').addClass('d-none');
    // And displays the show more button again 
    $('#si-btn-show').removeClass('d-none'); 
  });

// Shows the Hayle Town Information 
  $('#hayle-btn-show').click(function() {
    // Hides Penzance and Hayle Columns
    $('#st-ives').addClass('d-none');
    $('#penzance').addClass('d-none');
    // Makes the Hayle Column into a central container
    $('#hayle').removeClass('card').addClass('container-fluid');
    // Enlarges image
    $('#hayle-img').removeClass('card-img-top').addClass('slider-img');
    // Displays the hidden St Ives Div
    $('#hayle-info').removeClass('d-none');
    // Hides Top 5 Experiences 
    $('#top-5').addClass('d-none');
    // Hides the show more button
    $('#hayle-btn-show').addClass('d-none');
    // Displays the close content button
    $('#hayle-btn-hide').removeClass('d-none');
  });

   // Function for closing the content area
  $('#hayle-btn-hide').click(function() {
    // Hides the Hayle Info Div after button is clicked
    $('#hayle-info').addClass('d-none');
    // Turns the Hayle container back into one of three columns
    $('#hayle').removeClass('container-fluid').addClass('card');
    // Sets image back to card class type
    $('#hayle-img').removeClass('slider-img').addClass('card-img-top');
    // Displays the Penzance and St Ives Columns again
    $('#st-ives').removeClass('d-none');
    $('#penzance').removeClass('d-none');
    // Shows Top 5 upon close
    $('#top-5').removeClass('d-none');
    // Hides the close button 
    $('#hayle-btn-hide').addClass('d-none');
    // And displays the show more button again 
    $('#hayle-btn-show').removeClass('d-none'); 
  });

    // Shows the Penzance Town Information 
  $('#pz-btn-show').click(function() {
    // Hides St Ives and Hayle Columns
    $('#st-ives').addClass('d-none');
    $('#hayle').addClass('d-none');
    // Makes the Penzance Column into a central container
    $('#penzance').removeClass('card').addClass('container-fluid');
    // Enlarges card image
    $('#pz-img').removeClass('card-img-top').addClass('slider-img');
    // Displays the hidden Penzance Div
    $('#penzance-info').removeClass('d-none');
    // Hides Top 5 Experiences 
    $('#top-5').addClass('d-none');
    // Hides the show more button
    $('#pz-btn-show').addClass('d-none');
    // Displays the close content button
    $('#pz-btn-hide').removeClass('d-none');
  });

   // Function for closing the content area
  $('#pz-btn-hide').click(function() {
    // Hides the Penzance Info Div after button is clicked
    $('#penzance-info').addClass('d-none');
    // Turns the Penzance container back into one of three columns
    $('#penzance').removeClass('container-fluid').addClass('card');
    // sets image back to card class
    $('#pz-img').removeClass('slider-img').addClass('card-img-top');
    // Displays the Hayle and St Ives Columns again
    $('#st-ives').removeClass('d-none');
    $('#hayle').removeClass('d-none');
    // Shows Top 5 upon close
    $('#top-5').removeClass('d-none');
    // Hides the close button 
    $('#pz-btn-hide').addClass('d-none');
    // And displays the show more button again 
    $('#pz-btn-show').removeClass('d-none'); 
  });
});

