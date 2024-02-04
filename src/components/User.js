import PropTypes from "prop-types";

function User({ name, last, isLoggedIn, age, friends, address }) {
    return (
        <div>
            <h1>
                {isLoggedIn ? `Hosgeldin ${name} ${age}` : "Gecersiz Islem"}
            </h1>
            {address.title} {address.zip}
            <br />
            <br />
            {friends.map((friend, index) => (
                <div key={index}>
                    {index} - {friend}
                </div>))}
        </div>
    )
}

User.propTypes = {
    name: PropTypes.string.isRequired,
    last: PropTypes.string.isRequired,
    isLoggedIn: PropTypes.bool.isRequired,
    age: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string]),
    friends: PropTypes.array,
    address: PropTypes.shape({
        title: PropTypes.string,
        zip: PropTypes.string,
    })
};
//zip number olrsa 0 ile baslayan sayilar error veriyor, parseInt ile cozulur

User.defaultProps = {
    name: "isimsiz",
    isLoggedIn: false
};
//deger gonderilmemisse varsayilan olarak bunlar gonderilir
export default User;