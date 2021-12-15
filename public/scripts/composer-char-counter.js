$(document).ready(function() {
  // --- our code goes here ---
  console.log("hello everyone");
  $('#tweet-text').on('input', function() {
    let stringFromElem = this.value;
    const stringLen = stringFromElem.length;
    const finalCharCount = 140 - stringLen;
    $('.counter').html(finalCharCount);

    if (finalCharCount < 0) {
      $('.counter').addClass('red');
    } else {
      $('.counter').removeClass('red');
    }
  });
}); 
