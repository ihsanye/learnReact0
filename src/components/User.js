// function User(props) {
//     console.log(props);
//     return (
//         <div><h2>{
//             props.isLoggedIn ? `Hosgeldin ${props.name} ${props.last}` : "Gecersiz Islem"
//         }</h2>
//         </div>
//     )
// }
// export default User;

function User({ name, last, isLoggedIn, age, friends }) {
    return (
        <div>
            <h1>
                {isLoggedIn ? `Hosgeldin ${name} ${age}` : "Gecersiz Islem"}
            </h1>
            {friends.map((friend, index) => (
                <div key={index}>
                    {index} - {friend}
                </div>))}
        </div>
    )
}
export default User;