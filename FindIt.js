var latitude;
var longitude;
var parkedLatitude;
var parkedLongitude;
var storage;

function init(){
  document.addEventListener("deviceReady", onDeviceReady, false);
  storage = window.localStorage;
}
