//  JavaScript to update time and day
   
        function updateTime() {
            const now = new Date();
            document.getElementById('utc-time').textContent = now.toUTCString();
            document.getElementById('current-day').textContent = now.toLocaleDateString('en-US', { weekday: 'long' });
        }
        updateTime();
        setInterval(updateTime, 1000); // Update time every second