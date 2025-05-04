import axios from 'axios';
import { console } from 'inspector';

const API_URL = 'https://jsonplaceholder.typicode.com/posts';

export const fetchPostById = async (id: number) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching post:', error);
    throw new Error('Failed to fetch post');
  }
};

export const createPost = async (postData: { title: string; body: string; userId: number }) => {
  try {
    const response = await axios.post(API_URL, postData);
    return response.data;
  } catch (error) {
    console.error('Error creating post:', error);
    throw new Error('Failed to create post');
  }
};


