import { useParams } from "react-router-dom";

const Category = (e) => {
    const params = useParams();
     return <h3>Ini Halaman Category {params.name}</h3>
};

export default Category;