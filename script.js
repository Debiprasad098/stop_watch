let display_time=document.querySelector("#display_time");
let [sec,min,hour]=[0,0,0];
let timer=1;

function stop_watch()
{
    sec++;
    if(sec==60){
        sec=0;
        min++;
        if(min==60)
            {
                min=0;
                hour++;
            }
    }
    let ho=hour<10?"0"+hour:hour;
    let mi=min<10?"0"+min:min;
    let se=sec<10?"0"+sec:sec;
    display_time.innerHTML=`${ho}:${mi}:${se}`;
}
function watch_start()
{
    if(timer!==null){
        clearInterval(timer);
    }
    timer=setInterval(stop_watch, 1000);
}
console.log(timer)
function watchstop()
{
    clearInterval(timer);

}
function resetwatch()
{
    clearInterval(timer);
    [sec,min,hour]=[0,0,0];
    display_time.innerHTML="00:00:00"

}