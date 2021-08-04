function assignDateTime(){
    let date = new Date();
    let seconds = date.getSeconds().toString().length == 1 ? '0' + date.getSeconds() : date.getSeconds();
    let minutes = date.getMinutes().toString().length == 1 ? '0' + date.getMinutes() : date.getMinutes();
    let hours = date.getHours().toString().length == 1 ? '0' + date.getHours() : date.getHours(); 
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date. getFullYear();
    let daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let dayOfWeek = daysOfWeek[date.getDay()];

    document.getElementById('date').innerText = month + '/' + day + '/' + year;
    document.getElementById('dayOfWeek').innerText = dayOfWeek;
    document.getElementById('time').innerText = hours + ':' + minutes + ':' + seconds;
}
assignDateTime();
setInterval(assignDateTime, 1000);