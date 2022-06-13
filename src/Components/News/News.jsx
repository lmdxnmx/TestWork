import React, { useEffect } from "react";
import { getNews } from "../../store/action-creator/news-action";
import { useDispatch, useSelector } from "react-redux";
import s from './News.module.css'
const News = () => {
  const dispatch = useDispatch()
  const news = useSelector(state => state.repos.items)

  useEffect(()=>{
      dispatch(getNews())
  },[])
 

  return (
    <div className={s.news}>
 {news.map((news)=>{
   return <div className={s.news__content} key={news.id}>
     <span className={s.news__content_title}>{news.title}</span>
     <span className={s.news__content_body}>{news.body}</span>
   </div>
 })}
    </div>
  );
};

export default News;
