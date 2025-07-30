document.addEventListener('DOMContentLoaded', async function() {
  const greetButton = document.getElementById('greetButton');
  const messageInput = document.getElementById('messageInput');
  const resultDiv = document.getElementById('result');

  let model;

  // Load the NSFW.js model
  try {
    resultDiv.textContent = 'Loading NSFW.js model...';
    model = await nsfwjs.load();
    resultDiv.textContent = 'Model loaded successfully.';
  } catch (error) {
    resultDiv.textContent = `Error loading model: ${error.message}`;
    console.error('Error loading NSFW.js model:', error);
    return;
  }

  greetButton.addEventListener('click', function() {
    chrome.runtime.sendMessage({ action: "getInstallDate" }, function(response) {
      if (response && response.installDate) {
        alert(`Hello from SafeGuard Extension! Installed on: ${new Date(response.installDate).toLocaleString()}`);
      } else {
        alert('Hello from SafeGuard Extension! Install date not found.');
      }
    });
  });

  // Placeholder for content analysis function
  async function analyzeContent(text) {
    if (!model) {
      resultDiv.textContent = 'Model not loaded.';
      return;
    }
    // In a real scenario, you'd analyze images/videos. For text, this is a placeholder.
    // You might integrate a text-based content filter here.
    resultDiv.textContent = `Analyzing: "${text}"`;
    // Simulate a detection for demonstration
    if (text.toLowerCase().includes('malicious') || text.toLowerCase().includes('harmful')) {
      resultDiv.textContent = 'Potential harmful content detected!';
      resultDiv.style.color = 'red';
    } else {
      resultDiv.textContent = 'Content seems safe.';
      resultDiv.style.color = 'green';
    }
  }

  // Add an event listener for a new analyze button or input change
  // For now, let's just add a new button in popup.html and link it here
  const analyzeButton = document.getElementById('analyzeButton');
  if (analyzeButton) {
    analyzeButton.addEventListener('click', async () => {
      const text = messageInput.value;
      if (text) {
        await analyzeContent(text);
      } else {
        resultDiv.textContent = 'Please enter some text to analyze.';
        resultDiv.style.color = 'orange';
      }
    });
  }
});