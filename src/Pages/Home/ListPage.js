import React from 'react';
import Post from './Post';

const ListPage = ({toolsInfo, searchTerm}) => {

return (

    <>
    {searchTerm ? toolsInfo.filter((val) => val.toolname.toLowerCase().includes(searchTerm.toLowerCase())).map((tool) => <Post key={tool.id} tool={tool} />): <div></div>}
    </>
  )
}

export default ListPage;