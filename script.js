document.addEventListener('DOMContentLoaded', function() {
    const features = [
        "Responsive Design",
        "Clean Code",
        "Easy to Deploy",
        "Modern Look"
    ];
    
    const featuresList = document.getElementById('features-list');
    
    features.forEach(feature => {
        const li = document.createElement('li');
        li.textContent = feature;
        featuresList.appendChild(li);
    });
});