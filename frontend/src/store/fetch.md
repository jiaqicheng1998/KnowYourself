article reducers: 
//loadArticlesThunk
store.dispatch(articleActions.loadArticlesThunk())

//addArticleThunk
let article = {title: 'b2', content: 'sunset'} 
store.dispatch(articleActions.addArticleThunk(article))

//putArticleThunk
let article = {title: 'b222222', content: 'sunset1111'}
store.dispatch(articleActions.putArticleThunk(article,5)) 

//deleteArticleThunk 
store.dispatch(articleActions.deleteArticleThunk(5))

comment reducers:
//loadCommentsThunk
store.dispatch(commentActions.loadCommentsThunk())

//addCommentThunk
let comment = {article_id: 1, content: 'sunset'} 
store.dispatch(commentActions.addCommentThunk(comment))

//putCommentThunk
let comment = {article_id: '1', content: 'sunset edited'}
store.dispatch(commentActions.putCommentThunk(comment,37)) 

//deleteCommentThunk 
store.dispatch(commentActions.deleteCommentThunk(37))

//addImageThunk
let image = {img_url: 'https://www.gojinshi.com/wp-content/uploads/2020/06/K-On-Watch-Order-Guide.jpg', article_id: 35} 
store.dispatch(imageActions.addImageThunk(image))


let result = {title: 'b2', result: 'sunset'} 
store.dispatch(resultActions.addResultThunk(result))