function showContent(contentId) {
    document.querySelectorAll('.content-item').forEach(function(content) {
        content.classList.remove('active');
    });
    document.querySelectorAll('.sidebar ul li').forEach(function(item) {
        item.classList.remove('active');
    });

    document.getElementById(contentId).classList.add('active');

    document.querySelector(`.sidebar ul li[onclick="showContent('${contentId}')"]`).classList.add('active');
} 