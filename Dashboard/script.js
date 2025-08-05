document.addEventListener('DOMContentLoaded', function () {
    const toggleThemeBtn = document.getElementById('toggleTheme');
    const collapseSidebarBtn = document.getElementById('collapseSidebar');
    const sidebar = document.getElementById('sidebar');
    const body = document.body;
    
    // Theme toggle

    body.classList.remove('dark-mode');
    if (localStorage.getItem('theme') === 'dark') body.classList.add('dark-mode');
    
    toggleThemeBtn?.addEventListener('click', () => {
      body.classList.toggle('dark-mode');
      localStorage.setItem('theme', body.classList.contains('dark-mode') ? 'dark' : 'light');
    });
    
    // Sidebar collapse
    collapseSidebarBtn?.addEventListener('click', () => sidebar.classList.toggle('collapsed'));
    
    // Dashboard Charts
    const lineCtx = document.getElementById('lineChart');
    if (lineCtx) {
        new Chart(lineCtx, {
            type: 'line',
            data: {
                labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
                datasets: [{
                    label: "Sales",
                    data: [12000, 15000, 14000, 18000, 19000, 22000],
                    borderColor: 'blue',
                    tension: 0.1,
                    fill: false
                }]
            },
            options: { 
                responsive: true,
                animation: {
                duration: 1500,
                easing: 'easeOutBounce'
              } }
        });
        
    }

    const pieCtx = document.getElementById('pieChart');
    if (pieCtx) {
        new Chart(pieCtx, {
            type: 'pie',
            data: {
                labels: ["Product A", "Product B", "Product C","Product D"],
                datasets: [{
                    data: [300, 50, 100,120],
                    backgroundColor: [
                        '#007bff', '#28a745', '#ffc107', '#dc3545'
                    ]
                }]
            },
            options: { 
                responsive: true,
                animation: {
                animateScale: true,
                animateRotate: true,
                duration: 1500      
              } }
        });
    }

    // Detail Page Charts
    const barCtx = document.getElementById('barChart');
    if (barCtx) {
        new Chart(barCtx, {
            type: 'bar',
            data: {
                labels: ["January", "February", "March", "April", "May", "June"],
                datasets: [{
                    label: 'Revenue ($)',
                    data: [12000, 15000, 14000, 20000, 22000, 25000],
                    backgroundColor: 'rgba(0, 0, 255, 0.7)'
                }]
            },
            options: { 
                responsive: true,
                animation: {
                    duration: 1500,  // Animation duration in milliseconds (1 second)
                    easing: 'easeOutBounce'
                }
             }
        });
    }

    const detailedLineCtx = document.getElementById('detailedLineChart');
    if (detailedLineCtx) {
        new Chart(detailedLineCtx, {
            type: 'line',
            data: {
                labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
                datasets: [{
                    label: "New Users",
                    data: [300, 450, 400, 600, 700, 850],
                    borderColor: '#198754',
                    tension: 0.1,
                    fill: false
                }]
            },
            options: { 
                responsive: true,
                animation: {
                duration: 1500,
                easing: 'easeOutBounce'
              } }
        });
    }

    // Scroll Animations
    const faders = document.querySelectorAll('.fade-in');
    window.addEventListener('scroll', () => {
        const triggerBottom = window.innerHeight / 5 * 4;
        faders.forEach(el => {
            const boxTop = el.getBoundingClientRect().top;
            if (boxTop < triggerBottom) {
                el.classList.add('visible');
            }
        });
    });

    // Bootstrap Tooltips
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });

    // Flatpickr Calendar
    if (document.getElementById('calendar')) {
        flatpickr("#calendar", { dateFormat: "Y-m-d" , inline:true});
    }

   // Counter Animations
   document.querySelectorAll('.counter').forEach(counter => {
    const target = +counter.dataset.target, speed = 100;
    (function update() {
      const current = +counter.innerText.replace(/,/g, '');
      if (current < target) {
        counter.innerText = Math.ceil(current + target / speed).toLocaleString();
        setTimeout(update, 10);
      } else {
        counter.innerText = target.toLocaleString();
      }
    })();
  });

  // Table search and download
  const searchInput = document.getElementById('searchInput');
  if (searchInput) {
      searchInput.addEventListener('keyup', function () {
          const filter = searchInput.value.toLowerCase();
          const rows = document.querySelectorAll('#dataTable tbody tr');
          rows.forEach(row => {
              row.style.display = [...row.children].some(td => td.textContent.toLowerCase().includes(filter)) ? '' : 'none';
          });
      });
  }
  
});


//   to do list 

document.getElementById('addTaskBtn').addEventListener('click', function() {
    const task = document.getElementById('taskInput').value.trim();
    
    if (task) {
      const li = document.createElement('li');
      li.innerHTML = `${task} <button onclick="this.parentElement.remove()">&times;</button>`;
      document.getElementById('taskList').appendChild(li);
      document.getElementById('taskInput').value = '';
    }
  });
  


