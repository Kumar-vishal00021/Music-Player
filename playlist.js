let playlistInputEl=document.getElementById('playlistInput');
let playlistSubmitEl=document.getElementById('playlistSubmit');

let playListEl=document.getElementById('showPlayList');

playlistSubmitEl.addEventListener('click',createPlayList);
function createPlayList(){
  let playListValue=playlistInputEl.value;
  if(playListValue==''){
    return alert ('Please Enter Playlist Name!!');
  }
  let list=document.createElement('button');
  list.style="width:90%;display:block;margin:5px; background-color:#0D81BC; color:#fff;text-align: center;border-radius:5px; height:40px";
  list.classList.add('newButton');
  list.addEventListener("mouseenter",function(){
    this.style.backgroundColor = '#6AB8DE';
    this.style.cursor='pointer';
  })
  list.addEventListener('mouseleave',function(){
    this.style.backgroundColor="#0D81BC";
  })
  list.innerText=playListValue;
  playListEl.appendChild(list);
  playlistInputEl.value='';
}
