var tablinks = document.getElementsByClassName('tab-links');
var tabcontents = document.getElementsByClassName('tab-contents');

function opentab(tabname, event) {
    // remove active-link for each tablink
    for(tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    // remove active-tab for each tabcontent
    for(tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }

    // display active link&tab
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add('active-tab');
}