/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// Fake data taken from initial-tweets.json
$(document).ready(function() {
  
const renderTweets = function (tweets) {
  // loops through tweets
  // calls createTweetElement for each tweet
  // takes return value and appends it to the tweets container
  for (let tweet of tweets) {
    const element = createTweetElement(tweet);
    $('#tweets').prepend(element);
  }
};




const createTweetElement = function(tweet) {
  let $tweet = /* Your code for creating the tweet element */
  // ...
  `<article class="tweet">
          <header>
            <div class="image-username">
              <img src="${tweet.user.avatars}">
              <span class="author">${tweet.user.name}</span>
            </div>
            <span class="handle">${tweet.user.handle}</span>
          </header>
          <p class="tweet-status">${tweet.content.text}</p>
          <footer>
            <span>${tweet.created_at}</span>
            <div class="feed-icons">
              <i class="fas fa-flag"></i>
              <i class="fas fa-retweet"></i>
              <i class="fas fa-heart"></i>
            </div>
          </footer>
        </article>`;
  return $tweet;
};

const loadTweets = function () {
  $.ajax('/tweets', {
    dataType: 'json', 
    method: 'GET', 
  })
    .then((result) => {
      renderTweets(result);
    });
};

loadTweets();

$("form").on("submit", function (event) {
  event.preventDefault();
  let url = '/tweets/';
  $.post(url, $(this).serialize());
 });
});