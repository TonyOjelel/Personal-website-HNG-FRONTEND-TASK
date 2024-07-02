function updateTime() {
    const now = new Date();
    document.getElementById('utc-time').textContent = now.toISOString().replace('T', ' ').split('.')[0] + ' UTC';
    document.getElementById('current-day').textContent = now.toLocaleDateString('en-US', { weekday: 'long' });
  }
  
  updateTime();
  setInterval(updateTime, 1000); // Update time every second
  