// Hàm hỏi đáp
function askQuestion() {
    let answer = prompt("Điều gì khiến em yêu tôi?");
    if (answer) {
        alert("Cảm ơn em vì câu trả lời đáng yêu đó!");
    }
}

// Hàm bắt đầu trò chơi đoán tình yêu
function startGame() {
    let guess = prompt("Em đoán xem tôi yêu em nhường nào?");
    if (guess) {
        alert("Cảm ơn em vì đã tham gia trò chơi nhỏ này!");
    }
}

// Hàm hiện món quà bất ngờ
function showGift() {
    alert("Món quà bất ngờ: Anh yêu em rất nhiều, hơn cả những gì em tưởng tượng!");
}

// Hàm tỏ tình và xác nhận mối quan hệ
function showProposal() {
    let confirmProposal = confirm("Anh muốn tiến tới hôn nhân với em. Em có đồng ý không?");
    if (confirmProposal) {
        alert("Anh rất vui khi nghe em đồng ý. Chúng ta sẽ cùng nhau đi hết cuộc đời này!");
    } else {
        alert("Anh sẽ chờ đến khi em sẵn sàng. Anh yêu em rất nhiều!");
    }
}

// Đảm bảo nhạc nền tự động bật
window.onload = () => {
    const music = document.getElementById('bg-music');
    music.play();
};
