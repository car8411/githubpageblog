 document.getElementById('blogForm').addEventListener('submit', function(e) {
            e.preventDefault();

            const title = document.getElementById('title').value;
            const content = document.getElementById('content').value;

            // 저장하거나 처리하는 로직 (예: 데이터베이스 또는 파일에 저장)
            alert(`Blog post titled "${title}" published!`);

            // 초기화
            document.getElementById('blogForm').reset();
        });
