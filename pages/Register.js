import React, { useState } from "react";

const Register = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  return (
    <div className="Reg">
      <h3> Register </h3>
      <div className="Reg-1">
        <label htmlFor=""> Name : </label>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setname(e.target.value)}
        />
      </div>
      <div className="Reg-1">
        <label htmlFor=""> Email : </label>
        <input
          type="email"
          placeholder="Name"
          value={email}
          onChange={(e) => setemail(e.target.value)}
        />
      </div>
      <div className="Reg-1">
        <label htmlFor=""> Password : </label>
        <input
          type="password"
          placeholder="Name"
          value={password}
          onChange={(e) => setpassword(e.target.value)}
        />
      </div>
      <button className="btn"> Register </button>
    </div>
  );
};

export default Register;
