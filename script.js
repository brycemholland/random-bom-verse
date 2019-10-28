$( document ).ready(function(){

  function convertBook(book){
    switch (book) {
      case '1 Nephi':
        return '1-ne'
      case '2 Nephi':
        return '2-ne'
      case 'Jacob':
        return 'jacob'
      case 'Enos':
        return 'enos'
      case 'Jarom':
        return 'jarom'
      case 'Omni':
        return 'omni'
      case 'Words of Mormon':
        return 'w-of-m'
      case 'Mosiah':
        return 'mosiah'
      case 'Alma':
        return 'alma'
      case 'Helaman':
        return 'hel'
      case '3 Nephi':
        return '3-ne'
      case '4 Nephi':
        return '4-ne'
      case 'Mormon':
        return 'morm'
      case 'Ether':
        return 'ether'
      case 'Moroni':
        return 'moro'
    }
  }

  const verses_in_book = [618, 779, 203, 27, 15, 30, 18, 785, 1975, 497, 785, 49, 227, 433, 163]
  const total_verse_count = 6604
  const chosen_verse = Math.ceil(Math.random() * total_verse_count)
  console.log(chosen_verse)

  // let verse_index = []
  // for (let i=0; i<bom.books.length; i++){
  //   verse_index.push({
  //     name: convertBook(bom.books[i].book),
  //     verse_count: 0,
  //     chapters: []
  //   })
  //   for (let j=0; j<bom.books[i].chapters.length; j++){
  //     const verses_in_chapter = bom.books[i].chapters[j].verses.length
  //     //verse_index[i].chapters.push(verses_in_chapter)
  //     verse_index[i].verse_count += verses_in_chapter
  //   }
  // }

  // console.log(verse_index)

  let book_name = ''
  let chapter = 0
  let verse = 0

  function getReference(){
    let verse_counter = 0
    for (let i=0; i<bom.books.length; i++){
      if ((verse_counter + verses_in_book[i]) > chosen_verse){
        book_name = convertBook(bom.books[i].book)
        for (let j=0; j<bom.books[i].chapters.length; j++){
          const verses_in_chapter = bom.books[i].chapters[j].verses.length
          if ((verse_counter + verses_in_chapter) > chosen_verse){
            chapter = j+1
            verse = (chosen_verse - verse_counter)
            return
          } else {
            verse_counter += verses_in_chapter
          }
        }
      } else {
        verse_counter += verses_in_book[i]
      }
    }
  }

  getReference()

  $('body').prepend('<p>gospellibrary://content/study/scriptures/bofm/'+book_name+'/'+chapter+'/?lang=eng#p'+verse+'</p>')

});
