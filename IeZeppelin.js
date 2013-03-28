/* IeZeppelin | https://github.com/DavidHosanna/IeZeppelin
*/
window.onload = function () {
    var IZ = document.getElementById('IZ');
        IZ.onsubmit = function () {
                var w = window.open('about:blank', 'Popup_Window', 'toolbar=0,scrollbars=0,location=0,statusbar=0,menubar=0,resizable=0,width=450,height=320,left = 350,top = 200');
                this.target = 'Popup_Window';
        };
}
