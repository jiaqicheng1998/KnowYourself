article reducers: 
//loadArticleThunk
store.dispatch(articleActions.loadArticlesThunk())

//addArticleThunk
let article = {title: 'b2', content: 'sunset'} 
store.dispatch(articleActions.addArticleThunk(article))

//putArticleThunk
let article = {title: 'b222222', content: 'sunset1111'}
store.dispatch(articleActions.putArticleThunk(article,5)) 

//deleteArticleThunk 
store.dispatch(articleActions.deleteArticleThunk(5))