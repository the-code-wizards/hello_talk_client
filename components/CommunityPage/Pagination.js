import React from 'react';

const Pagination = ({ postsPerPage, SetCurrentPage, filtered, currentPage }) => {

    // console.log(totalPosts, postsPerPage)
    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(filtered.length / postsPerPage); i++) {
        pageNumbers.push(i)
    }


    return (
        <div>
            <nav aria-label="Page navigation example ">
                <ul className="inline-flex space-x-1">
                    {
                        currentPage === 1 ?
                            <>
                            </>
                            :
                            <li className='bg-[#ffff]'>
                                <a onClick={() => SetCurrentPage(currentPage - 1)} className="px-3 py-2 ml-0 leading-tight text-[#fff] font-bold bg-[#14678F] border-[2px] border-[#14678F] rounded-md hover:bg-[#51a6d1] hover:text-gray-700  cursor-pointer">Previous</a>
                            </li>
                    }
                    {
                        pageNumbers.map((pageNumber, i) =>
                            <li
                                key={i}
                                className='bg-[#ffff]'
                            >
                                <a onClick={() => SetCurrentPage(pageNumber)} className={` px-3 py-2 ml-0 leading-tight  font-bold  border-[2px] border-[#14678F] rounded-md cursor-pointer hover:bg-[#51a6d1] hover:text-gray-700 ${pageNumber === currentPage ? 'bg-[#ffffff] text-black' : "bg-[#14678F] text-[#fff]"}`}>{pageNumber}</a>
                            </li>

                        )
                    }
                    {
                        pageNumbers.length === currentPage ?
                            <></>
                            :

                            <li className='bg-[#ffff]'>
                                <a onClick={() => SetCurrentPage(currentPage + 1)} className="px-3 py-2 ml-0 leading-tight text-[#fff] font-bold bg-[#14678F] border-[2px] border-[#14678F] rounded-md hover:bg-[#51a6d1] hover:text-gray-700  cursor-pointer">Next</a>
                            </li>

                    }
                </ul>
            </nav>
        </div>
    );
};

export default Pagination;