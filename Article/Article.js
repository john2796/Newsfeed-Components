// // Because classes are not hoised you will need to start your code at the bottom of the page.  Look for the comment "START HERE"



class Article {
  constructor(domElement) {
    // assign this.domElement to the passed in domElement
    this.domElement = domElement;

    // create a reference to the ".expandButton" class. 
    this.expandButton = this.domElement.querySelector('.expandButton');
    this.date = this.domElement.querySelector('.date');
    this.date.textContent = randomDate(new Date(2012, 0, 1), new Date());
    // Using your expandButton reference, update the text on your expandButton to say "expand"
    this.expandButton.textContent = 'expand🔥';
    // Set a click handler on the expandButton reference, calling the expandArticle method.
    this.expandButton.addEventListener('click', () => this.expandArticle());


    this.delete = this.domElement.querySelector('.delete');
    this.delete.addEventListener('click', () => this.deleteArticle());
  }
  expandArticle() {
    // Using our reference to the domElement, toggle a class to expand or hide the article.
    if (this.domElement.classList.toggle('article-open')) {
      this.expandButton.textContent = 'close';
    } else {
      this.expandButton.textContent = 'expand🔥';
    }
  }
  // delete article 
  deleteArticle() {
    this.domElement.style.display = 'none'
  }

}

class Post {
  constructor(input) {
    this.input = input;
    this.title = document.querySelector('#title');
    this.comment = document.querySelector('#comment');
    this.submit = document.querySelector('#submit');
    this.appendPost = document.querySelector('.articles');
    // this.article = document.querySelector('.article');
    this.state = {
      title: '',
      comment: '',
      date: new Date()
    };
    this.title.addEventListener('change', (e) => {
      this.state.title = e.target.value;
    })
    this.comment.addEventListener('change', (e) => {
      this.state.comment = e.target.value;
    })
    this.submit.addEventListener("click", (e) => {
      document.getElementById('myForm').reset()
      this.submitHandler(this.state, this.appendPost);
      // this.resetObj(this.state)
    });
  }

  // resetObj(state) {

  //   let result = Object.keys(state).map((key) => ([String(key), state[key]]))
  //   // const filter = result.filter(function (item, pos, self) {
  //   //   return self.indexOf(item) === pos;
  //   // })
  //   result = 0
  //   return result;
  // }



  submitHandler(state, post) {

    const { comment, title } = state;
    console.log({ comment, title })
    if (comment.length === 0) return;
    if (title.length === 0) return;
    //check form submit 

    const articleDiv = document.createElement("div");
    articleDiv.className = "article";

    //red close butotn
    const closeBtn = document.createElement("span");
    closeBtn.className = "delete";
    const x = document.createTextNode("𝐗");
    closeBtn.appendChild(x);
    closeBtn.addEventListener("click", e => this.deleteArticle(e));

    // h2 titles
    const h2Title = document.createElement("h2");
    const h2TitleText = document.createTextNode(title);
    h2Title.appendChild(h2TitleText);

    // p date
    const date = document.createElement("p");
    date.className = "date";
    const dateEntered = document.createTextNode(state.date);
    date.appendChild(dateEntered);
    // p message
    const text = document.createElement("p");
    const textEntered = document.createTextNode(comment);
    text.appendChild(textEntered);

    //span
    const span = document.createElement("span");
    span.className = "expandButton";
    const spanText = document.createTextNode("expand🔥");
    span.appendChild(spanText);
    span.addEventListener("click", e => this.expandArticle(e, spanText));

    //append everything to articleDiv
    articleDiv.append(h2Title, closeBtn, date, text, span);

    //append post

    post.appendChild(articleDiv);
  }

  deleteArticle(e) {
    e.target.parentElement.style.display = "none";
  }

  expandArticle(e, spanText) {
    if (e.target.parentElement.classList.toggle('article-open')) {
      spanText.textContent = 'close';
    } else {
      spanText.textContent = 'expand🔥';
    }
  }
  handleClose(e) {
    e.target.parentElement.style.display = "none";
  }
}

/* START HERE: 
- Select all classes named ".article" and assign that value to the articles variable.  

- With your selection in place, now chain .forEach() on to the articles variable to iterate over the articles NodeList and create a new instance of Article by passing in each article as a parameter to the constructor.

*/

let articles = document.querySelectorAll('.article');
articles.forEach((article) => {
  // console.log(article)
  return new Article(article);
})


