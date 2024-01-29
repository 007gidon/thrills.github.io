// פונקציית הטריילר 
function toggleVideo() {
    const trailer = document.querySelector('.trailer');//בוחר את הקלאס טריילר
    trailer.classList.toggle('active'); //ממתג את הקלאס 'פעיל' עבור הטריילר
    document.querySelector('.video').pause(); // עוצר את הסרטון
}

//  פונקציה זו משנה את הרקע, מעדכנת מקור וידאו ומציגה או מסתירה תוכן על סמך כותרת נתונה
function changeBG(bg, title, videoSrc) {
    const videoElement = document.querySelector('.video');//בוחר את הקלאס וידאו
    const trailer = document.querySelector('.trailer');// בוחר את הקלאס טריילר

    videoElement.pause(); // אלמנט שעוצר את הסרטון
    document.body.style.cssText = `background: url("${bg}") center/cover;`; // משנה את הרקע, את תמונת הרקע
    videoElement.src = videoSrc; // מעדכן את המקור של הסרטון

    if (!trailer.classList.contains('active')) {// אם הטריילר לא פעיל
        videoElement.pause(); // Pause the video element if the trailer is not active
    }

    //is a loop that iterates over all HTML elements with the class "content" on the page and toggles the class "active" on each so active will be on each one specifically
    document.querySelectorAll('.content').forEach(content => {// השיטה בוחרת את כל רכיבי הדף עם הקלאס"תוכן" ומחזירה אוסף של אלמנטים המכונה NODELIST
        content.classList.toggle('active', content.classList.contains(title));// שורה זו משנה את נוכחות המחלקה "פעילה" עבור כל קונטנט אלמנט בהתבסס על האם רשימת הקלאס שלה מכילה את הכותרת שצוינה.
    });
}

// This function adds a title to the user's list stored in local storage
function addToMyList(title) {
    const myList = JSON.parse(localStorage.getItem('myList')) || []; // Get the current list from local storage or create a new empty array
    if (!myList.includes(title)) {
        myList.push(title); // Add the title to the list if it's not already present
        localStorage.setItem('myList', JSON.stringify(myList)); // Save the updated list to local storage
    }
}

