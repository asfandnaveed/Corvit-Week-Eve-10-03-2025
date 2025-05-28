import React, { useState } from "react";

function Register1() {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [address, setAddress] = useState("");
    const [gender, setGender] = useState("");
    const [ph_no, setPh_no] = useState("");


    async function signUp (){
        try{

            const data = {
                name:username,
                email:email,
                pass:password,
                address:address,
                gender:gender,
                phone_number:ph_no
            };

            const result =await fetch('http://localhost:3003/user/register' ,{
                method:'POST',
                headers:{
                    'Content-Type':'application/json',
                },
                body:JSON.stringify(data)
            });

            result.json
            
        }catch(e){
            console.log('ERROR',e);
        }
    }

    return (
        <>
        </>
    );
}


export default Register1;