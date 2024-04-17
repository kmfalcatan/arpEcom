function popUpForm(){
  var popUp = document.querySelector('.container1');

  if(popUp.style.display === 'none'){
    popUp.style.display = 'block';
  } else{
    popUp.style.display = 'none';
  }
}