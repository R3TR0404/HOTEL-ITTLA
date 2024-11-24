import { BrowserRouter as useNavigate } from "react-router-dom";

function ReservacionButton(){
    const navigate = useNavigate();

    const handleReservacionClick = () => {
    navigate('/reservaciones');
    };
};



export default ReservacionButton;
