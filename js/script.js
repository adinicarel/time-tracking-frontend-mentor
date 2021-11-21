addEventListener('load', function(event){
    async function getTimeframes() {
        let url = '../data.json';
        try {
            let res = await fetch(url);
            return await res.json();
        } catch (error) {
            console.error('Error: ', error);
        } 
    }

    renderWeeklyFrames();

    function quitWhites(string) {
        return string.replace(/\s+/g,'');
    }


    async function renderDailyFrames() {
        let timeframes = await getTimeframes();
        let html = '';
        
        timeframes.map(item => {
            let title = item.title;
            let today = item.timeframes.daily.current;
            let yesterday = item.timeframes.daily.previous;
            let id = item.title;
            let htmlSegment = 
            `<article id="${id.indexOf(' ')!==-1 ? quitWhites(id) : id}">
                <div class="over-bg"></div>
                <div class="card">
                    <div>
                        <span>${title}</span>
                        <span><img src="/images/icon-ellipsis.svg" alt="dots-icon"></span>
                    </div>
                    <div class="hours-current">${today}hrs</div>
                    <div class="hours-prev">Yesterday - ${yesterday}hrs</div>
                </div>
            </article>`;
            html += htmlSegment;
        });

        let container = document.getElementById('cards-section'); 
        container.innerHTML = html; 
    }
        

    async function renderWeeklyFrames() {
        let timeframes = await getTimeframes();
        let html = '';
        
        timeframes.map(item => {
            let title = item.title;
            let currentWeek = item.timeframes.weekly.current;
            let previousWeek = item.timeframes.weekly.previous;
            let id = item.title;
            let htmlSegment = 
            `<article id="${id.indexOf(' ')!==-1 ? quitWhites(id) : id}">
                <div class="over-bg"></div>
                <div class="card">
                    <div>
                        <span>${title}</span>
                        <span style="line-height:14px"><img src="/images/icon-ellipsis.svg" alt="dots-icon"></span>
                    </div>
                    <div class="hours-current">${currentWeek}hrs</div>
                    <div class="hours-prev">Last week - ${previousWeek}hrs</div>
                </div>
            </article>`;
            html += htmlSegment;
        });

        let container = document.getElementById('cards-section'); 
        container.innerHTML = html; 
    }

    async function renderMonthlyFrames() {
        let timeframes = await getTimeframes();
        let html = '';
        
        timeframes.map(item => {
            let title = item.title;
            let currentMonth = item.timeframes.monthly.current;
            let previousMonth = item.timeframes.monthly.previous;
            let id = item.title;
            let htmlSegment = 
            `<article id="${id.indexOf(' ')!==-1 ? quitWhites(id) : id}">
                <div class="over-bg"></div>
                <div class="card">
                    <div>
                        <span>${title}</span>
                        <span><img src="/images/icon-ellipsis.svg" alt="dots-icon"></span>
                    </div>
                    <div class="hours-current">${currentMonth}hrs</div>
                    <div class="hours-prev">Last month - ${previousMonth}hrs</div>
                </div>
            </article>`;
            html += htmlSegment;
        });

        let container = document.getElementById('cards-section'); 
        container.innerHTML = html; 
    }

    document.getElementById('showDaily').addEventListener('click', function(event){
        event.preventDefault();
        renderDailyFrames();
    });

    document.getElementById('showWeekly').addEventListener('click', function(event){
        event.preventDefault();
        renderWeeklyFrames();
    });

    document.getElementById('showMonthly').addEventListener('click', function(event){
        event.preventDefault();
        renderMonthlyFrames();
    });
    
});