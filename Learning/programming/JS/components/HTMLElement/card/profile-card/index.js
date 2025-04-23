document.addEventListener('DOMContentLoaded', function() {
  // Wait a brief moment to ensure all custom elements are registered
  setTimeout(function() {
    const container = document.getElementById('cards-container');
    
    if (!window.cardsData) {
      console.error('cardsData is not defined');
      return;
    }
    
    window.cardsData.forEach(function(card) {
      if (card.type === 'profile') {
        const profileCard = document.createElement('profile-card');
        profileCard.setAttribute('config', JSON.stringify(card));
        container.appendChild(profileCard);
      }
    });
  }, 100);
});