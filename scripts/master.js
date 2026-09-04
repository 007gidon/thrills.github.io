// פונקציית הטריילר 
function toggleVideo() {
    const trailer = document.querySelector('.trailer');//בוחר את הקלאס טריילר
    trailer.classList.toggle('active'); //ממתג את הקלאס 'פעיל' עבור הטריילר
    document.querySelector('.video').pause(); // עוצר את הסרטון בהתחלה
}

//  פונקציה זו משנה את הרקע, מעדכנת מקור וידאו ומציגה או מסתירה תוכן על סמך כותרת נתונה
function changeBG(bg, title, videoSrc) {
    const videoElement = document.querySelector('.video');//בוחר את הקלאס וידאו
    const trailer = document.querySelector('.trailer');// בוחר את הקלאס טריילר

    videoElement.pause(); // אלמנט שעוצר את הסרטון
    document.body.style.cssText = `background: url("${bg}") center/cover;`; // משנה את הרקע, את תמונת הרקע
    videoElement.src = videoSrc; // מעדכן את המקור של הסרטון

    if (!trailer.classList.contains('active')) {// בוחר את טריילר אם  הוא לא פעיל
        videoElement.pause(); // עוצר את הסרטון אם הוא לא פעיל
    }

    
    document.querySelectorAll('.content').forEach(content => {
        // בוחרת את הקלאס "CONTENT"
        content.classList.toggle('active', content.classList.contains(title));
        // שורה זו משנה את נוכחות המחלקה "פעילה" עבור כל קונטנט אלמנט בהתבסס על האם רשימת הקלאס שלה מכילה את הכותרת שצוינה.
    });
}

//  הגדרת פונקצייה בשם מייליסט שמקבלת פרמטר בשם טייטל שכבר נמצאת למעלה
function addToMyList(title) { 
    // Clicking "Add to My List" stores the movie title "Martyrs" in the browser's local storage under the key `'myList'`.
    const myList = JSON.parse(localStorage.getItem('myList')) || []; 
    // alert(String(myList));
    if (!myList.includes(title)) { // בדיקה האם הכותרת אינה כבר קיימת ברשימה
        myList.push(title); // הוספת הכותרת לרשימה אם היא עדיין לא קיימת
        localStorage.setItem('myList', JSON.stringify(myList)); 
        // JSONשמירת הרשימה המעודכנת באחסון המקומי לאחר המרה למחרוזת 
    }
}



$(document).ready(function () {
    // בדיקה האם המשתמש כבר ביקר באתר בעבר
    if (!localStorage.getItem('visited_site')) {
        alert('ברוכים הבאים לאתר הסרטים שלנו!'); // הודעת ה-Alert שרצית
        localStorage.setItem('visited_site', 'true'); // סימון שהמשתמש כבר ביקרה באתר
    }

    // שאר הקוד שלך...
    $('.carousel').carousel();
});
