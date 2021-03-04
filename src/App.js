
import './App.css';
import News from './components/News/News';
import { useEffect, useState } from 'react';




function App() {
const [news,setNews] = useState([])
  useEffect(()=>{
    fetch('http://newsapi.org/v2/everything?q=tesla&from=2021-02-04&sortBy=publishedAt&apiKey=b7eeb9cf8bf0447eb78cc731f34d7abc')
    .then(res => res.json())
    .then(data => setNews(data.articles))
  },[])
console.log(news)
  return (
    <div>
      <h2>hi there</h2>
    
    {
    news.map(article => <News article={article}></News>)
    }
    <News></News>
    </div>
    
  );
}

export default App;
