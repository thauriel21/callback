const isAdult = (number) => {
    if(number >= 18  ){
      return true
    } else {
      return false
    }
  }
  //console.log(mayordeedad(17))

  if(isAdult(17)){
    console.log('Es adulto')
  } else {
    console.log('No es adulto :C')
  }
