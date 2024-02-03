import './Pagination.css'

//for pagination effect
function Pagination({totalUsers, usersPerPage, paginate}){

    const pageNumbers = [];

    for(let i=1; i<=Math.ceil(totalUsers/usersPerPage);i++){
        pageNumbers.push(i);
    }

    return(
        <div className="pagination">
            {
                pageNumbers.map((pageLink)=>(
                    <a onClick={()=>paginate(pageLink)} href='#users' className='page-link'>
                         <div className="page-link-value">
                            {pageLink}
                        </div>
                    </a>
                ))
            }
        </div>
    )
}

export default Pagination
