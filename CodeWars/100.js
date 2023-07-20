function songDecoder(song){
  return song.replace(/WUB/g, ' ').split(' ').filter(word=>word!='').join(' ');
;
}