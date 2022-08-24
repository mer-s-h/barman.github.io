import { useState, useEffect } from "react";
import { Link } from "react-router-dom";


function Home() {
    const [search, onChangeSearch] = useState("");
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [dataSearch, setDataSearch] = useState([]);

    var optionsGet = {
        method: 'GET',
    };

    useEffect(() => {
        fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=c', optionsGet)
            .then(res => res.json())
            .then(res => {
                setData(res.drinks)
            })
            .finally(() => setLoading(false));
    }, []);

    useEffect(() => {
        if (search !== "") {

            fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`, optionsGet)
                .then(res => res.json())
                .then(res => {
                    setDataSearch(res.drinks[0])
                })
                .finally(() => setLoading(false));
        }
    }, [search]);

    // console.log(data);
    return (
        <div className="body">
            {(!isLoading) ?
                <>
                    <form >
                        <input type="text" placeholder="search" onChange={(e) => onChangeSearch(e.target.value)} />
                    </form>

                    {search !== "" ?
                        <div className="result">
                            <Link className="link" to={"/detail/" + dataSearch.idDrink}>
                                <div className="result_body">

                                    <div className="resulxt_content">
                                        <h1>{dataSearch.strDrink}</h1>
                                        <img className="img_home" src={dataSearch.strDrinkThumb} alt="" />
                                    </div>
                                    <div></div>
                                </div>
                            </Link>
                        </div>

                        : ""}
                    <div className="home_body">
                        {data.map((e) =>
                            <Link className="link" to={"/detail/" + e.idDrink}>
                                <div className="block" key={e.strDrink}>
                                    <h1>{e.strDrink}</h1>
                                    <img className="img_home" src={e.strDrinkThumb} alt="" />
                                </div>
                            </Link>
                        )}
                    </div>
                </>
                :
                <>
                    <h1 className="load">loading</h1>
                </>
            }
        </div>
    )

}

export default Home;