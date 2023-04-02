const getCookie = (cname) => {
    let name = cname + "=";
    let iframe = document.getElementById("wallet-chat-widget")
    console.log(iframe)
    console.log(iframe.contentDocument)
    let cookies = iframe.contentDocument.cookie || document.cookie;
    console.log(cookies)
    console.log(document.cookie)
    let decodedCookie = decodeURIComponent(cookies);  //#
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

  function setCookie(cname, cvalue) {
    document.cookie = cname + "=" + cvalue;
    console.log("Cookies now")
    console.log(document.cookie)
}



export { getCookie, setCookie}