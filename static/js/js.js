document.addEventListener("scroll", () => {
    const textBlock = document.querySelector(".text-block");
    const scrollOffset = window.scrollY;
    const maxScroll = 200;

    const translateY = Math.min(scrollOffset, maxScroll) / maxScroll * 400; 
    const opacity = 1 - Math.min(scrollOffset, maxScroll) / maxScroll;
    const scale = 1 - Math.min(scrollOffset, maxScroll) / maxScroll * 0.2;


    textBlock.style.transform = `translateY(${translateY}px) scale(${scale})`;
    textBlock.style.opacity = opacity;
});

document.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;

    const svg1 = document.querySelectorAll('.parallax-svg')[0];
    const svg2 = document.querySelectorAll('.parallax-svg')[1];


    svg1.style.transform = `translateY(${scrollPosition * 0.2}px)`;
    svg2.style.transform = `translateY(${scrollPosition * 0.4}px)`; 
});



document.querySelector('.cards-container').addEventListener('mousemove', e => {
    var div = e.target.closest('.cards-container')
    var { x, y } = div.getBoundingClientRect()
    div.style.setProperty('--mousex', e.clientX - x + 'px')
    div.style.setProperty('--mousey', e.clientY - y + 'px')
})

function checkVisibility() {
    const elements = document.querySelectorAll('.animate-fade-in, .card');
    
    elements.forEach(function(element) {
      const rect = element.getBoundingClientRect();
      
  
      if (rect.top < window.innerHeight && rect.bottom >= 0) {
        element.classList.add('visible'); 
      }
    });
  }
  

  window.addEventListener('scroll', checkVisibility);
  

  window.addEventListener('load', checkVisibility);

  checkVisibility();
  



let maxNotifications = 4; 
function copyToClipboard(text) {
  var textArea = document.createElement('textarea');
  textArea.value = text;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand('copy');
  document.body.removeChild(textArea);

  showNotification('Скопировано: ' + text);
}

function showNotification(message) {
  const container = document.getElementById('notification-container');
  if (container.children.length >= maxNotifications) return;
  const notification = document.createElement('div');
  notification.classList.add('notification');
  notification.innerHTML = `<p>${message}</p>`;

  container.prepend(notification);

  setTimeout(function() {
    notification.classList.add('show');
  }, 10);


  setTimeout(function() {
    notification.classList.add('hide');
    setTimeout(() => notification.remove(), 300); 
  }, 3000);
}
