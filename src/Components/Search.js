import {useState} from 'react'
import {useNavigate} from 'react-router-dom'

function Search() {
    const [keyword, setKeyword] = useState("");
    const navigate = useNavigate();

    const searchHandler = () => {
        navigate('/'+ keyword)
    }

    return (
        <>
            <div className="input-group">
                <input
                    type="text"
                    id="search_field"
                    onChange={(e)=> setKeyword(e.target.value)}
                    className="form-control"
                    placeholder="Enter Product Name ..."
                />
                <div className="input-group-append">
                    <button id="search_btn" onClick={searchHandler} className="btn">
                        <i className="fa fa-search" aria-hidden="true"></i>
                    </button>
                </div>
            </div>
        </>
    )
}

export default Search;