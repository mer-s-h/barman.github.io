import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";


function Detail() {
    const [ingredient, setIngredient] = useState([])
    const strIngredient = []
    // const [search, onChangeSearch] = useState("");
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const { id } = useParams();
    var key = ""
    var measure = ""


    var optionsGet = {
        method: 'GET',
    };



    useEffect(() => {
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`, optionsGet)
            .then(res => res.json())
            .then(res => {
                setData(res.drinks[0])

                for (let index = 1; index <= 15; index++) {
                    key = "strIngredient" + index
                    measure = "strMeasure" + index

                    if (res.drinks[0].hasOwnProperty(key) && res.drinks[0][key] !== null) {
                        if (res.drinks[0][measure] !== null) {
                            strIngredient.push(res.drinks[0][key] + " : " + res.drinks[0][measure])
                        }
                        else (
                            strIngredient.push(res.drinks[0][key])
                        )
                    }
                }

                const filteredArray = strIngredient.filter(function (ele, pos) {
                    return strIngredient.indexOf(ele) == pos;
                })

                setIngredient(filteredArray)
            })
            .catch(error => console.log('error', error))
            .finally(() => setLoading(false));

    }, []);

    return (
        <div className="detai_body">
            {(!isLoading) ?
                <>
                    <h1>{data.strDrink}</h1>

                    <div className="detail_content">
                        <img className="img_detail" src={data.strDrinkThumb} alt="" />
                        <div className="col">

                            <ul>
                                {ingredient.map((e) =>
                                    <li>{e}</li>
                                )}
                            </ul>


                            <p>{data.strInstructions}</p>
                        </div>
                    </div>
                </>
                :
                <h1 className="load">loading</h1>
            }
        </div>

    )
}

export default Detail;