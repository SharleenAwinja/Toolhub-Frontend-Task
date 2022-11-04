import React from 'react';
import Post from './Post';

const ListPage = ({toolsInfo, searchTerm}) => {

return (

    <>
    {searchTerm ? toolsInfo.filter((val) => val.name.toLowerCase().includes(searchTerm.toLowerCase())).map((tool) => <Post key={tool.id} tool={tool} />): <div></div>}
    </>
  )
}

export default ListPage;