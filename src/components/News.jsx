import React, { useState } from 'react'
import Navbar from './Navbar';
import Newsboard from './Newsboard';
import Layout from '../Layout/Layout';
const Home = () => {
    const handleSearch = (query) => {
        setSearchQuery(query);
        // Optionally, you can reset the category or fetch search-specific results here.
        console.log(`Searching for: ${query}`);
      };
    const [category, setCategory] = useState('general');
    const [searchQuery, setSearchQuery] = useState('');
    return (
        <>
            <Layout>
            <Navbar setCategory={setCategory} handleSearch={handleSearch} />
            <Newsboard category={category} searchQuery={searchQuery} />
            </Layout>
        </>
    )
}

export default Home
