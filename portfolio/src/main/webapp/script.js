// Copyright 2020 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * Adds a random word to live by to the page.
 */
function addWordsToLiveBy() {
  const wordsToLiveBy =
      ['Each one, teach one!', 'Shoot for the moon. Even if you miss, you will land among the stars!',
       'When you want to succeed as bad as you want to breathe, then you will be successful.',
     'Ensure your grind is congruent to your dreams.', 'Do not make a habit of choosing what feels good over what is actually good for you.',
     'Be phenomenal or be forgotten.', 'Do not aspire to make a living, aspire to make a difference.', 'Hard work WORKS!',
     'The secret to getting ahead is getting started.', 'Your level of success is determined by the level of your discipline and perseverance.',
     'With discipline, you are likely to get it done.', 'Will it be easy? NOPE! Worth it? ABSOLUTELY!',
     'A new day, A new opportunity to be world class!', 'Never compromise on who you are.',
     'Winners are not people who never fail but people who never quit!', 'You are born with a capacity to achieve greatness.'];

  // Pick a random phrase from wordsToLiveBy .
  const word = wordsToLiveBy[Math.floor(Math.random() * wordsToLiveBy.length)];

  // Add it to the page.
  const wordContainer = document.getElementById('word-container');
  wordContainer.innerText = word;
}
