document.addEventListener('DOMContentLoaded', () => {
  const line1 = document.getElementById('line1');
  const line2 = document.getElementById('line2');
  const cvButton = document.querySelector('.hero-content button');

  const text1 = "Hello, I am Niloufar.";
  const text2 = "A full-stack web developer.";

  let i = 0;
  let j = 0;

  function typeFirstSentence() {
      if (i < text1.length) {
          line1.innerHTML += text1.charAt(i);
          i++;
          setTimeout(typeFirstSentence, 50); 
      } else {
          setTimeout(() => {
              line2.style.display = 'block'; 
              typeSecondSentence();
          }, 500); 
      }
  }

  function typeSecondSentence() {
      if (j < text2.length) {
          line2.innerHTML += text2.charAt(j);
          j++;
          setTimeout(typeSecondSentence, 50); 
      } else {
          setTimeout(() => {
              cvButton.style.opacity = '1'; 
          }, 1500);
      }
  }

  typeFirstSentence();
});
