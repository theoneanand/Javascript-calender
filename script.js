let monthSelector = document.getElementById('monthSelector');
let yearSelector = document.getElementById('yearSelector');
let nextBtn = document.getElementById('nextBtn');
let prevBtn = document.getElementById('prevBtn');
let weekDays = document.getElementById('weekdays');

let dates = document.getElementById('dates')

let today = new Date();

let year = today.getFullYear();
let month = today.getMonth();
console.log('month = ', month)

let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

months.forEach(function(el, index){
    let option = document.createElement('option')
    option.setAttribute('value', index);
    if(index == month) option.setAttribute('selected', 'selected');
    option.innerText = el;
    monthSelector.appendChild(option)
});
for(let i = 1700; i<= 4000; i++){
    let option = document.createElement('option')
    option.setAttribute('value', i);
    if(i == year) option.setAttribute('selected', 'selected');
    option.innerText = i;
    yearSelector.appendChild(option)
}

monthSelector.addEventListener('change', function(){
    month = parseInt(monthSelector.value),
    loadCalender()
})
yearSelector.addEventListener('change', function(){
    year = parseInt(yearSelector.value),
    loadCalender()
})
nextBtn.addEventListener('click', function(){
    let curentMonth = parseInt(monthSelector.value);
    let curentYear = parseInt(yearSelector.value);
    let date = new Date(curentYear, curentMonth+1, 1) 
    month = date.getMonth()
    year = date.getFullYear();
    yearSelector.value = year,
    monthSelector.value = month,    
    loadCalender();
})
prevBtn.addEventListener('click', function(){
    let curentMonth = parseInt(monthSelector.value);
    let curentYear = parseInt(yearSelector.value);

    let date = new Date(curentYear, curentMonth - 1, 1);
    console.log(date);
    month = date.getMonth()
    year = date.getFullYear();
    yearSelector.value = year,
    monthSelector.value = month,    
    loadCalender();
})




loadCalender();
function loadCalender(){
    // console.log(month, year)
    dates.innerHTML = '';
    var d = new Date(year, month, 1);
    let day = d.toString().split(' ')[0];
    let paddingDaystart = days.indexOf(day);    
    var lastdate = new Date(year, month+1, 0);

    var lastday = lastdate.getDate();
    let paddingDayEnd = days.indexOf(lastdate.toString().split(' ')[0]);
    let pd = 0;
    while(pd <= paddingDaystart - 1){
        let dayel = document.createElement('span')        
        dayel.setAttribute('class', 'paddingdaystart') 
        dates.append(dayel);
        pd++;
    }
    for(let i = 1; i <= lastday; i++){
        let dayel = document.createElement('div')        
        dayel.innerText= i;
        dates.append(dayel);
    }
    //console.log(paddingDayEnd)
    let pde = paddingDayEnd + 1;
    while(pde < 7){
        let dayel = document.createElement('span');       
        dayel.setAttribute('class', 'paddingdayend') 
        dates.append(dayel);
        pde++;
    }
}