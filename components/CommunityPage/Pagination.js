import React from 'react';

const Pagination = ({ postsPerPage, SetCurrentPage, filtered, currentPage }) => {

    // console.log(totalPosts, postsPerPage)
    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(filtered.length / postsPerPage); i++) {
        pageNumbers.push(i)
    }


    return (
        <div>
            <nav aria-label="Page navigation example">
                <ul className="inline-flex -space-x-px">
                    {
                        currentPage === 1 ?
                            <>
                            </>
                            :
                            <li>
                                <a onClick={() => SetCurrentPage(currentPage - 1)} className="px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Previous</a>
                            </li>
                    }
                    {
                        pageNumbers.map((pageNumber, i) =>
                            <li
                                key={i}
                            >
                                <a onClick={() => SetCurrentPage(pageNumber)} className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">{pageNumber}</a>
                            </li>

                        )
                    }
                    {
                        pageNumbers.length === currentPage ?
                            <></>
                            :

                            <li>
                                <a onClick={() => SetCurrentPage(currentPage + 1)} className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Next</a>
                            </li>

                    }
                </ul>
            </nav>
        </div>
    );
};

export default Pagination;