function navega(pagina) {
    var linkNavega = window.location.href
    var tamanhoLinkNavega = 0;
  
    for(let tamanho = linkNavega.length-1; tamanho > 0; tamanho--) {
      if( linkNavega[tamanho]  == '/') {
          tamanhoLinkNavega = tamanho;
          break
      }
    }
  
    //window.location.href = link.substring(0, tamanhoLink)+'/'+pagina;
    window.location.href = linkNavega.substring(0, tamanhoLinkNavega)+'/'+pagina
  
  }