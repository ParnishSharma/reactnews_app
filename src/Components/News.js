import React, { useEffect, useState } from 'react';
import Newsitem from './Newsitem';
import Loader from './Loader';
import PropTypes from 'prop-types';
require('dotenv').config();


const News = (props) => {
  const { country, category, setProgress } = props;
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const updatenews = async () => {
      setProgress(10);
      const apiKey = process.env.API_KEY;
      setLoading(true);
      setProgress(10);
      let data = await fetch(apiKey);
      setProgress(50);
      let parsedData = await data.json();
      setArticles(parsedData.articles);
      setLoading(false);
      setProgress(100);
    };

    updatenews();
  }, [country, category, setProgress]);

  return (
    <div className='container my-4'>
      <h1 className='text-center p-4 bg-success my-5 '>{category} - NewsHeadlines</h1>
      {loading && <Loader />}
      <div className='row'>
        {articles.map((element) => (
          <div className='col-md-4' key={element.url}>
            <Newsitem
              imageurl={element.urlToImage ? element.urlToImage : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIV98wqz6QMosp5pEBbzbT6mr2n8tH9xd8XQ&usqp=CAU'}
              title={element.title ? element.title.slice(0, 90) + '...' : ''}
              description={element.description ? element.description.slice(0, 180) + '...' : ' '}
              newsurl={element.url}
              author={element.author}
              date={element.publishedAt}
              source={element.source.name}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

News.defaultProps = {
  country: 'in',
  category: 'general'
};

News.propTypes = {
  country: PropTypes.string,
  category: PropTypes.string,
  setProgress: PropTypes.func.isRequired
};

export default News;
