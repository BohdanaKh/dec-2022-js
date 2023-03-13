const json = localStorage.getItem('sessions');
const sessions = json ? JSON.parse(json) : [];

for (const session of sessions) {
    const wrapper = document.createElement('div');
    const date = document.createElement('div');
    const time = document.createElement('div');

    wrapper.classList.add('wrapper', 'item');

    const dateObj = format(session);

    date.innerText = `Date: ${dateObj.DD}/${dateObj.MM}/${dateObj.YYYY}`;
    time.innerText = `Time: ${dateObj.hh}:${dateObj.mm}:${dateObj.ss}`;

    wrapper.append(date, time);
    document.body.appendChild(wrapper);
}
    function format(dateString) {
        const qwe = new Date(dateString);

        const YYYY = qwe.getFullYear().toString();
        const MM = (qwe.getMonth() + 1).toString();
        const DD = qwe.getDate().toString();
        const hh = qwe.getHours().toString();
        const mm = qwe.getMinutes().toString();
        const ss = qwe.getSeconds().toString();

        return {
            YYYY: YYYY,
            MM: MM.length < 2 ? `0${MM}` : MM,
            DD: DD.length < 2 ? `0${DD}` : DD,
            hh: hh.length < 2 ? `0${hh}` : hh,
            mm: mm.length < 2 ? `0${mm}` : mm,
            ss: ss.length < 2 ? `0${ss}` : ss,
        }
    }