function randomDate(start, end) {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

let inputs = document.querySelectorAll('.form-group');
inputs.forEach((input) => {
  return new Post(input);
})


























// articles = [
//   {
//     title: 'Brand New Title',
//     date: 'Nov 5th, 2017',
//     paragraph1: 'Create a function that builds Article components. You are not expected to finish this. This goal is simply an exercise in thinking about how you would implement a function that took some data, created a new Article from it, and appended it to the HTML (without actually writing anything in the HTML file). This is a difficult concept to undertake, but even thinking about how you would implement it will give you a better understanding of how we use frameworks in upcoming sprints. ',
//     paragraph2: 'Create a function that builds Article components. You are not expected to finish this. This goal is simply an exercise in thinking about how you would implement a function that took some data, created a new Article from it, and appended it to the HTML (without actually writing anything in the HTML file). This is a difficult concept to undertake, but even thinking about how you would implement it will give you a better understanding of how we use frameworks in upcoming sprints. ',
//   },
//   {
//     title: 'Amazing Article',
//     date: 'Apr 13th, 2018',
//     paragraph1: 'Create a function that builds Article components. You are not expected to finish this. This goal is simply an exercise in thinking about how you would implement a function that took some data, created a new Article from it, and appended it to the HTML (without actually writing anything in the HTML file). This is a difficult concept to undertake, but even thinking about how you would implement it will give you a better understanding of how we use frameworks in upcoming sprints. ',
//     paragraph2: 'Create a function that builds Article components. You are not expected to finish this. This goal is simply an exercise in thinking about how you would implement a function that took some data, created a new Article from it, and appended it to the HTML (without actually writing anything in the HTML file). This is a difficult concept to undertake, but even thinking about how you would implement it will give you a better understanding of how we use frameworks in upcoming sprints. ',
//   },
//   {
//     title: 'Stunning News Yall',
//     date: 'Dec 22nd, 2018',
//     paragraph1: 'Create a function that builds Article components. You are not expected to finish this. This goal is simply an exercise in thinking about how you would implement a function that took some data, created a new Article from it, and appended it to the HTML (without actually writing anything in the HTML file). This is a difficult concept to undertake, but even thinking about how you would implement it will give you a better understanding of how we use frameworks in upcoming sprints. ',
//     paragraph2: 'Create a function that builds Article components. You are not expected to finish this. This goal is simply an exercise in thinking about how you would implement a function that took some data, created a new Article from it, and appended it to the HTML (without actually writing anything in the HTML file). This is a difficult concept to undertake, but even thinking about how you would implement it will give you a better understanding of how we use frameworks in upcoming sprints. ',
//   }
// ];

// class Article {
//   constructor(data) {
//     this.article = data;
//     this.articleContainer = document.querySelector('.articles');

//     this.articleDiv = document.createElement('div');
//     this.articleDiv.className = 'article';

//     this.articleTitle = document.createElement('h2');
//     this.articleTitle.textContent = data.title;
//     this.articleDiv.appendChild(this.articleTitle);

//     this.articleDate = document.createElement('p');
//     this.articleDate.className = 'date';
//     this.articleDate.textContent = data.date;
//     this.articleDiv.appendChild(this.articleDate);

//     this.articleParagraph1 = document.createElement('p');
//     this.articleParagraph1.textContent = data.paragraph1;
//     this.articleParagraph1.className = 'content';
//     this.articleDiv.appendChild(this.articleParagraph1);

//     this.articleParagraph2 = document.createElement('p');
//     this.articleParagraph2.textContent = data.paragraph2;
//     this.articleParagraph2.className = 'content';
//     this.articleDiv.appendChild(this.articleParagraph2);

//     this.expandButton = document.createElement('span');
//     this.expandButton.textContent = 'Click to Expand';
//     this.expandButton.className = 'expandButton';
//     this.isExpanded = false;
//     this.expandButton.addEventListener('click', () => this.toggleArticle());
//     this.articleDiv.appendChild(this.expandButton);

//     this.readButton = document.createElement('span');
//     this.readButton.textContent = '[x]';
//     this.readButton.className = 'readButton';
//     this.readButton.addEventListener('click', () => this.removeArticle());
//     this.articleDiv.appendChild(this.readButton);

//     this.articleContainer.prepend(this.articleDiv);
//   }
//   toggleArticle() {
//     if (!this.isExpanded) {
//       this.articleDiv.classList.add('article-open');
//       this.expandButton.textContent = 'Click to Close';
//       this.isExpanded = true;
//     } else {
//       this.articleDiv.classList.remove('article-open');
//       this.expandButton.textContent = 'Click to Expand';
//       this.isExpanded = false;
//     }
//   }
//   removeArticle() {
//     this.articleContainer.removeChild(this.articleDiv);
//   }
// }


// // Article Input Form

// function handleFormSubmit() {
//   const titleInput = document.querySelector('.title-input');
//   const dateInput = document.querySelector('.date-input');
//   const contentInput = document.querySelector('.content-input');

//   const newArticleData = {
//     title: titleInput.value,
//     date: dateInput.value,
//     paragraph1: contentInput.value,
//   };

//   titleInput.value = '';
//   dateInput.value = '';
//   contentInput.value = '';

//   if (newArticleData.title && newArticleData.date && newArticleData.paragraph1) {
//     return new Article(newArticleData);
//   }
// }

// const submit = document.querySelector('.submit-article');
// submit.addEventListener('click', () => handleFormSubmit());

// // Render Articles Array

// function renderArticles(array) {
//   array.map(articleData => new Article(articleData));
// }

// renderArticles(articles);

// // Menu
// const toggleMenu = () => {
//   menu.classList.toggle('menu--open');
// }
// const menu = document.querySelector('.menu');
// const menuButton = document.querySelector('.menu-button');

// menuButton.addEventListener('click', function (e) {
//   toggleMenu();
//   e.stopPropagation();
// });

// window.addEventListener('click', function () {
//   menu.classList.remove('menu--open');
// });










