import React from 'react';
import { Calendar, ArrowUpRight } from 'lucide-react';
import { BlogPost } from '../types';
import { useInView } from '../hooks/useInView';

const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'MARMT:The Memory-Augmented Marketing Maestro - ReAct RAG with strategic retrieval Selection',
    excerpt: 'A scientific paper about the implementation of a ReAct-based RAG agent for marketing strategy, outperforming traditional RAG systems.',
    date: 'May 20, 2025',
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    url: 'https://medium.com/@mouheb.abdelhafidh/marmt-the-memory-augmented-marketing-maestro-react-rag-with-strategic-retrieval-selection-f6101ab7bb0b'
  }
];

const BlogPostCard: React.FC<{ post: BlogPost; index: number }> = ({ post, index }) => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  
  return (
    <div 
      ref={ref}
      className={`bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden transition-all duration-500 transform ${
        inView 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={post.image} 
          alt={post.title} 
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      
      <div className="p-6">
        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
          <Calendar className="h-4 w-4 mr-2" />
          <span>{post.date}</span>
        </div>
        
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
          {post.title}
        </h3>
        
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          {post.excerpt}
        </p>
        
        <a 
  href={post.url} 
  target="_blank" 
  rel="noopener noreferrer"
  className="inline-flex items-center text-indigo-600 dark:text-indigo-400 font-medium hover:text-indigo-700 dark:hover:text-indigo-300"
>
  Read more
  <ArrowUpRight className="ml-1 h-4 w-4" />
</a>

      </div>
    </div>
  );
};

const Blog: React.FC = () => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  
  return (
    <section id="blog" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={ref}
          className={`max-w-4xl mx-auto text-center mb-16 transition-all duration-500 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
            Latest Articles
          </h2>
          <div className="w-20 h-1 bg-indigo-600 dark:bg-indigo-400 mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Explore my thoughts, tutorials, and insights on data science, machine learning, 
            and artificial intelligence in these featured articles.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <BlogPostCard key={post.id} post={post} index={index} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="#all-posts" 
            className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-indigo-100 hover:bg-indigo-200 dark:text-indigo-400 dark:bg-indigo-900/50 dark:hover:bg-indigo-900 transition-colors duration-300"
          >
            View All Articles
          </a>
        </div>
      </div>
    </section>
  );
};

export default Blog;