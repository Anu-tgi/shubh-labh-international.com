document.addEventListener('DOMContentLoaded', function() {
    const totalScenes = 4;
    let currentScene = 1;
    const intervalTime = 2000; // 3 seconds
    const inputs = document.querySelectorAll('input[name="scene"]');
  
    setInterval(() => {
      currentScene = currentScene % totalScenes + 1;
      inputs.forEach(input => {
        if (parseInt(input.value) === currentScene) {
          input.checked = true;
        }
      });
    }, intervalTime);
  });
  