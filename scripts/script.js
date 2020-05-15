console.log('Script file loaded.');

$(document).ready(function () {
  // Obtain user name from local storage.  
  var userName = localStorage.getItem('name');

  // Create function to update with custom message to the user.
  function customWelcome() {
    $('.banner p').html(
      userName + ' we are happy that you come to our wedding ' + ' <i class="fa fa-heart" aria-hidden="true"></i> !'
    );
  }
  // Evaluate if user name is stored and call function customWelcome.
  if (userName) {
    customWelcome();
  }

  /***** SCROLL TO TOP START *****/
  // 1. Store HTML elements, to generate a reference and re-use it.
  var scrollBtn = $('#top-btn');
  var htmlBody = $('html, body');
  // 2. scrollBtn should be hidden until user scroll on the page.
  scrollBtn.hide();

  // 3. Listen scroll event to know the vertical position and show or hide btn.
  $(window).scroll(function () {
    // Define default height.
    var showAfter = 100;
    // Evaluate window position to show or hide btn.
    if ($(this).scrollTop() > showAfter) {
      scrollBtn.fadeIn();
    } else {
      scrollBtn.fadeOut();
    }
  });

  // Listen 'click' event on the btn.
  scrollBtn.click(function () {
    // Scroll top with transition when the page returns.
    htmlBody.animate(
      {
        scrollTop: 0,
      },
      800
    );
  });
  /***** SCROLL TO TOP END *****/


  /***** MODAL BOX START *****/
  var submitForm = function (event) {
    // 1. Prevent default HTML submit action to avoid reload the page.
    event.preventDefault();
    // Get input values to check if values are defined.
    var data = {
      name: $(this).find('input[name="name"]').val(),
      email: $(this).find('input[name="email"]').val(),
    };
    // Check if name and email are truthy to allow the user to submit.
    if (data.name && data.email) {
      // HERE I POST TO SOME URL. 
      /* $.ajax({
                 url: '',
                 data: data,
                 method: 'POST',
                 success: toggleSuccess,
             });*/
      toggleSuccess();
      customWelcome();

      // I want to store the user name in localStorage to get it every time the user visits the page and display custom welcome.
      localStorage.setItem('name', data.name);
    }
  };
  // Listen 'submit' to call my custom submit function.
  $('form').on('submit', submitForm);
  // On 'click' event call the function toggleSuccess to add or remove class.
  $('.popup-container .close').on('click', toggleSuccess);

  /* Add or remove class */
  function toggleSuccess() {
    $('.popup-container').toggleClass('active');
  }
  /***** MODAL BOX END *****/
});
