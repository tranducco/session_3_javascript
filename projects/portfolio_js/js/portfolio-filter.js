// ===== BƯỚC 1: Chọn elements =====
// querySelectorAll = chọn TẤT CẢ phần tử khớp selector
const filterButtons = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-item');

// In ra console để kiểm tra đã chọn đúng chưa
console.log('Filter buttons:', filterButtons.length);  // Phải = 4
console.log('Portfolio items:', portfolioItems.length); // Phải = 6

// ===== BƯỚC 2: Thêm click event cho mỗi button =====
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        console.log('Clicked:', button.dataset.filter); // Debug

        // BƯỚC 3: Xóa active class khỏi TẤT CẢ buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));

        // BƯỚC 4: Thêm active class cho button ĐƯỢC CLICK
        button.classList.add('active');

        // BƯỚC 5: Lấy giá trị filter
        const filterValue = button.dataset.filter;
        // Ví dụ: button có data-filter="web" → filterValue = "web"

        // BƯỚC 6: Lọc portfolio items
        portfolioItems.forEach(item => {
            const itemCategory = item.dataset.category;

            if (filterValue === 'all' || filterValue === itemCategory) {
                // Hiện item — thêm class 'show' cho animation
                item.classList.remove('hide');
                item.classList.add('show');
            } else {
                // Ẩn item — thêm class 'hide' cho animation
                item.classList.remove('show');
                item.classList.add('hide');
            }
        });
    });
});