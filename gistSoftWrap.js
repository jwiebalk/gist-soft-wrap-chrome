function changeContent(){
    return function() {
var element = document.getElementsByClassName('form-select select-sm js-code-wrap-mode');

element[0].options.selectedIndex = 1;

element[0].form[11].nextElementSibling.className += ' CodeMirror-wrap';
}
}


setTimeout(changeContent(), 100)
