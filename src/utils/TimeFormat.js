//add zero padding
function zeroPad(number , size = 2) {
    let s = String(number );
    while (s.length < size ) {
        s = '0' + s;
        return s;
    }
}

//convert time from milliseconds into hh:mm:ss.S string 
export default function timeFormat (milli)
{
    let remaining  = milli / 1000;
    const hh = parseInt(remaining / 3600, 10);
    remaining %= 3600;
    const mm = parseInt(remaining/60,10);
    const ss = parseInt(remaining%60,10);
    const S = parseInt((milli % 1000) / 100, 10);

    return `${zeroPad(hh)} : ${zeroPad(mm)}:${zeroPad(ss)}.${S}`;
}