
window.addEventListener('DOMContentLoaded', () => {
  reorderKeywords(defaultData)

  renderContent(defaultData);
});
window.addEventListener('scroll', () => {
  const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrolled = (scrollTop / scrollHeight) * 100;

  document.getElementById('scrollPercent').textContent = Math.round(scrolled) + '%';
});

document.getElementById('jsonFileInput').addEventListener('change', function (event) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function(e) {
    try {
      const data = JSON.parse(e.target.result);
      renderContent(data);
    } catch (err) {
      alert('Invalid JSON file!');
    }
  };
  reader.readAsText(file);
});

function reorderKeywords(obj) {
  obj.forEach(topic => {
    topic.questions.forEach(q => {
      q.keyWords.sort((a, b) => {
        const idxA = q.textResponse.indexOf(a);
        const idxB = q.textResponse.indexOf(b);

        // Si un mot est absent, on lui donne un index "infini"
        const safeA = idxA === -1 ? Number.MAX_SAFE_INTEGER : idxA;
        const safeB = idxB === -1 ? Number.MAX_SAFE_INTEGER : idxB;

        return safeA - safeB;
      });
    });
  });
}
function renderContent(topics) {
  const content = document.getElementById('content');
  content.innerHTML = ''; // Clear previous content

  topics.forEach(topic => {
    // Create topic header
    const topicDiv = document.createElement('div');
    topicDiv.className = 'topic';
    topicDiv.textContent = topic.topic;
    content.appendChild(topicDiv);

    // Create questions
    topic.questions.forEach(q => {
      const questionDiv = document.createElement('div');
      questionDiv.className = 'question';

      const headerDiv = document.createElement('div');
      headerDiv.className = 'question-header';

      const questionText = document.createElement('span');
      questionText.textContent = q.question;

      const infoButton = document.createElement('button');
      infoButton.textContent = 'Info';
      infoButton.onclick = () => alert(q.textResponse);

      headerDiv.appendChild(questionText);
      headerDiv.appendChild(infoButton);
      questionDiv.appendChild(headerDiv);

      // Add checkboxes
      const keywordsDiv = document.createElement('div');
      keywordsDiv.className = 'keywords';
      q.keyWords.forEach(word => {
        const label = document.createElement('label');
        label.className = 'keyword';
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        label.appendChild(checkbox);
        label.appendChild(document.createTextNode(word));
        keywordsDiv.appendChild(label);
        keywordsDiv.appendChild( document.createElement('br'));
      });
      questionDiv.appendChild(keywordsDiv);

      content.appendChild(questionDiv);
    });
  });
}
