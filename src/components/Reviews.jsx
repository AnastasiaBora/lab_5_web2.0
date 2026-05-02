import { useState, useEffect } from 'react';

function Reviews() {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/3/comments')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setComments(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <section className="bg-white rounded-2xl shadow-xl p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Reviews</h2>
        <p className="text-gray-500 text-center">Loading comments...</p>
      </section>
    );
  }

  if (error) {
    return (
      <section className="bg-white rounded-2xl shadow-xl p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Reviews</h2>
        <p className="text-red-500 text-center">Error: {error}</p>
      </section>
    );
  }

  return (
    <section className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Reviews</h2>
      <div className="space-y-4 max-h-96 overflow-y-auto">
        {comments.slice(0, 5).map(comment => (
          <div key={comment.id} className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-semibold text-gray-800">{comment.name}</h3>
              <span className="text-xs text-gray-500">{comment.email}</span>
            </div>
            <p className="text-gray-600 text-sm">{comment.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Reviews;