export default function Userr({userr}) {
    const { name, email } = userr;
    // console.log(userr);
    return (
        <>
            <p>Name: { name}</p>
            <p>email: { email}</p>
        </>
    )
}