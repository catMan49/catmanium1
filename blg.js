function bold(){
    document.execCommand('bold');
}
function italic(){
    document.execCommand('italic');
}
function underLine(){
    document.execCommand('underLine');
}


function kakunin(){
    obj = document.test.linkselect;
  
    index = obj.selectedIndex;
    if (index != 0){ //中身が空じゃない時
      href = obj.options[index].value;
      location.href = href;
    }
  }


function sample() {
    var browser = document.fm.s.value;
    location.href = browser;
}