// פונקציה זו משנה את הרקע ומציגה או מסתירה תוכן על סמך כותרת נתונה (ללא וידאו/טריילר)
function changeBG(bg, title) {
    // משנה את תמונת הרקע של הגוף
    document.body.style.cssText = `background: url("${bg}") center/cover;`; 
    
    // עובר על כל אלמנטיי ה-content ומציג רק את זה שתואם לכותרת שנבחרה
    document.querySelectorAll('.content').forEach(content => {
        content.classList.toggle('active', content.classList.contains(title));
    });
}

// הגדרת פונקצייה להוספת סרט לרשימה האישית באמצעות Local Storage
function addToMyList(title) { 
    const myList = JSON.parse(localStorage.getItem('myList')) || []; 
    
    if (!myList.includes(title)) { // בדיקה האם הכותרת אינה כבר קיימת ברשימה
        myList.push(title); // הוספת הכותרת לרשימה אם היא עדיין לא קיימת
        localStorage.setItem('myList', JSON.stringify(myList)); 
    }
}

$(document).ready(function () {
    // בדיקה האם המשתמש כבר ביקר באתר בעבר
    if (!localStorage.getItem('visited_site')) {
        alert('ברוכים הבאים לפאקניג אתר שלי, בבקשה לפתוח אותו על 150% זום כי אני נכה');
        localStorage.setItem('visited_site', 'true');
    }

    // הפעלת הקרוסלה
    $('.carousel').carousel();
});